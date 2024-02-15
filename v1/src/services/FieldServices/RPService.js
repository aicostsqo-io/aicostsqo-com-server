const RPModel = require("../../models/FieldModels/RPModel");
const DiscontinuitiesService = require("./DiscontinuitiesService");

const create = async (rpData) => {
  const { discontinuitiesModel, ...otherData } = rpData;
  const discontinuitiesModelId = await DiscontinuitiesService.create(
    discontinuitiesModel
  );
  rpData;
  return new RPModel({
    ...otherData,
    discontinuitiesModelId: discontinuitiesModelId,
  }).save();
};

module.exports = {
  create,
};
