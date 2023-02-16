import express from "express";

import { jobsController } from "../controllers/index.js";
import { buildCallback, getProfile } from "../middlewares/index.js";

const jobsRoutes = express
    .Router()
    .get("/unpaid", getProfile(), buildCallback(jobsController.getUnpaidJobs));

export default jobsRoutes;
