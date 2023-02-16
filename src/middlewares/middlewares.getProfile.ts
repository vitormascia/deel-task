import Boom from "@hapi/boom";
import { NextFunction, Request, Response } from "express";

import { Contract, Profile } from "../entities/index.js";
import { TGetProfile } from "../ts/index.js";

interface IRequest extends Request {
    profile?: Profile;
}

function getProfile(): TGetProfile {
    return async function (req: IRequest, _res: Response, next: NextFunction): Promise<void> {
        try {
            const profileId = req.get("profile_id");

            const profile = await Profile.findByPk(
                profileId,
                {
                    include: [
                        {
                            model: Contract,
                            as: "Contractor",
                        },
                        {
                            model: Contract,
                            as: "Client",
                        },
                    ],
                },
            );

            if (!profile) throw Boom.unauthorized("MISSING_PROFILE");

            req.profile = profile;

            next();
        } catch (error: any) {
            next(error);
        }
    };
}

export default getProfile;
