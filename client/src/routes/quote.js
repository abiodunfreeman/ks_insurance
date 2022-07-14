import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/styles/css/quote.css';
import { TextField } from '@mui/material';
export default function Quote() {
  return (
    <section id="quote-homepage" className="h-screen flex-col">
      <Header />
      <div
        id="quote-form-container"
        className="flex justify-evenly items-center gap-11
        "
      >
        <div id="quote-words-container">
          <h1>GIVE US MONEY</h1>
          <p>let me explain why you should</p>
        </div>
        <form className="border-8 ">
          <TextField
            required
            fullWidth
            variant="outlined"
            label="name"
            margin="normal"
            name="name"
            id="name"
            placeholder="Name"
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="email"
            margin="normal"
            name="email"
            id="email"
            placeholder="email"
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="phone"
            margin="normal"
            name="phone"
            id="phone"
            placeholder="Phone Number"
          />
          <TextField
            required
            fullWidth
            variant="outlined"
            label="Message"
            margin="normal"
            name="Message"
            id="Message"
            placeholder="Message"
            multiline
            rows={4}
          />
        </form>
      </div>

      <Footer />
    </section>
  );
}
