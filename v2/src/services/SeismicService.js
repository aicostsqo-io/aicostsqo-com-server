const Seismic = require('../models/Seismic');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertSeismic = async (seismicData) => {
    const seismic = await Seismic.create(seismicData);
    if (seismic) {
        return Result(true, Messages.itemCreated, seismic);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const seismics = await Seismic.find({ siteId });
    if (seismics) {
        return Result(true, Messages.itemsListed, seismics);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertSeismic,
    getBySiteId,
};