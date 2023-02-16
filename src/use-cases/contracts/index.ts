import buildGetContract from "./use-cases.contracts.getContract.js";

const getContract = buildGetContract();

const contractsService = Object.freeze({
    getContract,
});

export default contractsService;
export { getContract };
