const { getBySiteId: getSeismics } = require('../services/SeismicService');
const { getBySiteId: getDiscs } = require('../services/SeismicDiscService');
const {
  getBySiteId: getProfiles,
} = require('../services/SeismicProfileService');

const getBySiteId = async (req, res) => {
  const { siteId } = req.params;
  const seismics = await getSeismics(siteId);
  const seismicProfiles = await getProfiles(siteId);
  const seismicDiscs = await getDiscs(siteId);
  const result = {
    seismics,
    seismicProfiles,
    seismicDiscs,
  };
  res.send(result);
};

module.exports = {
  getBySiteId,
};