import './App.css';
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Error from './components/Error';
import HomePage from './components/HomePage';
import EventsAppAdmin from './components/EventsAppAdmin';
import EventsApp from './components/EventsApp';
import AddEvent from './components/AddEvent';
import EventsComp from './components/EventsComp';
import EditEvent from './components/EditEvent';
import EventShowPage from './components/EventShowPage';
import AdminLogin from './components/AdminLogin';
import AdminCreate from './components/AdminCreate';
import AdminAccLogin from './components/AdminAccLogin';




const App = () => {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="eventsAdmin" element={<EventsAppAdmin/>}/>
        <Route path="events" element={<EventsApp/>}/>
        <Route path="/event/:id" element={<EventShowPage/>}/>
        <Route path="/admin" element={<AdminLogin/>} />
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;
