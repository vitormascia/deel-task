import { IBuildGetUnpaidJobs, IGetUnpaidJobsResponse } from "../../ts/index.js";
declare function buildGetUnpaidJobs({ contractRepository, }: IBuildGetUnpaidJobs): (profileId: string) => Promise<IGetUnpaidJobsResponse>;
export default buildGetUnpaidJobs;
