import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddEvent from './components/AddEvent';
import EventsComp from './components/EventsComp';
import EditEvent from './components/EditEvent';



const App = () => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

let [parties, setParties] = useState([])



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
      <AddEvent handleCreate={handleCreate}/>
      <div className="Parties">
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

export default App;
