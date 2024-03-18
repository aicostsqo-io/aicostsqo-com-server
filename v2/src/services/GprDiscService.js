const GprDisc = require('../models/GprDisc');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertDiscs = async (gprDiscData) => {
    const gprDiscs = await GprDisc.insertMany(gprDiscData);
    if (gprDiscs) {
        return Result(true, Messages.itemCreated, gprDiscs);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const gprDiscs = await GprDisc.find({ siteId });
    if (gprDiscs) {
        return Result(true, Messages.itemsListed, gprDiscs);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertDiscs,
    getBySiteId,
};