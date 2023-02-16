import { Contract } from "../../entities/index.js";
import buildGetContract from "./use-cases.contracts.getContract.js";

const getContract = buildGetContract({
    contractRepository: Contract,
});

const contractsService = Object.freeze({
    getContract,
});

export default contractsService;
export { getContract };
