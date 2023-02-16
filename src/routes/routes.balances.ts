import express from "express";

import { balancesController } from "../controllers/index.js";
import { depositMoneySchema, pathParams } from "../helpers/index.js";
import { bouncer, buildCallback, getProfile } from "../middlewares/index.js";

const { userId } = pathParams;

const balancesRoutes = express
    .Router()
    .post(`/deposit/${userId}`, getProfile(), bouncer(depositMoneySchema), buildCallback(balancesController.depositMoney));

export default balancesRoutes;
