const ProjectService = require("../services/ProjectService");

const create = (req, res) => {
  res.handleResponse(
    ProjectService.create({ ...req.body, userId: req.user.userId })
  );
};

const getAllByUserId = (req, res) => {
  res.handleResponse(ProjectService.getAllByUserId(req.user.userId));
};

const getById = (req, res) => {
  const projectId = req.params.projectId;
  res.handleResponse(ProjectService.getById(projectId));
};

const removeById = (req, res) => {
  const { projectId } = req.body;
  res.handleResponse(ProjectService.removeById(projectId));
};

module.exports = {
  create,
  getAllByUserId,
  getById,
  removeById,
};
