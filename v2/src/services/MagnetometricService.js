const Magnetometric = require('../models/Magnetometric');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertMagnetometric = async (magnetometricData) => {
    const magnetometric = await Magnetometric.create(magnetometricData);
    if (magnetometric) {
        return Result(true, Messages.itemCreated, magnetometric);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const magnetometrics = await Magnetometric.find({ siteId });
    if (magnetometrics) {
        return Result(true, Messages.itemsListed, magnetometrics);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertMagnetometric,
    getBySiteId,
};