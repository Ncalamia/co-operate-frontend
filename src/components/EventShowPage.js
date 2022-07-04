import { useNavigate, useParams, Link, Outlet } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventSignUpAdd from './EventSignUpAdd';
import EventSignUpEdit from './EventSignUpEdit';


const EventShowPage = () => {

///////////////////////////////
//////// Params ////////////////
//////////////////////////////

    let {id} = useParams()


///////////////////////////////
//////// States ////////////////
//////////////////////////////

    let [currentParty, setCurrentParty] = useState({})

    let [signUps, setSignUps] = useState([])

    const [search, setSearch] = useState("")

    ///////// URLs ///////////////
const LOCAL_URL_events = 'http://localhost:8000/api/events'
const LOCAL_URL_employeeitems = 'http://localhost:8000/api/employeeitems'

const HEROKU_URL_events = 'https://co-operate-backend.herokuapp.com/api/events'
const HEROKU_URL_employeeitems = 'https://co-operate-backend.herokuapp.com/api/employeeitems'


///////// Get specific event/party /////////
const getCurrentParty = () => {
    axios.get(HEROKU_URL_events + "/" + id)
    .then(response => setCurrentParty(response.data),
    err=> console.error(err)
    )
    .catch(error => console.error(error))
}



///////////////////////////////
///// CRUD for SignUps ////////
//////////////////////////////

//////// READ / FETCH ////////////////
const getSignUps = () => {
    axios
    .get(HEROKU_URL_employeeitems)
    .then(response => setSignUps(response.data),
    (err) => console.error(err))
    .catch((error) => console.error(error))
}

//////// CREATE //////////////

const handleCreateSignUp = (addSignUp) => {
    console.log(addSignUp)
    axios.post(HEROKU_URL_employeeitems, addSignUp)
    .then((response) => {
    setSignUps([...signUps, response.data])
    })
}

//////// UPDATE //////////////

const handleUpdateSignUp = (editSignUp) => {
    axios.put(HEROKU_URL_employeeitems + '/' + editSignUp.id, editSignUp)
    .then((response) => {
    console.log(editSignUp);
    setSignUps(signUps.map((signUp) => {
        return signUp.id !== response.data.id ? signUp : response.data
        }))
    })
}
// Filter and then map
// return signUp.id !== response.data.id ? signUp.party === currentParty.id : response.data

// {signUps.filter((signUp) => {
//     if (signUp.party === currentParty.id) {
//         console.log("correct")
//         return signUp
//     } else {
//         console.log("incorrect")
//     }
//     }).map((signUp) => {
//             return (



//////// DELETE //////////////
const handleDeleteSignUp = (deletedSignUp) => {
    axios.delete(HEROKU_URL_employeeitems + '/' + deletedSignUp.id)
        .then((response) => {
            setSignUps(signUps.filter(signUp => signUp.id !== deletedSignUp.id && signUp.party == currentParty.id))
        })
}





//////// PAGE LOAD //////////////

useEffect(() => {
    getCurrentParty()
    getSignUps()
}, [])


    return (
        <div>
            <div key={currentParty.id}>
                <h1>{currentParty.title}</h1>
                <h2>When: {currentParty.when}</h2>
                <h2>Time: {currentParty.time}</h2>
                <h2>Where: {currentParty.where}</h2>
                <h2>More Info: {currentParty.notes}</h2>
                <h2>id: {currentParty.id}</h2>
            </div>
            <div className="Parties">
                <div className="searchbar">
                    <p className="stateSearch">Search to see if the item is available to bring</p>
                    <input className="input-search" type="text" placeholder="Search..." onChange={event => {setSearch(event.target.value)}}/>
                </div>
                <EventSignUpAdd handleCreateSignUp={handleCreateSignUp} currentParty={currentParty}/>
                {signUps.filter((signUp) => {
                    if (signUp.party === currentParty.id && search == "") {
                        return signUp
                    } else if (signUp.party === currentParty.id && signUp.item.toLowerCase().includes(search.toLowerCase())) {
                        return signUp
                    }
                }).map((signUp) => {
                        return (
                                <div>
                                    <div className="signUpContainer" key={signUp.id}>
                                        <div className='signUp'>
                                            <h3>{signUp.name}</h3>
                                            <h3>{signUp.item}</h3>
                                            <h3>{signUp.party}</h3>
                                        </div>
                                        <button onClick={() => {handleDeleteSignUp(signUp)}}>Delete</button>
                                    </div>
                                </div>
                        )})
                    }
            </div>
        </div>
    )
}

export default EventShowPage;
