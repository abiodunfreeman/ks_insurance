import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import '../components/styles/css/leads.css';
import { Button, Card, Paper } from '@mui/material';
export default function Leads() {
  const [leads, setLeads] = useState([]);
  const fetchLeads = async () => {
    const res = await axios.get(
      'https://fringuante-moliere-43929.herokuapp.com/lead/all'
    );
    setLeads(res.data);

    // setLeads(fakeLeadData);
  };
  const handleDeleteLead = async id => {
    const res = await axios.delete(
      `https://fringuante-moliere-43929.herokuapp.com/lead/${id}`
    );
    console.log(res);
    fetchLeads();
  };

  const handleUpdateContacted = async id => {
    const res = await axios.put(
      `https://fringuante-moliere-43929.herokuapp.com/lead/${id}`
    );
    console.log(res);
    fetchLeads();
  };
  useEffect(() => {
    // populates leads
    fetchLeads();
  }, []);
  console.log(leads);
  const leadsJSX = leads.map(lead => {
    return (
      <Paper
        elevation={5}
        // variant="outlined"
        key={lead._id}
        className="lead-card flex-col justify-center border-red-300 border-4"
      >
        <h3 className="text-center">{lead.name}</h3>

        <h4>{lead.email}</h4>

        <h4>Phone: {lead.phone}</h4>
        <h4>Zip: {lead.zip}</h4>
        <h5>
          Interested in - {lead.interest.home && 'home'}{' '}
          {lead.interest.auto && 'auto'} {lead.interest.life && 'life'}{' '}
          {lead.interest.business && 'business'}
        </h5>
        <p>{lead.message || 'No message given.'}</p>
        {lead.contacted ? (
          <p className="text-green-400">contacted</p>
        ) : (
          <p className="text-red-600">not contacted</p>
        )}
        <div className="flex-col p-4">
          <Button
            className="p-9"
            fullWidth
            variant="contained"
            onClick={() => handleUpdateContacted(lead._id)}
          >
            Update Contacted
          </Button>
          <div className="p-2"></div>
          <Button
            fullWidth
            color="error"
            variant="outlined"
            onClick={() => handleDeleteLead(lead._id)}
          >
            DELETE
          </Button>
        </div>
      </Paper>
    );
  });
  return (
    <section id="leads-container" className="">
      <Header />
      <div className="padtop10"></div>
      <div className="flex flex-wrap gap-8 justify-evenly">
        {!leads ? 'Loading leads...' : leadsJSX}
      </div>
    </section>
  );
}
