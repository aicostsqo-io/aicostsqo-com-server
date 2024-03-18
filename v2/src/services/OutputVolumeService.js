const OutputVolumes = require('../models/OutputVolume');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insert = async (data) => {
  const res =  await OutputVolumes.insertMany(data);
  if (res) {
    return Result(true, Messages.itemCreated, res);
}
else {
    return Result(false, Messages.itemNotCreated, null);
}
};

const getByRp = async (rpId) => {
  const res = await OutputVolumes.find({
    rpId,
    volumeTheoric: { $gte: 1 },
    volumeQuarry: { $gte: 1 },
    totalVolumeOfMaxQs: { $gte: 1 },
  }).sort({
    polyhedronId: 1,
  });
  if (res) {
    return Result(true, Messages.itemsListed, res);
}
else {
    return Result(false, Messages.itemNotFound, null);
}
};

module.exports = {
  getByRp,
  insert,
};