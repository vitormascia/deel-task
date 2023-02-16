import { Contract, Job, Profile } from "../../entities/index.js";
import buildGetBestProfession from "./use-cases.admins.getBestProfession.js";

const getBestProfession = buildGetBestProfession({
    profileRepository: Profile,
    jobRepository: Job,
    contractRepository: Contract,
});

const adminsService = Object.freeze({
    getBestProfession,
});

export default adminsService;
export { getBestProfession };
