import Boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

import { logger } from "../app/index.js";

function errorHandler(error: Error | Boom.Boom, _req: Request, res: Response, next: NextFunction): Response {
    if (res.headersSent) {
        logger.error("DELEGATING_ERROR_TO_EXPRESS_DEFAULT_ERROR_HANDLER", {
            data: { error },
        });

        next(error);
    }

    if (Boom.isBoom(error)) {
        logger.error("HANDLING_ERROR", {
            data: {
                error,
            },
        });

        return res.status(error.output.statusCode).json(error);
    }

    const boomError = Boom.badImplementation("UNEXPECTED_ERROR", {
        error: {
            message: error.message,
            stack: error.stack,
        },
    });

    logger.error("HANDLING_UNEXPECTED_ERROR", {
        data: {
            error: boomError,
        },
    });

    return res.status(boomError.output.statusCode).json(boomError);
}

export default errorHandler;
