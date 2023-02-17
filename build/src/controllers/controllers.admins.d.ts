import { IGetBestClientsRequest, IGetBestClientsResponse, IGetBestProfessionRequest, IGetBestProfessionResponse } from "../ts/index.js";
declare const _default: Readonly<{
    getBestProfession: (httpRequest: IGetBestProfessionRequest) => Promise<IGetBestProfessionResponse>;
    getBestClients: (httpRequest: IGetBestClientsRequest) => Promise<IGetBestClientsResponse>;
}>;
export default _default;
