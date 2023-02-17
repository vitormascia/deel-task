import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
import { ContractStatus } from "../../ts/index.js";
function buildGetContracts({ contractRepository, }) {
    return async function getContracts(profileId) {
        const contracts = await contractRepository.findAll({
            where: {
                status: { [Op.ne]: ContractStatus.TERMINATED },
                [Op.or]: [
                    { ContractorId: profileId },
                    { ClientId: profileId },
                ],
            },
        });
        return {
            statusCode: StatusCodes.OK,
            data: { contracts },
        };
    };
}
export default buildGetContracts;
//# sourceMappingURL=use-cases.contracts.getContracts.js.map