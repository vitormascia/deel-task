import express from "express";

import adminsRoutes from "./routes.admins.js";
import balancesRoutes from "./routes.balances.js";
import contractsRoutes from "./routes.contracts.js";
import jobsRoutes from "./routes.jobs.js";

const router = express.Router();

router.use("/admin", adminsRoutes);
router.use("/balances", balancesRoutes);
router.use("/contracts", contractsRoutes);
router.use("/jobs", jobsRoutes);

export default router;
