import Boom from "@hapi/boom";
import { StatusCodes } from "http-status-codes";

import { IBuildGetContract, IGetContractResponse } from "../../ts/index.js";

function buildGetContract({
    contractRepository,
}: IBuildGetContract) {
    return async function getContract(id: string): Promise<IGetContractResponse> {
        const contract = await contractRepository.findByPk(id);

        if (!contract) throw Boom.notFound("MISSING_CONTRACT");

        return {
            statusCode: StatusCodes.OK,
            data: { contract },
        };
    };
}

export default buildGetContract;
