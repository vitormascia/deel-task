import { StatusCodes } from "http-status-codes";
import { Op } from "sequelize";

import { ContractStatus, IBuildGetContracts, IGetContractsResponse } from "../../ts/index.js";

function buildGetContracts({
    contractRepository,
}: IBuildGetContracts) {
    return async function getContracts(profileId: string): Promise<IGetContractsResponse> {
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
