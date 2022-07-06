import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Error from './components/Error';
import HomePage from './components/HomePage';
import EventsAppAdmin from './components/EventsAppAdmin';
import EventsApp from './components/EventsApp';
import EventShowPage from './components/EventShowPage';
import AdminLogin from './components/AdminLogin';
import UpdatesPage from './components/UpdatesPage';





const App = () => {


  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="eventsAdmin" element={<EventsAppAdmin/>}/>
        <Route path="events" element={<EventsApp/>}/>
        <Route path="/event/:numID" element={<EventShowPage/>}/>
        <Route path="/admin" element={<AdminLogin/>}/>
        <Route path="/updates" element={<UpdatesPage/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </Router>
  )
}

export default App;
