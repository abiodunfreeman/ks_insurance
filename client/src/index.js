import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App';
import Quote from './routes/quote';
import About from './routes/about';
import Login from './routes/login';
import ContactUs from './routes/contact-us';
import SignInSide from './routes/SignInSide';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signin" element={<SignInSide />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);
