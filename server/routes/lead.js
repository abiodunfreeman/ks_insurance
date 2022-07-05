const express = require('express');
const router = express.Router();
const {
  postNewLead,
  getAllLeads,
  deleteLead,
  getOneLead,
} = require('../controllers/Lead');
router.route('/new').post(postNewLead);
router.route('/all').get(getAllLeads);
router.route('/:id').delete(deleteLead).get(getOneLead);
module.exports = router;
