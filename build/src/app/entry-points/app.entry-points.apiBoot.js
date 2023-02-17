import "express-async-errors";
import "../databases/index.js";
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import helmet from "helmet";
import { errorHandler } from "../../middlewares/index.js";
import { router } from "../../routes/index.js";
import { config } from "../config/index.js";
import { logger } from "../log/index.js";
const { APP } = config;
const app = express();
app
    .use(bodyParser.json())
    .use(express.json({ limit: "50mb" }))
    .use(helmet())
    .use(cors())
    .use(router)
    .use(errorHandler)
    .listen(APP.PORT, function () {
    try {
        logger.debug("ENTRY_POINT_RUNNING", {
            data: {
                name: "API",
                port: APP.PORT,
            },
        });
    }
    catch (error) {
        logger.error("ENTRY_POINT_ERROR", {
            data: {
                name: "API",
                port: APP.PORT,
                error: {
                    status: error.status,
                    message: error.message,
                    stack: error.stack,
                },
            },
        });
        process.exit(1);
    }
});
//# sourceMappingURL=app.entry-points.apiBoot.js.map