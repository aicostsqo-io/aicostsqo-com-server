const DiscontinuitiesModel = require("../../models/FieldModels/DiscontinuitiesModel");
const Result = require('../../models/ResultModels/Result');
const Messages = require('../../models/ResultModels/Messages');

const create = (discontinuitiesData) => {
  const createdData =  new DiscontinuitiesModel(discontinuitiesData).save();
  if(createdData){
    return Result(true,Messages.itemCreated,createdData);
  }else{
    return Result(false,Messages.itemNotCreated,null);
  }
};

module.exports = {
  create,
};
