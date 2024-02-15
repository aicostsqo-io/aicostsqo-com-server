const FieldService = require("../services/FieldService");

const create = (req, res) => {
  console.log("Body", req.body);
  res.handleResponse(FieldService.create(req.body));
};

const getAllByProjectId = (req, res) => {
  console.log(req.body);
  res.handleResponse(FieldService.getAllByProjectId(req.body.projectId));
};

const getById = (req, res) => {
  res.handleResponse(FieldService.getById(req.body.id));
};

const removeById = (req, res) => {
  const { projectId } = req.body;
  res.handleResponse(FieldService.removeById(projectId));
};

module.exports = {
  create,
  getAllByProjectId,
  getById,
  removeById,
};
