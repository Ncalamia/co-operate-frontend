import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Navbar from './components/Navbar';
import EventsApp from './components/EventsApp';
import AddEvent from './components/AddEvent';
import EventsComp from './components/EventsComp';
import EditEvent from './components/EditEvent';
import EventShowPage from './components/EventShowPage';




const App = () => {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/events" element={<EventsApp/>}/>
        <Route path="/updates" />
        <Route path="/appreciation" />
        <Route path="/events/:partyid" element={<EventShowPage/>}/>
      </Routes>
    </Router>
  )
}

export default App;
