import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";

import { Job } from "../../entities/index.js";
import { ContractStatus, IBuildGetUnpaidJobs, IGetUnpaidJobsResponse } from "../../ts/index.js";

function buildGetUnpaidJobs({
    contractRepository,
}: IBuildGetUnpaidJobs) {
    return async function getUnpaidJobs(profileId: string): Promise<IGetUnpaidJobsResponse> {
        const contractsIfUnpaidJobs = await contractRepository.findAll({
            where: {
                status: ContractStatus.IN_PROGRESS,
                [Op.or]: [
                    { ContractorId: profileId },
                    { ClientId: profileId },
                ],
            },
            include: {
                model: Job,
                where: {
                    paid: false,
                },
            },
        });

        const jobs = contractsIfUnpaidJobs.map((contract) => {
            return contract.Jobs;
        }).flat();

        return {
            statusCode: StatusCodes.OK,
            data: jobs,
        };
    };
}

export default buildGetUnpaidJobs;
