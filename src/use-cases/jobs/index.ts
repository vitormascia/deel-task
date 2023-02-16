import { db } from "../../app/databases/index.js";
import { Contract, Job, Profile } from "../../entities/index.js";
import buildGetUnpaidJobs from "./use-cases.jobs.getUnpaidJobs.js";
import buildPayJob from "./use-cases.jobs.payJob.js";

const getUnpaidJobs = buildGetUnpaidJobs({
    contractRepository: Contract,
});

const payJob = buildPayJob({
    profileRepository: Profile,
    jobRepository: Job,
    contractRepository: Contract,
    db,
});

const jobsService = Object.freeze({
    getUnpaidJobs,
    payJob,
});

export default jobsService;
export { getUnpaidJobs, payJob };
