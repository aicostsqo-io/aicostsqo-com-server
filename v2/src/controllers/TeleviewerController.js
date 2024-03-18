const {
    getBySiteId: getTeleviewers,
  } = require('../services/TeleviewerService');
  const { getBySiteId: getDiscs } = require('../services/TeleviewerDiscService');
  
  const getBySiteId = async (req, res) => {
    const { siteId } = req.params;
    const televiewers = await getTeleviewers(siteId);
    const televiewerDiscs = await getDiscs(siteId);
    const result = {
      televiewers,
      televiewerDiscs,
    };
    res.send(result);
  };
  
  module.exports = {
    getBySiteId,
  };