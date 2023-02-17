import { StatusCodes } from "http-status-codes";
import _ from "lodash";
import { Op } from "sequelize";

import { logger } from "../../app/log/index.js";
import { IBuildGetBestClients, IGetBestClientsResponse } from "../../ts/index.js";

interface IClient {
    id: number;
    fullName: string;
}

function buildGetBestClients({
    profileRepository,
    jobRepository,
    contractRepository,
}: IBuildGetBestClients) {
    return async function getBestClients(start: string, end: string, limit: string): Promise<IGetBestClientsResponse> {
        const contracts = await contractRepository.findAll({
            where: {
                createdAt: {
                    [Op.between]: [start, end],
                },
            },
            include: [
                {
                    model: jobRepository,
                    where: {
                        paid: true,
                    },
                },
                {
                    model: profileRepository,
                    as: "Client",
                },
            ],
        });

        const myMap = new Map<IClient, number>();

        contracts.forEach((contract) => {
            const contractJobsSum = contract.Jobs.reduce(
                function (acc, job) {
                    return acc + job.price;
                },
                0,
            );

            const { id, fullName } = contract.Client;
            const client = { id, fullName };

            if (!myMap.has(client)) {
                myMap.set(client, contractJobsSum);
            } else {
                const v = myMap.get(client) as number;
                myMap.set(client, contractJobsSum + v);
            }
        });

        for (const [key, value] of myMap) {
            logger.info("END", { key, value });
        }

        let clientsExpensesRank = [];

        for (const [key, value] of myMap) {
            clientsExpensesRank.push([key, value]);
        }

        clientsExpensesRank.sort((a, b) => {
            return (b[1] as number) - (a[1] as number);
        });

        clientsExpensesRank = _.take(clientsExpensesRank, parseInt(limit));

        clientsExpensesRank = clientsExpensesRank.map((clientExpenses) => {
            return {
                ...clientExpenses[0] as IClient,
                paid: clientExpenses[1],
            };
        });

        return {
            statusCode: StatusCodes.OK,
            data: clientsExpensesRank,
        };
    };
}

export default buildGetBestClients;
