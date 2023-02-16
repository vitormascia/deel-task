import Boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

import { Profile } from "../entities/index.js";
import { TGetProfile } from "../ts/index.js";

interface IRequest extends Request {
    profile?: Profile;
}

function getProfile(): TGetProfile {
    return async function (req: IRequest, _res: Response, next: NextFunction): Promise<void> {
        try {
            const profile = await Profile.findOne({ where: { id: req.get("profile_id") || 0 } });

            if (!profile) throw Boom.unauthorized("Invalid Profile ID");

            req.profile = profile;

            next();
        } catch (error: any) {
            next(error);
        }
    };
}

export default getProfile;
