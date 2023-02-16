import express from "express";

import { contractsController } from "../controllers/index.js";
import { getContractSchema, pathParams } from "../helpers/index.js";
import { bouncer, buildCallback, getProfile } from "../middlewares/index.js";

const { id } = pathParams;

const contractsRoutes = express
    .Router()
    .get(`/${id}`, bouncer(getContractSchema), getProfile(), buildCallback(contractsController.getContract));

export default contractsRoutes;
