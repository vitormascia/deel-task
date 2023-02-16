import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";

import { IBuildGetBestProfession, IGetBestProfessionResponse } from "../../ts/index.js";

function buildGetBestProfession({
    profileRepository,
    jobRepository,
    contractRepository,
}: IBuildGetBestProfession) {
    return async function getBestProfession(start: string, end: string): Promise<IGetBestProfessionResponse> {
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
                    as: "Contractor",
                },
            ],
        });

        const professionsEarns: { [key: string]: number } = {};

        contracts.forEach((contract) => {
            const contractJobsSum = contract.Jobs.reduce(
                function (acc, job) {
                    return acc + job.price;
                },
                0,
            );

            const profession = contract.Contractor.profession;

            if (!professionsEarns[profession]) {
                professionsEarns[profession] = contractJobsSum;
            } else {
                professionsEarns[profession] += contractJobsSum;
            }
        });

        const professionsEarnsRank = [];

        for (const key in professionsEarns) {
            professionsEarnsRank.push([key, professionsEarns[key]]);
        }

        professionsEarnsRank.sort((a, b) => {
            return (b[1] as number) - (a[1] as number);
        });

        const [getBestProfession] = professionsEarnsRank;
        const [name, earns] = getBestProfession;

        return {
            statusCode: StatusCodes.OK,
            data: { name, earns },
        };
    };
}

export default buildGetBestProfession;
