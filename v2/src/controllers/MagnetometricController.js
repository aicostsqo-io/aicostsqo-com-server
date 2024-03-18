const {
    getBySiteId: getMagnetometrics,
} = require('../services/MagnetometricService');
const {
    getBySiteId: getDiscs,
} = require('../services/MagnetometricDiscService');

const getBySiteId = async (req, res) => {
    const { siteId } = req.params;
    const magnetometrics = await getMagnetometrics(siteId);
    const magnetometricDiscs = await getDiscs(siteId);
    const result = {
        magnetometrics,
        magnetometricDiscs,
    };
    res.send(result);
};

module.exports = {
    getBySiteId,
};