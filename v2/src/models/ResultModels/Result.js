const Result = (success, message, data = null) => {
    return {
        success: success,
        message: message,
        data: data
    };
};

module.exports = Result;
