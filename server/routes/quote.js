const express = require('express');
const router = express.Router();
const { postNewLead } = require('../controllers/Quote');
router.route('/').post(postNewLead);

module.exports = router;
