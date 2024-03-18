const Resistivity = require('../models/Resistivity');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertResistivity = async (resistivityData) => {
    const resistivity = await Resistivity.create(resistivityData);
    if (resistivity) {
        return Result(true, Messages.itemCreated, resistivity);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const resistivitys = await Resistivity.find({ siteId });
    if (resistivitys) {
        return Result(true, Messages.itemsListed, resistivitys);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertResistivity,
    getBySiteId,
};