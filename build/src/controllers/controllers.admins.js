import { adminsService } from "../use-cases/index.js";
export default Object.freeze({
    getBestProfession: (httpRequest) => {
        const { start, end } = httpRequest.query;
        return adminsService.getBestProfession(start, end);
    },
    getBestClients: (httpRequest) => {
        const { start, end, limit } = httpRequest.query;
        return adminsService.getBestClients(start, end, limit);
    },
});
//# sourceMappingURL=controllers.admins.js.map