import { db } from "../../app/databases/index.js";
import { Contract, Job, Profile } from "../../entities/index.js";
import buildDepositMoney from "./use-cases.balances.depositMoney.js";

const depositMoney = buildDepositMoney({
    profileRepository: Profile,
    jobRepository: Job,
    contractRepository: Contract,
    db,
});

const balancesService = Object.freeze({
    depositMoney,
});

export default balancesService;
export { depositMoney };
