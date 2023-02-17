import Joi from "joi";
import generateBaseSchema from "../helpers.joi.generateBaseSchema.js";
const joiBaseSchema = generateBaseSchema();
joiBaseSchema.query = Joi.object({
    start: Joi.date().iso().required(),
    end: Joi.date().iso().min(Joi.ref("start")).required(),
});
const getBestProfessionSchema = Joi.object(joiBaseSchema);
export default getBestProfessionSchema;
//# sourceMappingURL=helpers.joi.schemas.getBestProfession.js.map