import { IBuildGetBestProfession, IGetBestProfessionResponse } from "../../ts/index.js";
declare function buildGetBestProfession({ profileRepository, jobRepository, contractRepository, }: IBuildGetBestProfession): (start: string, end: string) => Promise<IGetBestProfessionResponse>;
export default buildGetBestProfession;
