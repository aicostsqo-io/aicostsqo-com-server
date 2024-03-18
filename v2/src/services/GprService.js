const Gpr = require('../models/Gpr');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insert = async (gprData) => {
    const gpr = await Gpr.create(gprData);
    if (gpr) {
        return Result(true, Messages.itemCreated, gpr);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const gprs = await Gpr.find({ siteId });
    if (gprs) {
        return Result(true, Messages.itemsListed, gprs);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

const deleteById = async (gprs) => {
    const deletedItem = await Gpr.deleteMany({ _id: { $in: gprs } });
    if (deletedItem) {
        return Result(true, Messages.itemDeleted, deletedItem);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insert,
    getBySiteId,
    deleteById
};