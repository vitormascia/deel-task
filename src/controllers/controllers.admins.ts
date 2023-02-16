import { IGetBestProfessionRequest, IGetBestProfessionResponse } from "../ts/index.js";
import { adminsService } from "../use-cases/index.js";

export default Object.freeze({
    getBestProfession: (httpRequest: IGetBestProfessionRequest): Promise<IGetBestProfessionResponse> => {
        const { start, end } = httpRequest.query as { start: string, end: string };

        return adminsService.getBestProfession(start, end);
    },
});
