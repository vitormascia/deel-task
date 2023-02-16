import { IGetUnpaidJobsRequest, IGetUnpaidJobsResponse, IPayJobRequest, IPayJobResponse } from "../ts/index.js";
import { jobsService } from "../use-cases/index.js";

export default Object.freeze({
    getUnpaidJobs: (httpRequest: IGetUnpaidJobsRequest): Promise<IGetUnpaidJobsResponse> => {
        const profileId = httpRequest.headers.profile_id as string;

        return jobsService.getUnpaidJobs(profileId);
    },
    payJob: (httpRequest: IPayJobRequest): Promise<IPayJobResponse> => {
        const profileId = httpRequest.headers.profile_id as string;
        const { job_id: jobId } = httpRequest.path;

        return jobsService.payJob(profileId, jobId);
    },
});
