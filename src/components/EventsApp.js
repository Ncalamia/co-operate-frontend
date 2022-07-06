import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import EventsComp from './EventsComp';
import EventShowPage from './EventShowPage';


///////// Normal view (not admin) of the events page /////////
const EventsApp = () => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

///////// All of the parties/events in the DB ///////////
let [parties, setParties] = useState([])

///////// URLs ///////////////
const LOCAL_URL_events = 'http://localhost:8000/api/events'
const LOCAL_URL_employeeitems = 'http://localhost:8000/api/employeeitems'

const HEROKU_URL_events = 'https://co-operate-backend.herokuapp.com/api/events'
const HEROKU_URL_employeeitems = 'https://co-operate-backend.herokuapp.com/api/employeeitems'

//////// READ / FETCH  parties/events ////////////////
const getParties = () => {
    axios
    .get(HEROKU_URL_events)
    .then(
        (response) => setParties(response.data),
        (err) => console.error(err)
    )
    .catch((error) => console.error(error))
}


//////// PAGE LOAD //////////////
useEffect(() => {
    getParties()
}, [])


    return (
        <div className='partyPage'>
            <div className="parties has-background-info-light">
        {parties.map((party) => {
                return (
                <div className="party has-background-white" key={party.id}>
                    <EventsComp party={party}/>
                    <Link to={`/event/${party.id}`} className="button is-link is-light mt-3">Sign Up</Link>
                </div>
                )
            })}
            </div>
        <Outlet />
    </div>
    )
}

export default EventsApp;