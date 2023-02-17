declare const getUnpaidJobs: (profileId: string) => Promise<import("../../ts/interfaces.js").IGetUnpaidJobsResponse>;
declare const payJob: (profileId: string, jobId: string) => Promise<import("../../ts/interfaces.js").IPayJobResponse>;
declare const jobsService: Readonly<{
    getUnpaidJobs: (profileId: string) => Promise<import("../../ts/interfaces.js").IGetUnpaidJobsResponse>;
    payJob: (profileId: string, jobId: string) => Promise<import("../../ts/interfaces.js").IPayJobResponse>;
}>;
export default jobsService;
export { getUnpaidJobs, payJob };
