const Televiewer = require('../models/Televiewer');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertTeleviewer = async (televiewerData) => {
    const televiewer = await Televiewer.create(televiewerData);
    if (televiewer) {
        return Result(true, Messages.itemCreated, televiewer);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const televiewers = await Televiewer.find({ siteId });
    if (televiewers) {
        return Result(true, Messages.itemsListed, televiewers);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    };
};

module.exports = {
    insertTeleviewer,
    getBySiteId,
};