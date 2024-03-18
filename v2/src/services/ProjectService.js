const Project = require("../models/Project");

const create = (projectData) => {
  const project = new Project(projectData);
  return project.save();
};

const getAllByUserId = (userId) => {
  return Project.find({ userId: userId });
};

const getById = (projectId) => {
  return Project.findById(projectId);
};

const removeById = (projectId) => {
  return Project.findByIdAndRemove(projectId);
};

module.exports = {
  create,
  getAllByUserId,
  getById,
  removeById,
};
