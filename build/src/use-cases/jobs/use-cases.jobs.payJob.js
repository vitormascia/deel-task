import Boom from "@hapi/boom";
import { StatusCodes } from "http-status-codes";
import { ContractStatus, ProfileType } from "../../ts/index.js";
function buildPayJob({ profileRepository, jobRepository, contractRepository, db, }) {
    return async function payJob(profileId, jobId) {
        const client = await profileRepository.findOne({
            where: {
                id: profileId,
                type: ProfileType.CLIENT,
            },
        });
        if (!client)
            throw Boom.badData("INELIGIBLE_PAYER", { profile: client });
        const job = await jobRepository.findOne({
            where: {
                id: jobId,
                paid: false,
            },
        });
        if (!job)
            throw Boom.badData("INVALID_JOB", { job });
        const contract = await contractRepository.findOne({
            where: {
                id: job.ContractId,
                ClientId: client.id,
            },
            include: {
                model: profileRepository,
                as: "Contractor",
            },
        });
        if (!contract)
            throw Boom.badData("INVALID_CONTRACT", { contract });
        const clientBalance = client.balance;
        const jobPrice = job.price;
        if (clientBalance < jobPrice)
            throw Boom.badData("INSUFFICIENT_FUNDS", { clientBalance, jobPrice });
        await db.transaction(async (t) => {
            await client.decrement("balance", { by: jobPrice, transaction: t });
            await contract.Contractor.increment("balance", { by: jobPrice, transaction: t });
            await contract.update({
                status: ContractStatus.TERMINATED,
            }, { transaction: t });
            await job.update({
                paid: true,
                paymentDate: new Date().toISOString(),
            }, { transaction: t });
        });
        await client.reload();
        await contract.reload();
        await contract.save();
        await job.save();
        return {
            statusCode: StatusCodes.OK,
            data: {
                client,
                contractor: contract.Contractor,
                contract: contract,
                job,
            },
        };
    };
}
export default buildPayJob;
//# sourceMappingURL=use-cases.jobs.payJob.js.map