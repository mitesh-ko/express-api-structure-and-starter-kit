import Joi from 'joi';

export const createUserValidation = Joi.object({
    email: Joi.string()
        .email()
        .min(6)
        .max(190)
        .required()
        .messages({
            'string.email': 'Invalid email format',
            'string.min': 'Email must be at least 6 characters',
            'string.max': 'Email should not exceed 190 characters',
            'any.required': 'Email is required',
        }),
    name: Joi.string()
        .min(6)
        .max(190)
        .required()
        .messages({
            'string.min': 'Name must be at least 6 characters',
            'string.max': 'Name should not exceed 190 characters',
            'any.required': 'Name is required',
        }),
    status: Joi.string()
        .valid('active', 'inactive')
        .required()
        .messages({
            'any.only': 'Status must be either active or inactive',
            'any.required': 'Status is required',
        }),
});
