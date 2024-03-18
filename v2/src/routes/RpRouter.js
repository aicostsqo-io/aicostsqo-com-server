const express = require('express');
const {
  index,
  create,
  bulkDelete,
  bulkInsert,
  getBySiteBoundId,
  distributionCurves,
} = require('../controllers/RpController');

const router = express.Router();

router.route('/').get(index);
router.route('/:siteBoundId').get(getBySiteBoundId);
router.route('/').post(create);
router.route('/bulk-delete').post(bulkDelete);
router.route('/manual').post(bulkInsert);
router.route('/distribution-curves').post(distributionCurves);

module.exports = router;