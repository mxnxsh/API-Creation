export const successResponseHandler = (statusCode, message, data) => {
    return {
        status: "Success",
        statusCode: statusCode,
        message: message,
        data: data
    }
}
export const errorResponseHandler = (statusCode, message) => {
    return {
        status: "Error",
        statusCode: statusCode,
        message: message,
    }
}
