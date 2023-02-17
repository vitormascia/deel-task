import Boom from "@hapi/boom";
import { Contract, Profile } from "../entities/index.js";
function getProfile() {
    return async function (req, _res, next) {
        try {
            const profileId = req.get("profile_id");
            const profile = await Profile.findByPk(profileId, {
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
            });
            if (!profile)
                throw Boom.unauthorized("MISSING_PROFILE");
            req.profile = profile;
            next();
        }
        catch (error) {
            next(error);
        }
    };
}
export default getProfile;
//# sourceMappingURL=middlewares.getProfile.js.map