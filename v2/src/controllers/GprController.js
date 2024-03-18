const {
    getBySiteId: getGprs,
    insert: insertGpr,
    deleteById: removeGprs,
} = require('../services/GprService');
const { getBySiteId: getDiscs } = require('../services/GprDiscService');
const {
    getBySiteId: getProfiles,
    insert: insertGprProfile,
    bulkDelete: removeGprProfiles,
} = require('../services/GprProfileService');

const create = async (req, res) => {
    const { body } = req;
    const gpr = await insertGpr(body);
    res.send(gpr);
};

const createGprProfile = async (req, res) => {
    const { body } = req;
    const gprProfile = await insertGprProfile(body);
    res.send(gprProfile);
};

const deleteGprs = async (req, res) => {
    const { body } = req;
    const removeResult = await removeGprs(body);
    res.send(removeResult);
};
const deleteGprProfiles = async (req, res) => {
    const { body } = req;
    const deletedGprProfilesResult = await removeGprProfiles(body);
    res.send(deletedGprProfilesResult);
};

const getBySiteId = async (req, res) => {
    const { siteId } = req.params;
    const gprs = await getGprs(siteId);
    const gprProfiles = await getProfiles(siteId);
    const gprDiscs = await getDiscs(siteId);
    const result = {
        gprs: gprs,
        gprProfiles: gprProfiles,
        gprDiscs: gprDiscs,
    };
    res.send(result);
};

module.exports = {
    getBySiteId,
    create,
    createGprProfile,
    deleteGprs,
    deleteGprProfiles,
};