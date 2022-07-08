import './styles/css/ContactForm.css';
const ContactForm = props => {
  const { handleContactUsFormSubmit } = props;
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
        <input type="text" id="contact-form-name" placeholder="Name" />
        <input type="text" id="contact-form-email" placeholder="Email" />
        <textarea rows="5" id="contact-form-msg" placeholder="Message..." />
        <button className="btn btn-primary" type="submit">
          SUBMIT
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
