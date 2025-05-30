/**
 * Utility helper to standardize API responses.
 */

// Success Response
function successResponse(res, message = 'Success', data = undefined, statusCode = 200) {
    return res.status(statusCode).json({
        status: 'fulfilled',
        message,
        data,
    });
}

// Error Response
function failedResponse(res, message = 'An error occurred', statusCode = 500, error = null) {
    return res.status(statusCode).json({
        status: 'failed',
        message,
        error: error || undefined, // Include error details only if provided
    });
}

// Validation Error Response
function validationErrorResponse(res, errors = [], message = 'Validation failed', statusCode = 400) {
    return res.status(statusCode).json({
        status: 'unprocessable',
        message,
        errors, // Array of validation error messages
    });
}

export {successResponse, failedResponse, validationErrorResponse};