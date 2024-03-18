const Rp = require('../../models/FieldModels/RPModel');
const { createOutputVolumes } = require('../DistributionCurvesService');
const { getByRp } = require('../OutputVolumeService');
const Result = require('../../models/ResultModels/Result');
const Messages = require('../../models/ResultModels/Messages');

const list = async () => {
  const rps = await Rp.find({});
  if (rps) {
    return Result(true, Messages.itemsListed, rps);
  }
  else {
    return Result(false, Messages.itemNotFound, null);
  }
};
const bulkDeleteRps = async (rps) => {
  const result = await Rp.deleteMany({ _id: { $in: rps } });
  if (result) {
    return Result(true, Messages.itemDeleted, result);
  }
  else {
    return Result(false, Messages.itemNotFound, null);
  }
};

const bulkInsertRps = async (rps) => {
  const data = await Rp.insertMany(rps);
  if (data) {
    return Result(true, Messages.itemCreated, data);
  }
  else {
    return Result(false, Messages.itemNotCreated, null);
  }
};

const insert = async (rpData) => {
  const rp = await Rp.create(rpData);
  if (rp) {
    return Result(true, Messages.itemCreated, rp);
  }
  else {
    return Result(false, Messages.itemNotCreated, null);
  }
};

const getRpsBySiteBoundId = async (siteBoundId) => {
  const rps = await Rp.find({ siteBound: siteBoundId }).sort({ name: 1 });
  if (rps) {
    return Result(true, Messages.itemsListed, rps);
  }
  else {
    return Result(false, Messages.itemNotFound, null);
  }
};

const getLastRpBySiteBoundId = async (siteBoundId) => {
  const rp = await Rp.findOne({
    siteBound: siteBoundId,
  })
    .sort({ name: -1 })
    .limit(1);
  if (rp) {
    return Result(true, Messages.itemsListed, rp);
  }
  else {
    return Result(false, Messages.itemNotFound, null);
  }
};

const getOutputVolumesByRp = async (rpId) => {
  const outputVolumes = await getByRp(rpId);
  if (outputVolumes.length < 1) {
    return await createOutputVolumes(rpId);
  }
  if (outputVolumes) {
    return Result(true, Messages.itemsListed, outputVolumes);
  }
  else {
    return Result(false, Messages.itemNotFound, null);
  }
};

module.exports = {
  bulkDeleteRps,
  listRps: list,
  insertRp: insert,
  getRpsBySiteBoundId,
  bulkInsertRps,
  getLastRpBySiteBoundId,
  getOutputVolumesByRp,
};