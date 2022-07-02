const Lead = require('../models/Lead');
const nodemailer = require('nodemailer');

exports.postNewLead = async (req, res, next) => {
  try {
    const newLead = await Lead.create(req.body);
    res.status(200).json(newLead);
    console.log('New Lead added to database'.brightGreen);

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.email,
        pass: process.env.emailPassword,
      },
    });
    const mailOptions = {
      to: process.env.email,
      subject: `New Lead - ${newLead.name}`,
      html: `<h1>${newLead.name}</h1> <h1>${newLead.email}</h1><p>${newLead.message}</p>`,
    };
    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        console.log(err);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (err) {
    console.log(`${err}`.red);
    res.status(400).json({ success: false, err: err.message });
  }
};
