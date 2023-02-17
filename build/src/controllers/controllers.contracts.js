import { contractsService } from "../use-cases/index.js";
export default Object.freeze({
    getContracts: (httpRequest) => {
        const profileId = httpRequest.headers.profile_id;
        return contractsService.getContracts(profileId);
    },
    getContract: (httpRequest) => {
        const profileId = httpRequest.headers.profile_id;
        const { id: contractId } = httpRequest.path;
        return contractsService.getContract(profileId, contractId);
    },
});
//# sourceMappingURL=controllers.contracts.js.map