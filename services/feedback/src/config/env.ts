import Joi from "joi";

export const SCHEMA_ENV = Joi.object({
  PORT: Joi.number().default(80),
});
