import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import '../components/styles/css/leads.css';
import { Button, Card } from '@mui/material';
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
      <Card className="lead-card">
        <h3 className="text-center">{lead.name}</h3>
        <h4>{lead.email}</h4>
        <h4>{lead.phone}</h4>
        <h4>{lead.zip}</h4>
        <p>{lead.message}</p>
        {lead.contacted ? (
          <p className="text-green-400">contacted</p>
        ) : (
          <p className="text-red-600">not contacted</p>
        )}
        <Button
          variant="contained"
          onClick={() => handleUpdateContacted(lead._id)}
        >
          Update Contacted
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={() => handleDeleteLead(lead._id)}
        >
          DELETE
        </Button>
      </Card>
    );
  });
  return (
    <section id="leads-container" className="">
      <Header />
      <div className="padtop10"></div>
      <div className="flex flex-wrap gap-8 justify-evenly">{leadsJSX}</div>
    </section>
  );
}
