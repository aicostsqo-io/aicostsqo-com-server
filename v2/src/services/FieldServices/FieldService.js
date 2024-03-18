const FieldModel = require("../../models/FieldModels/FieldModel");
const Result = require('../../models/ResultModels/Result');
const Messages = require('../../models/ResultModels/Messages');

const create = (fieldData) => {
  const createdData = new FieldModel(fieldData).save();
  if(createdData){
    return Result(true,Messages.itemCreated,createdData);
  }else{
    return Result(false,Messages.itemNotCreated,null);
  }
};

module.exports = {
  create,
};
