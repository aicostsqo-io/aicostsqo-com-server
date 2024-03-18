const {
  listDiscs,
  getDiscsByRpId,
  insertDisc,
  bulkInsertDisc,
} = require('../services/FieldServices/RPDiscService')

const index = async (req, res) => {
  const discs = await listDiscs();
  res.send(discs);
};

const listByRpId = async (req, res) => {
  const discs = await getDiscsByRpId(req.params.id);
  res.send(discs);
};

const create = async (req, res) => {
  const disc = await insertDisc(req.body);
  res.send(disc);
};

const manual = async (req, res) => {
  const disc = await bulkInsertDisc(req.body);
  res.send(disc);
};

module.exports = {
  index,
  listByRpId,
  create,
  manual,
};