import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const EventShowPage = () => {

///////////////////////////////
//////// Params ////////////////
//////////////////////////////

    let {id} = useParams()


    ///////////////////////////////
//////// States ////////////////
//////////////////////////////

    let [currentParty, setCurrentParty] = useState({})

    ///////// URLs ///////////////
const LOCAL_URL_events = 'http://localhost:8000/api/events'
const LOCAL_URL_employeeitems = 'http://localhost:8000/api/employeeitems'

const HEROKU_URL_events = 'https://co-operate-backend.herokuapp.com/api/events'
const HEROKU_URL_employeeitems = 'https://co-operate-backend.herokuapp.com/api/employeeitems'


///////// Get specific event /////////
const getCurrentParty = () => {
    axios.get(HEROKU_URL_events + "/" + id)
    .then(response => setCurrentParty(response.data),
    err=> console.error(err)
    )
    .catch(error => console.error(error))
}


useEffect(() => {
    getCurrentParty()
}, [])


    return (
        <div>
            <h1>{currentParty.title}</h1>
            <h2>When: {currentParty.when}</h2>
            <h2>Time: {currentParty.time}</h2>
            <h2>Where: {currentParty.where}</h2>
            <h2>More Info: {currentParty.notes}</h2>
        </div>
    )
}

export default EventShowPage;
