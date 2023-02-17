import express from "express";
import { contractsController } from "../controllers/index.js";
import { getContractSchema, pathParams } from "../helpers/index.js";
import { bouncer, buildCallback, getProfile } from "../middlewares/index.js";
const { id } = pathParams;
const contractsRoutes = express
    .Router()
    .get("", getProfile(), buildCallback(contractsController.getContracts))
    .get(`/${id}`, getProfile(), bouncer(getContractSchema), buildCallback(contractsController.getContract));
export default contractsRoutes;
//# sourceMappingURL=routes.contracts.js.map