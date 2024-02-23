export const errorHandler = (statusCode, message) => {
    const error = new Error(); //Error() is JS module to generate custom error.
    error.statusCode = statusCode;
    error.message = message;
    return error;
}