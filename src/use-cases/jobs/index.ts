import { Contract } from "../../entities/index.js";
import buildGetUnpaidJobs from "./use-cases.jobs.getUnpaidJobs.js";

const getUnpaidJobs = buildGetUnpaidJobs({
    contractRepository: Contract,
});

const jobsService = Object.freeze({
    getUnpaidJobs,
});

export default jobsService;
export { getUnpaidJobs };
