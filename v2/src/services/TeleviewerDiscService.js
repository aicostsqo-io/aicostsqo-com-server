const TeleviewerDisc = require('../models/TeleviewerDisc');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertTeleviewerDiscs = async (televiewerDiscData) => {
    const televiewerDiscs = await TeleviewerDisc.insertMany(televiewerDiscData);
    if (televiewerDiscs) {
        return Result(true, Messages.itemCreated, televiewerDiscs);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const televiewerDiscs = await TeleviewerDisc.find({ siteId });
    if (televiewerDiscs) {
        return Result(true, Messages.itemsListed, televiewerDiscs);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertTeleviewerDiscs,
    getBySiteId,
};