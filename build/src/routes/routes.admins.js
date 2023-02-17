import express from "express";
import { adminsController } from "../controllers/index.js";
import { getBestClientsSchema, getBestProfessionSchema } from "../helpers/index.js";
import { bouncer, buildCallback } from "../middlewares/index.js";
const adminsRoutes = express
    .Router()
    .get("/best-profession", bouncer(getBestProfessionSchema), buildCallback(adminsController.getBestProfession))
    .get("/best-clients", bouncer(getBestClientsSchema), buildCallback(adminsController.getBestClients));
export default adminsRoutes;
//# sourceMappingURL=routes.admins.js.map