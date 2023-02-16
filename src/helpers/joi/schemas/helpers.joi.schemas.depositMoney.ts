import Joi from "joi";

import generateBaseSchema from "../helpers.joi.generateBaseSchema.js";

const DIGITS_REG_EXP = /^\d+$/;

const joiBaseSchema = generateBaseSchema();

joiBaseSchema.body = Joi.object({
    deposit: Joi.number().positive().precision(12).required(),
});

joiBaseSchema.path = Joi.object({
    userId: Joi.string().trim().pattern(DIGITS_REG_EXP, "Digits pattern").required(),
});

const depositMoneySchema = Joi.object(joiBaseSchema);

export default depositMoneySchema;
