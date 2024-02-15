const FieldModel = require("../../models/FieldModels/FieldModel");

const create = (fieldData) => {
  return new FieldModel(fieldData).save();
};

module.exports = {
  create,
};
