import {HTTP_UNPROCESSABLE_ENTITY} from '#src/utils/status-code.util';

export const validator = async (res, validationSchema, data) => {
    const {error, value} = validationSchema.validate(data, {abortEarly: true, stripUnknown: true,});

    if (error) {
        const messages = error.details.map((detail) => {
            return {[detail.context.key]: detail.message};
        });
        res.status(HTTP_UNPROCESSABLE_ENTITY).json({
            success: false,
            message: 'Validation failed!',
            error: messages,
        });

        throw new Error('Validation failed!');
    }
    return value;
};