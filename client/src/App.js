import './App.css';
import './components/styles/css/app.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import { useState, useEffect } from 'react';
import axios from 'axios?';
function App() {
  const fakeLeadData = [
    {
      _id: 0,
      name: 'Abiodun Freeman',
      email: 'freemanabiodun@gmail.com',
      phone: '216-789-8456',
      contacted: false,
      zip: '44402',
      message: "Hi, I'd like to purchase some insurance",
      insurance_intrest: ['Auto', 'Home', 'Life'],
    },
    {
      _id: 1,
      name: 'Nino Brown',
      email: 'kittycat@gmail.com',
      phone: '330-878-8797',
      contacted: false,
      zip: '11548',
      message: "Meowww, I'd like to purchase life insurance for 9 lifetimes",
      insurance_intrest: ['Life'],
    },
    {
      _id: 2,
      name: 'Kelley Stewart',
      email: 'KS@AOL.com',
      phone: '44-785-4561',
      contacted: false,
      zip: '44121',
      message: 'No message given.',
      insurance_intrest: ['Auto', 'Home'],
    },
  ];
  const [leads, setLeads] = useState([]);
  const fetchLeads = async () => {
    // const res = await axios.get('http://localhost:5000/lead/all');
    // setLeads(res.data);

    setLeads(fakeLeadData);
  };
  const handleDeleteLead = async id => {
    const res = await axios.delete(`http://localhost:5000/lead/${id}`);
    console.log(res);
    fetchLeads();
  };
  const handleUpdateContacted = async id => {
    // const res = await axios.put(`http://localhost:5000/lead/${id}`);
    // console.log(res);
    // fetchLeads();

    const lead = fakeLeadData.filter(lead => lead._id === id)[0];
    const leadIndex = fakeLeadData.indexOf(lead);
    fakeLeadData[leadIndex].contacted = !lead.contacted;
    fetchLeads();
  };
  useEffect(() => {
    // populates leads

    fetchLeads();
  }, []);

  return (
    <div className="App">
      <Header />
      {/* <Hero />
      <Main /> */}
      {/* <h2>KS Insurance</h2> */}
      {/* {leads.map(lead => (
        <div key={lead._id}>
          <h1>{lead.name}</h1>
          <h2>{lead.contacted ? 'has been reached out to' : 'not yet'}</h2>
          <button
            className="btn btn-danger"
            onClick={() => handleDeleteLead(lead._id)}
          >
            delete lead
          </button>
          <h3
            className="btn btn-primary"
            onClick={() => handleUpdateContacted(lead._id)}
          >
            change contacted
          </h3>
        </div>
      ))} */}
    </div>
  );
}

export default App;
