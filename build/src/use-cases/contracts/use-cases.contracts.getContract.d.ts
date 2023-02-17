import { IBuildGetContract, IGetContractResponse } from "../../ts/index.js";
declare function buildGetContract({ contractRepository, }: IBuildGetContract): (profileId: string, contractId: string) => Promise<IGetContractResponse>;
export default buildGetContract;
