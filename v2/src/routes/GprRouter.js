const express = require('express');
const {
  getBySiteId,
  create,
  createGprProfile,
  deleteGprs,
  deleteGprProfiles,
} = require('../controllers/GprController');

const router = express.Router();

router.route('/').post(create);
router.route('/profiles').post(createGprProfile);
router.route('/bulk-delete').post(deleteGprs);
router.route('/profiles/bulk-delete').post(deleteGprProfiles);
router.route('/by-site/:siteId').get(getBySiteId);

module.exports = router;