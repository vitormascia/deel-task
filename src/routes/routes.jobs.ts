import express from "express";

import { jobsController } from "../controllers/index.js";
import { pathParams, payJobSchema } from "../helpers/index.js";
import { bouncer, buildCallback, getProfile } from "../middlewares/index.js";

const { jobId } = pathParams;

const jobsRoutes = express
    .Router()
    .get("/unpaid", getProfile(), buildCallback(jobsController.getUnpaidJobs))
    .post(`/${jobId}/pay`, getProfile(), bouncer(payJobSchema), buildCallback(jobsController.payJob));

export default jobsRoutes;
