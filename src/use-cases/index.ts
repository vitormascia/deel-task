import balancesService, { depositMoney } from "./balances/index.js";
import contractsService, { getContract, getContracts } from "./contracts/index.js";
import jobsService, { getUnpaidJobs, payJob } from "./jobs/index.js";

export {
    balancesService,
    contractsService,
    depositMoney,
    getContract,
    getContracts,
    getUnpaidJobs,
    jobsService,
    payJob,
};
