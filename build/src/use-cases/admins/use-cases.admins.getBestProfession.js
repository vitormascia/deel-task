import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
function buildGetBestProfession({ profileRepository, jobRepository, contractRepository, }) {
    return async function getBestProfession(start, end) {
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
        const professionsEarns = {};
        contracts.forEach((contract) => {
            const contractJobsSum = contract.Jobs.reduce(function (acc, job) {
                return acc + job.price;
            }, 0);
            const profession = contract.Contractor.profession;
            if (!professionsEarns[profession]) {
                professionsEarns[profession] = contractJobsSum;
            }
            else {
                professionsEarns[profession] += contractJobsSum;
            }
        });
        const professionsEarnsRank = [];
        for (const key in professionsEarns) {
            professionsEarnsRank.push([key, professionsEarns[key]]);
        }
        professionsEarnsRank.sort((a, b) => {
            return b[1] - a[1];
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
//# sourceMappingURL=use-cases.admins.getBestProfession.js.map