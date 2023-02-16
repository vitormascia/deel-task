import { IDepositMoneyRequest, IDepositMoneyResponse } from "../ts/index.js";
import { balancesService } from "../use-cases/index.js";

export default Object.freeze({
    depositMoney: (httpRequest: IDepositMoneyRequest): Promise<IDepositMoneyResponse> => {
        const profileId = httpRequest.headers.profile_id as string;
        const { userId } = httpRequest.path;
        const { deposit } = httpRequest.body;

        return balancesService.depositMoney(profileId, userId, deposit);
    },
});
