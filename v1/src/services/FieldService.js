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
  return Field.find({ projectId: projectId })
    .populate({
      path: "fieldModel",
      select: "properties.fieldName",
    })
    .populate({
      path: "rpModel",
      select: "name",
    });
};

const getById = (id) => {
  return Field.findById(id)
    .populate("fieldModel")
    .populate({
      path: "rpModel",
      populate: { path: "discontinuitiesModelId" },
    });
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
