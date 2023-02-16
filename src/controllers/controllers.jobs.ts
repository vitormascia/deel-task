import { IGetUnpaidJobsRequest, IGetUnpaidJobsResponse } from "../ts/index.js";
import { jobsService } from "../use-cases/index.js";

export default Object.freeze({
    getUnpaidJobs: (httpRequest: IGetUnpaidJobsRequest): Promise<IGetUnpaidJobsResponse> => {
        const profileId = httpRequest.headers.profile_id as string;

        return jobsService.getUnpaidJobs(profileId);
    },
});
