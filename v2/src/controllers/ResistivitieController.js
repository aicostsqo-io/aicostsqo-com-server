const {
    getBySiteId: getResistivitys,
} = require('../services/ResistivityService');
const {
    getBySiteId: getContours,
} = require('../services/ResistivityContourService');

const getBySiteId = async (req, res) => {
    const { siteId } = req.params;
    const resistivities = await getResistivitys(siteId);
    const resistivityContours = await getContours(siteId);
    const result = {
        resistivities,
        resistivityContours,
    };
    res.send(result);
};

module.exports = {
    getBySiteId,
};