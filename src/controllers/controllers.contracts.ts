import { IGetContractRequest, IGetContractResponse } from "../ts/index.js";
import { contractsService } from "../use-cases/index.js";

export default Object.freeze({
    getContract: (httpRequest: IGetContractRequest): Promise<IGetContractResponse> => {
        const { id } = httpRequest.path;

        return contractsService.getContract(id);
    },
});
