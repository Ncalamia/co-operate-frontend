import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import AddEvent from './AddEvent';
import EventsComp from './EventsComp';
import EditEvent from './EditEvent';
import EventShowPage from './EventShowPage';


///////// Admin view of the events page, can perform CRUD /////////
const EventsAppAdmin = () => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

///////// All of the parties/events in the DB ///////////
let [parties, setParties] = useState([])

///////////////////////////////
/// CRUD for events/parties///
//////////////////////////////

///////// URLs ///////////////
const LOCAL_URL_events = 'http://localhost:8000/api/events'
const LOCAL_URL_employeeitems = 'http://localhost:8000/api/employeeitems'

const HEROKU_URL_events = 'https://co-operate-backend.herokuapp.com/api/events'
const HEROKU_URL_employeeitems = 'https://co-operate-backend.herokuapp.com/api/employeeitems'

//////// READ / FETCH parties/events for admin view ////////////////
const getParties = () => {
  axios
    .get(HEROKU_URL_events)
    .then(
      (response) => setParties(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
}

//////// CREATE parties/events for admin view //////////////
const handleCreate = (addParty) => {
  axios.post(HEROKU_URL_events, addParty)
  .then((response) => {
    setParties([...parties, response.data])
  })
}

//////// UPDATE parties/events for admin view //////////////
const handleUpdate = (editParty) => {
  axios.put(HEROKU_URL_events + '/' + editParty.id, editParty)
  .then((response) => {
    console.log(editParty);
    setParties(parties.map((party) => {
      return party.id !== response.data.id ? party : response.data
    }))
  })
}

//////// DELETE parties/events for admin view //////////////
const handleDelete = (deletedParty) => {
  axios.delete(HEROKU_URL_events + '/' + deletedParty.id)
      .then((response) => {
          setParties(parties.filter(party => party.id !== deletedParty.id))
      })
}





//////// PAGE LOAD //////////////
useEffect(() => {
  getParties()
}, [])



  return (
    <div>
      <h1>App.js</h1>
      <div className="Parties">
      <AddEvent handleCreate={handleCreate}/>
  {parties.map((party) => {
    return (
        <div className="party" key={party.id}>
          <EventsComp party={party}/>
          <EditEvent handleUpdate={handleUpdate} party={party}/>
          <button onClick={() => {handleDelete(party)}}>Delete</button>
        </div>
        )
      })}
      </div>
      <Outlet />
    </div>
  )
}

export default EventsAppAdmin;
