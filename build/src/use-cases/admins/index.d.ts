declare const getBestProfession: (start: string, end: string) => Promise<import("../../ts/interfaces.js").IGetBestProfessionResponse>;
declare const getBestClients: (start: string, end: string, limit: string) => Promise<import("../../ts/interfaces.js").IGetBestClientsResponse>;
declare const adminsService: Readonly<{
    getBestProfession: (start: string, end: string) => Promise<import("../../ts/interfaces.js").IGetBestProfessionResponse>;
    getBestClients: (start: string, end: string, limit: string) => Promise<import("../../ts/interfaces.js").IGetBestClientsResponse>;
}>;
export default adminsService;
export { getBestClients, getBestProfession };
