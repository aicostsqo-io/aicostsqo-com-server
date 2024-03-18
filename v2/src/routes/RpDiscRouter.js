const express = require('express');
const {
  index,
  listByRpId,
  create,
  manual,
} = require('../controllers/RpDiscController');

const router = express.Router();

router.route('/').get(index);
router.route('/').post(create);
router.route('/:id').get(listByRpId);
router.route('/manual').post(manual);

module.exports = router;