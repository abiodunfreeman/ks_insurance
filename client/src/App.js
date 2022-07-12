import './App.css';
import './components/styles/css/app.css';
import Header from './components/Header';
import Home from './components/Home';
// import { useState, useEffect } from 'react';
import axios from 'axios?';
function App() {
  // const [leads, setLeads] = useState([]);
  // const fetchLeads = async () => {
  //   const res = await axios.get('http://localhost:5000/lead/all');
  //   setLeads(res.data);

  //   // setLeads(fakeLeadData);
  // };
  // const handleDeleteLead = async id => {
  //   const res = await axios.delete(`http://localhost:5000/lead/${id}`);
  //   console.log(res);
  //   fetchLeads();
  // };
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
      `http://localhost:5000/contact-us`,
      contactObj
    );
    console.log(res);
    console.log('contact form submit');
  };
  // const handleUpdateContacted = async id => {
  //   const res = await axios.put(`http://localhost:5000/lead/${id}`);
  //   console.log(res);
  //   fetchLeads();
  // };
  // useEffect(() => {
  //   // populates leads
  //   fetchLeads();
  // }, []);

  // CLIENT SIDE TODO
  /*
    Create a login  page / form

    Route pages with React Router
  */
  return (
    <div className="App">
      <Header />
      <Home handleContactUsFormSubmit={handleContactUsFormSubmit} />
    </div>
  );
}

export default App;
