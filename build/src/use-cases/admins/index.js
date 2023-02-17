import { Contract, Job, Profile } from "../../entities/index.js";
import buildGetBestClients from "./use-cases.admins.getBestClients.js";
import buildGetBestProfession from "./use-cases.admins.getBestProfession.js";
const getBestProfession = buildGetBestProfession({
    profileRepository: Profile,
    jobRepository: Job,
    contractRepository: Contract,
});
const getBestClients = buildGetBestClients({
    profileRepository: Profile,
    jobRepository: Job,
    contractRepository: Contract,
});
const adminsService = Object.freeze({
    getBestProfession,
    getBestClients,
});
export default adminsService;
export { getBestClients, getBestProfession };
//# sourceMappingURL=index.js.map