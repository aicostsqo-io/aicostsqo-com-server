const httpStatus = require("http-status");
const { insert, list, login } = require("../services/CompanyService");
const {
  passwordToHash,
  generateAccessToken,
  generateRefreshToken,
} = require("../scripts/utils/helper");

const create = (req, res) => {
  req.body.password = passwordToHash(req.body.password);

  insert(req.body)
    .then((userData) => {
      res.status(httpStatus.CREATED).send(userData);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

const loginCompany = (req, res) => {
  req.body.password = passwordToHash(req.body.password);
  login(req.body)
    .then((result) => {
      if (!result) return res.handleBadRequest("User Not Found");
      user = {
        id: result._id,
        companyName: result.company_name,
        tokens: {
          acces_token: generateAccessToken(result.id),
          // refresh_token: generateRefreshToken(result.id),
        },
      };
      res.handleSuccess(user);
    })
    .catch((e) => {
      res.handleServerError(e);
    });
};

const get = (req, res) => {
  list()
    .then((data) => {
      res.status(httpStatus.OK).send(data);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

module.exports = {
  create,
  get,
  loginCompany,
};
