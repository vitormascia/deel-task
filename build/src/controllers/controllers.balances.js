import { balancesService } from "../use-cases/index.js";
export default Object.freeze({
    depositMoney: (httpRequest) => {
        const profileId = httpRequest.headers.profile_id;
        const { userId } = httpRequest.path;
        const { deposit } = httpRequest.body;
        return balancesService.depositMoney(profileId, userId, deposit);
    },
});
//# sourceMappingURL=controllers.balances.js.map