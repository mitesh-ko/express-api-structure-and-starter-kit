import Joi from 'joi';

export const registrationValidation = Joi.object({
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
    password: Joi.string()
        .min(6)
        .max(190)
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters',
            'string.max': 'Password should not exceed 190 characters',
            'any.required': 'Password is required',
        }),
    confirmPassword: Joi.string()
        .valid(Joi.ref('password'))
        .required()
        .messages({
            'any.only': 'Passwords must match',
            'any.required': 'Confirm password is required',
        }),
});

export const loginValidation = Joi.object({
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
    password: Joi.string()
        .min(6)
        .max(190)
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters',
            'string.max': 'Password should not exceed 190 characters',
            'any.required': 'Password is required',
        }),
});
