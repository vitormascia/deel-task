import Boom from "@hapi/boom";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";
function buildGetContract({ contractRepository, }) {
    return async function getContract(profileId, contractId) {
        const contract = await contractRepository.findOne({
            where: {
                id: contractId,
                [Op.or]: [
                    { ContractorId: profileId },
                    { ClientId: profileId },
                ],
            },
        });
        if (!contract)
            throw Boom.notFound("PROFILE_OUT_OFF_CONTRACT");
        return {
            statusCode: StatusCodes.OK,
            data: { contract },
        };
    };
}
export default buildGetContract;
//# sourceMappingURL=use-cases.contracts.getContract.js.map