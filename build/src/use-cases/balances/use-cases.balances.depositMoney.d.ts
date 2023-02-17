import { IBuildDepositMoney, IDepositMoneyResponse } from "../../ts/index.js";
declare function buildDepositMoney({ profileRepository, jobRepository, contractRepository, db, }: IBuildDepositMoney): (profileId: string, userId: string, deposit: number) => Promise<IDepositMoneyResponse>;
export default buildDepositMoney;
