const express = require('express');
const router = express.Router();
const { postNewLead, getAllLeads } = require('../controllers/Lead');
router.route('/new').post(postNewLead);
router.route('/all').get(getAllLeads);

module.exports = router;
