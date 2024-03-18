const RPDisc = require('../../models/FieldModels/RPDiscModel');
const Result = require('../../models/ResultModels/Result');
const Messages = require('../../models/ResultModels/Messages');

const insert = async (discData) => {
    const disc = await RPDisc.create(discData);
    if (disc) {
        return Result(true, Messages.itemCreated, disc);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const insertDiscs = async (discsData) => {
    const discs = await RPDisc.insertMany(discsData);
    if (discs) {
        return Result(true, Messages.itemCreated, disc);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const list = async () => {
    const discs = await RPDisc.find();
    if (discs) {
        return Result(true, Messages.itemsListed, discs);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

const getDiscsByRpId = async (rpId) => {
    const discs = await RPDisc.find({ rpId: rpId }).sort({ name: 1 });
    if (discs) {
        return Result(true, Messages.itemsListed, discs);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};


const bulkInsertDisc = async (discs) => {
    const insertedData = await RPDisc.insertMany(discs);
    if (insertedData) {
        return Result(true, Messages.itemCreated, insertedData);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

module.exports = {
    insertDisc: insert,
    insertDiscs: insertDiscs,
    listDiscs: list,
    getDiscsByRpId,
    bulkInsertDisc,
};