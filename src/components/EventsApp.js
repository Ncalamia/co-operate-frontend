import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
import AddEvent from './AddEvent';
import EventsComp from './EventsComp';
import EditEvent from './EditEvent';



const EventsApp = () => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

let [parties, setParties] = useState([])


let navigate = useNavigate()
let {partyid} = useParams()



///////////////////////////////
//////// CRUD ////////////////
//////////////////////////////

///////// URLs ///////////////
const LOCAL_URL_events = 'http://localhost:8000/api/events'
const LOCAL_URL_employeeitems = 'http://localhost:8000/api/employeeitems'
const LOCAL_URL_useraccounts = 'http://localhost:8000/api/useraccount'

const HEROKU_URL_events = 'https://co-operate-backend.herokuapp.com/api/events'
const HEROKU_URL_employeeitems = 'https://co-operate-backend.herokuapp.com/api/employeeitems'
const HEROKU_URL_useraccount = 'https://co-operate-backend.herokuapp.com/api/useraccount'

//////// READ / FETCH ////////////////
const getParties = () => {
  axios
    .get(HEROKU_URL_events)
    .then(
      (response) => setParties(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
}

//////// CREATE //////////////

const handleCreate = (addParty) => {
  axios.post(HEROKU_URL_events, addParty)
  .then((response) => {
    setParties([...parties, response.data])
  })
}

//////// UPDATE //////////////

const handleUpdate = (editParty) => {
  axios.put(HEROKU_URL_events + '/' + editParty.id, editParty)
  .then((response) => {
    console.log(editParty);
    setParties(parties.map((party) => {
      return party.id !== response.data.id ? party : response.data
    }))
  })
}

//////// DELETE //////////////
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
      <button onClick={() => {navigate("/events/:party")}}>Show Event</button>
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
    </div>
  )
}

export default EventsApp;
