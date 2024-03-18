const {
    listRps,
    bulkDeleteRps,
    insertRp,
    getRpsBySiteBoundId,
    bulkInsertRps,
    getLastRpBySiteBoundId,
    getOutputVolumesByRp,
} = require('../services/FieldServices/RPService');
const {
    calculateDistributionCurves,
} = require('../services/DistributionCurvesService');

const create = async (req, res) => {
    const { name } = await getLastRpBySiteBoundId(req.body.siteBound);
    const lastRPNumber = parseInt(name.split(' ')[1]);
    const rp = await insertRp({
        ...req.body,
        name: `RP ${lastRPNumber + 1}`,
    });
    res.send(rp);
};

const bulkDelete = async (req, res) => {
    const deletedItem = await bulkDeleteRps(req.body);
    res.send(deletedItem);
};

const bulkInsert = async (req, res) => {
    const newRPs = [];
    if (req?.body[0]?.siteBound === undefined) {
        res.send({
            success: false,
            message: 'Site Bound ID is required',
        });
    }
    let index = 1;
    for (let rp of req.body) {
        const { name } = await getLastRpBySiteBoundId(rp.siteBound);
        const lastRPNumber = parseInt(name.split(' ')[1]);
        rp.name = `RP ${lastRPNumber + index++}`;
        newRPs.push(rp);
    }

    const insertedRps = await bulkInsertRps(newRPs);
    res.send(insertedRps);
};

const index = async (req, res) => {
    const rps = await listRps();
    res.send(rps);
};

const getBySiteBoundId = async (req, res) => {
    const { siteBoundId } = req.params;
    const rps = await getRpsBySiteBoundId(siteBoundId);
    res.send(rps);
};

const distributionCurves = async (req, res) => {
    const { rpIdList, sourceList, chartList } = req.body;
    const result = [];
    for (let index = 0; index < rpIdList.length; index++) {
        const rpId = rpIdList[index];
        const rpOutputVolumes = await getOutputVolumesByRp(rpId);
        const rpRes = await calculateDistributionCurves(
            rpOutputVolumes,
            sourceList,
            chartList
        );
        result.push({ ...rpRes, rpId });
    }
    res.send({
        success: true,
        message: 'Succeeded',
        result
    });
};

module.exports = {
    bulkDelete,
    index,
    create,
    getBySiteBoundId,
    bulkInsert,
    distributionCurves,
};