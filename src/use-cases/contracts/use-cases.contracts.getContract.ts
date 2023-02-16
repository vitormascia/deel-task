import Boom from "@hapi/boom";
import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";

import { IBuildGetContract, IGetContractResponse } from "../../ts/index.js";

function buildGetContract({
    contractRepository,
}: IBuildGetContract) {
    return async function getContract(profileId: string, contractId: string): Promise<IGetContractResponse> {
        const contract = await contractRepository.findOne({
            where: {
                id: contractId,
                [Op.or]: [
                    { ContractorId: profileId },
                    { ClientId: profileId },
                ],
            },
        });

        if (!contract) throw Boom.notFound("PROFILE_OUT_OFF_CONTRACT");

        return {
            statusCode: StatusCodes.OK,
            data: { contract },
        };
    };
}

export default buildGetContract;
