const ResistivityContour = require('../models/ResistivityContour');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertResistivityContours = async (resistivityContourData) => {
    const resistivityContours = await ResistivityContour.insertMany(
        resistivityContourData
    );
    if (resistivityContours) {
        return Result(true, Messages.itemCreated, resistivityContours);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const resistivityContours = await ResistivityContour.find({ siteId });
    if (resistivityContours) {
        return Result(true, Messages.itemsListed, resistivityContours);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertResistivityContours,
    getBySiteId,
};