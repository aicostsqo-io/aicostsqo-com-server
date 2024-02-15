const DiscontinuitiesModel = require("../../models/FieldModels/DiscontinuitiesModel");

const create = (discontinuitiesData) => {
  return new DiscontinuitiesModel(discontinuitiesData).save();
};

module.exports = {
  create,
};
