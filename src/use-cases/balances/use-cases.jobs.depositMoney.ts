import Boom from "@hapi/boom";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";

import { ContractStatus, IBuildDepositMoney, IDepositMoneyResponse, ProfileType } from "../../ts/index.js";

function buildDepositMoney({
    profileRepository,
    jobRepository,
    contractRepository,
    db,
}: IBuildDepositMoney) {
    return async function depositMoney(profileId: string, userId: string, deposit: number): Promise<IDepositMoneyResponse> {
        const clientDepositor = await profileRepository.findOne({
            where: {
                id: profileId,
                type: ProfileType.CLIENT,
            },
            include: {
                model: contractRepository,
                as: "Client",
            },
        });

        const clientReceiver = await profileRepository.findOne({
            where: {
                id: userId,
                type: ProfileType.CLIENT,
            },
        });

        if (!clientDepositor || !clientReceiver) {
            throw Boom.badData("INELIGIBLE_TRANSACTION", {
                profileDepositor: clientDepositor,
                profileReceiver: clientReceiver,
            });
        }

        const clientDepositorContractsIds = clientDepositor.Client.map((contract) => contract.id);

        const clientDepositorContracts = await contractRepository.findAll({
            where: {
                status: {
                    [Op.ne]: ContractStatus.TERMINATED,
                },
                id: {
                    [Op.in]: clientDepositorContractsIds,
                },
            },
            include: {
                model: jobRepository,
                where: {
                    paid: false,
                },
            },
        });

        const depositorTotalOfJobsToPay = clientDepositorContracts.reduce(
            function (acc, contract) {
                const contractJobsSum = contract.Jobs.reduce(
                    function (acc, job) {
                        return acc + job.price;
                    },
                    0,
                );
                return acc + contractJobsSum;
            },
            0,
        );

        const depositLimit = Math.floor(depositorTotalOfJobsToPay * 0.25);
        if (deposit > depositLimit) {
            throw Boom.badData("DEPOSIT_SURPASSED_LIMIT", {
                deposit,
                depositLimit,
                depositorTotalOfJobsToPay,
            });
        }

        await db.transaction(async (t) => {
            await clientReceiver.increment("balance", { by: deposit, transaction: t });
        });

        await clientReceiver.reload();

        return {
            statusCode: StatusCodes.OK,
            data: {
                clientDepositor,
                clientReceiver,
                deposit,
            },
        };
    };
}

export default buildDepositMoney;
