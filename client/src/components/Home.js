import React, { Suspense } from 'react';

import Bio from './Bio';
import './styles/css/home.css';
import ContactForm from './ContactForm';
import Footer from './Footer';
import IconRow from './IconRow';
const Hero = React.lazy(() => import('./Hero'));
const Home = props => {
  const { handleContactUsFormSubmit } = props;
  return (
    <div id="home-container">
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>

      <Bio />

      <IconRow />
      <div id="home-quote">
        <h1>
          “Price is what you pay. <span className="text-red-500">Value</span> is
          what you get.”
        </h1>
        <h2 className="author text-red-700">— Warren Buffet</h2>
      </div>
      {/* <ContactForm handleContactUsFormSubmit={handleContactUsFormSubmit} /> */}
      <div id="hero2">
        <h3 className="text-right p-4">
          "Kelley was so kind and patient with me. <br />
          She made getting Insurance so easy ! <br />
          She is the best agent I've ever dealt with!" <br />
          <span id="sec-text">
            -Andrea Z. <br />
          </span>
        </h3>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
