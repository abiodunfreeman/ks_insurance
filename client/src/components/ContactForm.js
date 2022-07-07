import './styles/css/ContactForm.css';
const ContactForm = () => {
  return (
    <div id="ContactForm">
      <div id="ContactForm-container">
        <h1>Let's Chat</h1>
        <p>
          Use the form below to contact us regarding your insurance needs. To
          help us best serve you, we recommend that you include a declarations
          page(s) from your current insurance carrier. You may also email or
          call us to make an appointment. <br />
          <br />
          For job opportunities, please email us your resume. We’re always
          looking for new and exceptional talent to lead the brokerage into the
          future.
        </p>
        <form>
          <div class="form-group row">
            <label class="col-4 col-form-label" for="contact-form-name">
              name
            </label>
            <div class="col-8">
              <input
                id="contact-form-name"
                name="contact-form-name"
                placeholder="Enter name"
                type="text"
                class="form-control"
                required="required"
              />
            </div>
            <label class="col-4 col-form-label" for="contact-form-email">
              email
            </label>
            <div class="col-8">
              <input
                id="contact-form-email"
                name="contact-form-email"
                placeholder="Enter email"
                type="text"
                class="form-control"
                required="required"
              />
            </div>
            <label class="col-4 col-form-label" for="contact-form-msg">
              How Can We Help?
            </label>
            <div class="col-8">
              <input
                id="contact-form-msg"
                name="contact-form-msg"
                placeholder="Enter msg"
                type="text"
                class="form-control"
                required="required"
              />
            </div>
          </div>
          <div class="form-group row">
            <div class="offset-4 col-8">
              <button name="submit" type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ContactForm;
