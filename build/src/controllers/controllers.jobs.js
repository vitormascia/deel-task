import { jobsService } from "../use-cases/index.js";
export default Object.freeze({
    getUnpaidJobs: (httpRequest) => {
        const profileId = httpRequest.headers.profile_id;
        return jobsService.getUnpaidJobs(profileId);
    },
    payJob: (httpRequest) => {
        const profileId = httpRequest.headers.profile_id;
        const { job_id: jobId } = httpRequest.path;
        return jobsService.payJob(profileId, jobId);
    },
});
//# sourceMappingURL=controllers.jobs.js.map