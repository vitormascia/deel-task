import express from "express";

import contractsRoutes from "./routes.contracts.js";
import jobsRoutes from "./routes.jobs.js";

const router = express.Router();

// router.use("/admin", audiencesRoutes);
// router.use("/balances", contactsRoutes);
router.use("/contracts", contractsRoutes);
router.use("/jobs", jobsRoutes);
// router.use("/health-checks", healthChecksRoutes);

export default router;
