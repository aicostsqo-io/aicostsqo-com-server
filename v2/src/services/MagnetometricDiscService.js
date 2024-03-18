const MagnetometricDisc = require('../models/MagnetometricDisc');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertMagnetometricDiscs = async (magnetometricDiscData) => {
    const magnetometricDiscs = await MagnetometricDisc.insertMany(magnetometricDiscData);
    if (magnetometricDiscs) {
        return Result(true, Messages.itemCreated, magnetometricDiscs);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const magnetometricDiscs = await MagnetometricDisc.find({ siteId });
    if (magnetometricDiscs) {
        return Result(true, Messages.itemsListed, magnetometricDiscs);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertMagnetometricDiscs,
    getBySiteId,
};