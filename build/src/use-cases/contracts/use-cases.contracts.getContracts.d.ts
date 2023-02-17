import { IBuildGetContracts, IGetContractsResponse } from "../../ts/index.js";
declare function buildGetContracts({ contractRepository, }: IBuildGetContracts): (profileId: string) => Promise<IGetContractsResponse>;
export default buildGetContracts;
