import Joi from "joi";
import generateBaseSchema from "../helpers.joi.generateBaseSchema.js";
const DIGITS_REG_EXP = /^\d+$/;
const joiBaseSchema = generateBaseSchema();
joiBaseSchema.query = Joi.object({
    start: Joi.date().iso().required(),
    end: Joi.date().iso().min(Joi.ref("start")).required(),
    limit: Joi.string().trim().pattern(DIGITS_REG_EXP, "Digits pattern").default(2),
});
const getBestClientsSchema = Joi.object(joiBaseSchema);
export default getBestClientsSchema;
//# sourceMappingURL=helpers.joi.schemas.getBestClients.js.map