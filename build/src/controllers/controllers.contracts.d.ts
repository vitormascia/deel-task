import { IGetContractRequest, IGetContractResponse, IGetContractsRequest, IGetContractsResponse } from "../ts/index.js";
declare const _default: Readonly<{
    getContracts: (httpRequest: IGetContractsRequest) => Promise<IGetContractsResponse>;
    getContract: (httpRequest: IGetContractRequest) => Promise<IGetContractResponse>;
}>;
export default _default;
