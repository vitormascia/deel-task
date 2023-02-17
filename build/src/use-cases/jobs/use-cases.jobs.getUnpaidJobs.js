import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
import { Job } from "../../entities/index.js";
import { ContractStatus } from "../../ts/index.js";
function buildGetUnpaidJobs({ contractRepository, }) {
    return async function getUnpaidJobs(profileId) {
        const contractsWithUnpaidJobs = await contractRepository.findAll({
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
        const jobs = contractsWithUnpaidJobs.map((contract) => {
            return contract.Jobs;
        }).flat();
        return {
            statusCode: StatusCodes.OK,
            data: jobs,
        };
    };
}
export default buildGetUnpaidJobs;
//# sourceMappingURL=use-cases.jobs.getUnpaidJobs.js.map