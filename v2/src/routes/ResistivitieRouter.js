const express = require('express');
const { getBySiteId } = require('../controllers/ResistivitieController');

const router = express.Router();

router.route('/by-site/:siteId').get(getBySiteId);

module.exports = router;