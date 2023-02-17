import { IGetUnpaidJobsRequest, IGetUnpaidJobsResponse, IPayJobRequest, IPayJobResponse } from "../ts/index.js";
declare const _default: Readonly<{
    getUnpaidJobs: (httpRequest: IGetUnpaidJobsRequest) => Promise<IGetUnpaidJobsResponse>;
    payJob: (httpRequest: IPayJobRequest) => Promise<IPayJobResponse>;
}>;
export default _default;
