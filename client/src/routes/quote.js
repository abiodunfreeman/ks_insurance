import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles/css/quote.css';
import axios from 'axios';
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  TextField,
} from '@mui/material';
export default function Quote() {
  const fetchLeads = async () => {
    const res = await axios.get('http://localhost:5000/lead/all');
    console.log(res.data);

    // setLeads(fakeLeadData);
  };
  const handleChange = async e => {
    e.preventDefault();
    const home = document.querySelector('#home-checkbox').checked;
    const auto = document.querySelector('#auto-checkbox').checked;
    const life = document.querySelector('#life-checkbox').checked;
    const business = document.querySelector('#business-checkbox').checked;
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const zip = document.querySelector('#zip').value;
    const message = document.querySelector('#message').value;
    const quoteObj = {
      name,
      email,
      phone,
      message,
      zip,
      interest: {
        home,
        auto,
        life,
        business,
      },
    };
    console.log(quoteObj);
    const res = await axios.post(
      `https://fringuante-moliere-43929.herokuapp.com/lead/new`,
      quoteObj
    );
    const quoteForm = document.querySelector('#quote-form');
    quoteForm.reset();

    // console.log(e);
  };
  return (
    <section id="quote-homepage" className="flex-col">
      <Header />
      <div className="padtop10"></div>
      <div
        id="quote-form-container"
        className="flex justify-evenly items-center
        "
      >
        <div id="x">
          <h3 className="text-center">
            REQUEST FOR AN <br />
            <span className="text-red-500">INSURANCE PLAN QUOTE TODAY</span>
          </h3>
          <div id="quote-line" className="text-center"></div>
          <p className="text-center">
            An agent will get back to you within 24 hours or 1 business day
          </p>
        </div>

        <form
          id="quote-form"
          className="border-8 border-red-500"
          onSubmit={e => handleChange(e)}
        >
          <h3 className="text-center">Quote Form</h3>
          <TextField
            required
            fullWidth
            variant="outlined"
            label="name"
            margin="normal"
            name="name"
            id="name"
            placeholder="Name"
            className=""
            // onChange={e => handleChange(e)}
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="email"
            margin="normal"
            name="email"
            id="email"
            // onChange={e => handleChange(e)}
            placeholder="email"
          />
          <div className="" id="phone-zip-container">
            <TextField
              required
              fullWidth
              variant="outlined"
              label="phone"
              margin="normal"
              name="phone"
              id="phone"
              // onChange={e => handleChange(e)}
              placeholder="Phone Number"
            />
            <TextField
              required
              fullWidth
              variant="outlined"
              label="zip"
              margin="normal"
              name="zip"
              id="zip"
              // onChange={e => handleChange(e)}
              placeholder="Zip Code"
            />
          </div>

          <TextField
            fullWidth
            variant="outlined"
            label="Message"
            margin="normal"
            name="message"
            // onChange={e => handleChange(e)}
            id="message"
            placeholder="Message *optional*"
            multiline
            rows={4}
          />
          <FormGroup id="checkbox-group">
            <h4 className="text-center">
              What type of Insurance are you Interested in?
            </h4>
            <div className="flex  justify-evenly flex-wrap">
              <FormControlLabel
                className="flex"
                control={
                  <Checkbox
                    id="home-checkbox"
                    value="home"
                    // onChange={e => handleChange(e)}
                  />
                }
                label="home"
              />
              <FormControlLabel
                className="flex"
                control={
                  <Checkbox
                    id="auto-checkbox"
                    value="auto"
                    // onChange={e => handleChange(e)}
                  />
                }
                label="auto"
                value="auto"
              />
              <FormControlLabel
                className="flex"
                control={
                  <Checkbox
                    id="life-checkbox"
                    value="life"
                    // onChange={e => handleChange(e)}
                  />
                }
                label="life"
                value="life"
              />
              <FormControlLabel
                className="flex"
                control={
                  <Checkbox
                    id="business-checkbox"
                    value="business"
                    // onChange={e => handleChange(e)}
                  />
                }
                label="business"
                value="business"
              />
            </div>
          </FormGroup>
          <Button type="submit" variant="contained">
            SUBMIT
          </Button>
        </form>
      </div>

      <Footer />
    </section>
  );
}
