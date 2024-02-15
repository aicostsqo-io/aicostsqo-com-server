const Field = require("../models/Field");

const FieldService = require("./FieldServices/FieldService");
const RPService = require("./FieldServices/RPService");

const create = async (fieldData) => {
  rpIds = [];
  for (const element of fieldData.rpModel) {
    const id = await RPService.create(element);
    rpIds.push(id);
  }
  const fieldId = await FieldService.create(fieldData.fieldModel);
  return new Field({
    projectId: fieldData.projectId,
    fieldModel: fieldId,
    rpModel: rpIds,
  }).save();
};

const getAllByProjectId = (projectId) => {
  return Field.find({ projectId: projectId }).populate("fieldModel");
  // .populate("rpModel");
};

const getById = (id) => {
  return Field.findById(id).populate("fieldModel").populate("rpModel");
};

const removeById = (projectId) => {
  return Field.findByIdAndRemove(projectId);
};

module.exports = {
  create,
  getAllByProjectId,
  getById,
  removeById,
};
