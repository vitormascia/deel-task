import { IBuildPayJob, IPayJobResponse } from "../../ts/index.js";
declare function buildPayJob({ profileRepository, jobRepository, contractRepository, db, }: IBuildPayJob): (profileId: string, jobId: string) => Promise<IPayJobResponse>;
export default buildPayJob;
