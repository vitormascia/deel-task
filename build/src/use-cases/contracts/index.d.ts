declare const getContracts: (profileId: string) => Promise<import("../../ts/interfaces.js").IGetContractsResponse>;
declare const getContract: (profileId: string, contractId: string) => Promise<import("../../ts/interfaces.js").IGetContractResponse>;
declare const contractsService: Readonly<{
    getContracts: (profileId: string) => Promise<import("../../ts/interfaces.js").IGetContractsResponse>;
    getContract: (profileId: string, contractId: string) => Promise<import("../../ts/interfaces.js").IGetContractResponse>;
}>;
export default contractsService;
export { getContract, getContracts };
