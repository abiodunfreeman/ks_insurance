import './App.css';
import './components/styles/css/app.css';
import Header from './components/Header';
import Home from './components/Home';
// import { useState, useEffect } from 'react';
// import axios from 'axios';
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
      <Home />
    </div>
  );
}

export default App;
