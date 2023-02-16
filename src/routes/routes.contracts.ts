import express from "express";

import { contractsController } from "../controllers/index.js";
import { pathParams } from "../helpers/index.js";
// import { buildCallback, getProfile } from "../middlewares/index.js";
import { buildCallback } from "../middlewares/index.js";

const { id } = pathParams;

const contractsRoutes = express
    .Router()
    // .get(`/${id}`, getProfile(), buildCallback(contractsController.getContract));
    .get(`/${id}`, buildCallback(contractsController.getContract));

export default contractsRoutes;
