import { IBuildGetBestClients, IGetBestClientsResponse } from "../../ts/index.js";
declare function buildGetBestClients({ profileRepository, jobRepository, contractRepository, }: IBuildGetBestClients): (start: string, end: string, limit: string) => Promise<IGetBestClientsResponse>;
export default buildGetBestClients;
