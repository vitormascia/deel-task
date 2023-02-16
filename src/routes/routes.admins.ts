import express from "express";

import { adminsController } from "../controllers/index.js";
import { getBestProfessionSchema } from "../helpers/index.js";
import { bouncer, buildCallback, getProfile } from "../middlewares/index.js";

const adminsRoutes = express
    .Router()
    .get("/best-profession", getProfile(), bouncer(getBestProfessionSchema), buildCallback(adminsController.getBestProfession));

export default adminsRoutes;
