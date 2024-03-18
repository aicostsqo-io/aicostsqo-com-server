const SeismicProfile = require('../models/SeismicProfile');
const Result = require('../models/ResultModels/Result');
const Messages = require('../models/ResultModels/Messages');

const insertSeismicProfiles = async (seismicProfileData) => {
    const seismicProfiles = await SeismicProfile.insertMany(seismicProfileData);
    if (seismicProfiles) {
        return Result(true, Messages.itemCreated, seismicProfiles);
    }
    else {
        return Result(false, Messages.itemNotCreated, null);
    }
};

const getBySiteId = async (siteId) => {
    const seismicProfiles = await SeismicProfile.find({ siteId }).sort({
        rectangleLineNumber: 1,
    });
    if (seismicProfiles) {
        return Result(true, Messages.itemsListed, seismicProfiles);
    }
    else {
        return Result(false, Messages.itemNotFound, null);
    }
};

module.exports = {
    insertSeismicProfiles,
    getBySiteId,
};