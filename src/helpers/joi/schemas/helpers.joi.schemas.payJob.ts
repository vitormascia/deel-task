import Joi from "joi";

import generateBaseSchema from "../helpers.joi.generateBaseSchema.js";

const DIGITS_REG_EXP = /^\d+$/;

const joiBaseSchema = generateBaseSchema();

joiBaseSchema.path = Joi.object({
    job_id: Joi.string().trim().pattern(DIGITS_REG_EXP, "Digits pattern").required(),
});

const payJobSchema = Joi.object(joiBaseSchema);

export default payJobSchema;
