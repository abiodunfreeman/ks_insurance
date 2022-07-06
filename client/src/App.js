import './App.css';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios?';
function App() {
  const [leads, setLeads] = useState([]);
  const fetchLeads = async () => {
    const res = await axios.get('http://localhost:5000/lead/all');
    setLeads(res.data);
  };
  const handleDeleteLead = async id => {
    const res = await axios.delete(`http://localhost:5000/lead/${id}`);
    console.log(res);
    fetchLeads();
  };
  const handleUpdateContacted = async id => {
    const res = await axios.put(`http://localhost:5000/lead/${id}`);
    console.log(res);
    fetchLeads();
  };
  useEffect(() => {
    // populates leads

    fetchLeads();
  }, []);
  console.log(leads);
  return (
    <div className="App">
      <Header />
      <h2>KS Insurance</h2>
      {leads.map(lead => (
        <div key={lead._id}>
          <h1>{lead.name}</h1>
          <h2>{lead.contacted ? 'has been reached out to' : 'not yet'}</h2>
          <button onClick={() => handleDeleteLead(lead._id)}>
            delete lead
          </button>
          <button onClick={() => handleUpdateContacted(lead._id)}>
            change contacted
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
