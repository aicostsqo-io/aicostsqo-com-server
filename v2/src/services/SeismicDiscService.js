const SeismicDisc = require('../models/SeismicDisc');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertSeismicDiscs = async (seismicDiscData) => {
    const seismicDiscs = await SeismicDisc.insertMany(seismicDiscData);
    if (seismicDiscs) {
        return Result(true, Messages.itemCreated, seismicDiscs);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const seismicDiscs = await SeismicDisc.find({ siteId });
    if (seismicDiscs) {
        return Result(true, Messages.itemsListed, seismicDiscs);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertSeismicDiscs,
    getBySiteId,
};