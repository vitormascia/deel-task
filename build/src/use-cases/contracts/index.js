import { Contract } from "../../entities/index.js";
import buildGetContract from "./use-cases.contracts.getContract.js";
import buildGetContracts from "./use-cases.contracts.getContracts.js";
const getContracts = buildGetContracts({
    contractRepository: Contract,
});
const getContract = buildGetContract({
    contractRepository: Contract,
});
const contractsService = Object.freeze({
    getContracts,
    getContract,
});
export default contractsService;
export { getContract, getContracts };
//# sourceMappingURL=index.js.map