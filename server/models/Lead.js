const mongoose = require('mongoose');
const LeadSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'please enter your name'],
  },
  email: {
    type: String,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please enter a valid email',
    ],
    required: [true, 'please enter your email'],
  },
  phone: {
    type: String,
    required: [true, 'please enter your phone number'],
  },
  zip: {
    type: String,
    required: [true, 'please enter your zipcode'],
  },
  message: String,
  insurance_intrest: [String],
});
module.exports = mongoose.model('Lead', LeadSchema);