import express from "express";

import contractsRoutes from "./routes.contracts.js";

const router = express.Router();

// router.use("/admin", audiencesRoutes);
// router.use("/balances", contactsRoutes);
router.use("/contracts", contractsRoutes);
// router.use("/health-checks", healthChecksRoutes);
// router.use("/jobs", contactsRoutes);

export default router;
