import { TextField } from '@mui/material';
import './styles/css/ContactForm.css';
import axios from 'axios';
const ContactForm = () => {
  const handleContactUsFormSubmit = async e => {
    e.preventDefault();
    const contactName = document.querySelector('#contact-form-name').value;
    const contactEmail = document.querySelector('#contact-form-email').value;
    const contactMsg = document.querySelector('#contact-form-msg').value;
    document.querySelector('#contact-form-name').value = '';
    document.querySelector('#contact-form-email').value = '';
    document.querySelector('#contact-form-msg').value = '';
    const contactObj = {
      name: contactName,
      email: contactEmail,
      msg: contactMsg,
    };
    const res = await axios.post(
      `https://fringuante-moliere-43929.herokuapp.com/contact-us`,
      contactObj
    );
    console.log(res);
    console.log('contact form submit');
  };
  return (
    <div id="ContactForm">
      <h1>Let's Chat</h1>
      <p>
        Use the form below to contact us regarding your insurance needs. To help
        us best serve you, we recommend that you include a declarations page(s)
        from your current insurance carrier. You may also email or call us to
        make an appointment. <br />
        <br />
        For job opportunities, please email us your resume. We’re always looking
        for new and exceptional talent to lead the brokerage into the future.
      </p>
      <form onSubmit={e => handleContactUsFormSubmit(e)}>
        <TextField
          required
          fullWidth
          variant="outlined"
          label="name"
          margin="normal"
          name="name"
          id="contact-form-name"
          placeholder="Name"
        />
        <TextField
          required
          fullWidth
          variant="outlined"
          label="email"
          margin="normal"
          name="email"
          id="contact-form-email"
          placeholder="email"
        />
        <TextField
          multiline
          fullWidth
          variant="outlined"
          label="Message"
          margin="normal"
          name="message"
          rows={4}
          id="contact-form-msg"
          placeholder="Message"
        />
        <div className="flex gap-4">
          <label for="contact-form-file">*Optional* </label>
          <input type="file" id="contact-form-file" />
        </div>

        <button className="btn btn-primary" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
