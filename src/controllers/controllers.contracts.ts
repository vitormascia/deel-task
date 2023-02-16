import { IGetContractRequest, IGetContractResponse, IGetContractsRequest, IGetContractsResponse } from "../ts/index.js";
import { contractsService } from "../use-cases/index.js";

export default Object.freeze({
    getContracts: (httpRequest: IGetContractsRequest): Promise<IGetContractsResponse> => {
        const profileId = httpRequest.headers.profile_id as string;

        return contractsService.getContracts(profileId);
    },
    getContract: (httpRequest: IGetContractRequest): Promise<IGetContractResponse> => {
        const profileId = httpRequest.headers.profile_id as string;
        const { id: contractId } = httpRequest.path;

        return contractsService.getContract(profileId, contractId);
    },
});
