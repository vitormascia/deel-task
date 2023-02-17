declare const depositMoney: (profileId: string, userId: string, deposit: number) => Promise<import("../../ts/interfaces.js").IDepositMoneyResponse>;
declare const balancesService: Readonly<{
    depositMoney: (profileId: string, userId: string, deposit: number) => Promise<import("../../ts/interfaces.js").IDepositMoneyResponse>;
}>;
export default balancesService;
export { depositMoney };
