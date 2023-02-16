import { StatusCodes } from "http-status-codes";

import { IGetContractResponse } from "../../ts/index.js";

function buildGetContract() {
    // eslint-disable-next-line @typescript-eslint/require-await
    return async function getContract(_id: string): Promise<IGetContractResponse> {
        // const { Contract } = req.app.get("models");
        // const { id } = req.params;
        // const contract = await Contract.findOne({ where: { id } });
        // if (!contract) return res.status(404).end();
        // res.json(contract);
        return {
            statusCode: StatusCodes.OK,
            data: { ok: true },
        };
    };
}

export default buildGetContract;
