const Lead = require('../models/Lead');

exports.postNewLead = async (req, res, next) => {
  try {
    const newLead = await Lead.create(req.body);
    console.log(req.body);
    res.status(200).json(newLead);
    console.log(newLead);
    console.log('New Lead added to database'.brightGreen);
  } catch (err) {
    console.log(`${err}`.red);
    res.status(400).json({ success: false, err: err.message });
  }
};
