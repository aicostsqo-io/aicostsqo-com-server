const httpStatus = require("http-status");

const handleResponseMiddleware = (req, res, next) => {
  res.handleSuccess = (data) => {
    res.status(httpStatus.OK).json({ status: true, data });
  };

  res.handleCreated = (data) => {
    res.status(httpStatus.CREATED).json({ status: true, data });
  };

  res.handleBadRequest = (message) => {
    res.status(httpStatus.BAD_REQUEST).json({ status: false, error: message });
  };

  res.handleServerError = (error) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ status: false, error });
  };

  res.handleResponse = (promise) => {
    promise
      .then((result) => {
        res.handleSuccess(result);
      })
      .catch((error) => {
        res.handleServerError(error);
      });
  };

  next();
};

module.exports = handleResponseMiddleware;
