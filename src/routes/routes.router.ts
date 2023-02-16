import express from "express";

import balancesRoutes from "./routes.balances.js";
import contractsRoutes from "./routes.contracts.js";
import jobsRoutes from "./routes.jobs.js";

const router = express.Router();

// router.use("/admin", audiencesRoutes);
router.use("/balances", balancesRoutes);
router.use("/contracts", contractsRoutes);
router.use("/jobs", jobsRoutes);

export default router;
