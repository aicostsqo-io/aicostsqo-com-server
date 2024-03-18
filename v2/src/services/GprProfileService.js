const GprProfile = require('../models/GprProfile');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insert = async (gprProfileData) => {
    const gprProfile = await GprProfile.create(gprProfileData);
    if (gprProfile) {
        return Result(true, Messages.itemCreated, gprProfile);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const insertProfiles = async (gprProfileData) => {
    const gprProfiles = await GprProfile.insertMany(gprProfileData);
    if (gprProfiles) {
        return Result(true, Messages.itemCreated, gprProfiles);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const gprProfiles = await GprProfile.find({ siteId }).sort({
        rectangleLineNumber: 1,
    });
    if (gprProfiles) {
        return Result(true, Messages.itemsListed, gprProfiles);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

const bulkDelete = async (gprProfiles) => {
    const deletedItem = await GprProfile.deleteMany({ _id: { $in: gprProfiles } });
    if (deletedItem) {
        return Result(true, Messages.itemDeleted, deletedItem);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertProfiles,
    getBySiteId,
    insert,
    bulkDelete,
};