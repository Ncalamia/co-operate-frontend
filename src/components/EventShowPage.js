import { useParams} from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import EventSignUpAdd from './EventSignUpAdd';



const EventShowPage = () => {

///////////////////////////////
//////// Params ////////////////
//////////////////////////////

///////////// id of the current party ////////////////
    let {numID} = useParams()


///////////////////////////////
//////// States ////////////////
//////////////////////////////

/////////// Controls show/hide for new signUp form ////////////
const [seeNewSignUpForm, setSeeNewSignUpForm] = useState(false)

///////////// Holds info of current party object ////////////////
    let [currentParty, setCurrentParty] = useState({})

///////////// All of the sign up in DB ////////////////
    let [signUps, setSignUps] = useState([])

///////////// Holds value of search box ////////////////
    const [search, setSearch] = useState("")

    ///////// URLs ///////////////
const LOCAL_URL_events = 'http://localhost:8000/api/events'
const LOCAL_URL_employeeitems = 'http://localhost:8000/api/employeeitems'

const HEROKU_URL_events = 'https://co-operate-backend.herokuapp.com/api/events'
const HEROKU_URL_employeeitems = 'https://co-operate-backend.herokuapp.com/api/employeeitems'


///////// Hide/Show New signUp Form ///////////
const toggleNewSignUpForm = () => {
    if (seeNewSignUpForm === true) {
        setSeeNewSignUpForm(false)
    } else if (seeNewSignUpForm === false) {
        setSeeNewSignUpForm(true)
    }
}

///////// Get specific event/party /////////
const getCurrentParty = () => {
    axios.get(HEROKU_URL_events + "/" + numID)
    .then(response => setCurrentParty(response.data),
    err=> console.error(err)
    )
    .catch(error => console.error(error))
}


///////////////////////////////
///// CRUD for SignUps ////////
//////////////////////////////

//////// READ / FETCH  signUps ////////////////
const getSignUps = () => {
    axios
    .get(HEROKU_URL_employeeitems)
    .then(response => setSignUps(response.data),
    (err) => console.error(err))
    .catch((error) => console.error(error))
}

//////// CREATE new signUp //////////////
const handleCreateSignUp = (addSignUp) => {
    console.log(addSignUp)
    axios.post(HEROKU_URL_employeeitems, addSignUp)
    .then((response) => {
    setSignUps([...signUps, response.data])
    })
    setSeeNewSignUpForm(false)
}


// //////// UPDATE //////////////
// const handleUpdateSignUp = (editSignUp) => {
//     axios.put(HEROKU_URL_employeeitems + '/' + editSignUp.id, editSignUp)
//     .then((response) => {
//     console.log(editSignUp);
//     setSignUps(signUps.map((signUp) => {
//         return signUp.id !== response.data.id ? signUp : response.data
//         }))
//     })
// }


//////// DELETE signUp //////////////
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
        <div className='eventShowPage has-background-link-light pb-6 pt-1'>
            <section id="hero" classname="hero" key={currentParty.id}>
                <div className='hero-body has-background-link my-6 py-2'>
                    <h1 className='eventTitle has-text-centered	 is-size-2 has-text-white pb-3'>{currentParty.title}</h1>
                    <h2 className='subtitle is-size-5 has-text-white my-3'>
                        <strong className='has-text-white has-text-weight-bold	'>When:</strong> {currentParty.when}</h2>
                    <h2 className='subtitle is-size-5 has-text-white my-3'>
                        <strong className='has-text-white has-text-weight-bold	'>Time:</strong> {currentParty.time}</h2>
                    <h2 className='subtitle is-size-5 has-text-white my-3'>
                        <strong className='has-text-white has-text-weight-bold	'>Where:</strong> {currentParty.where}</h2>
                    <h2 className='subtitle is-size-5 has-text-white my-3'>
                        <strong className='has-text-white has-text-weight-bold'>More Info:</strong> {currentParty.notes}</h2>
                </div>
            </section>
            <div className="SignUps">
                <div className='newSignUpDiv pb-6'>
                    <button className='button is-info is-light is-outlined' onClick={() => {toggleNewSignUpForm()}}>Sign Up</button>
                </div>
                {seeNewSignUpForm ? 
                <div className='newSignUpDiv'>
                    <EventSignUpAdd handleCreateSignUp={handleCreateSignUp} currentParty={currentParty} numID={numID}/> 
                </div>
                : "" } 
                <div className="searchDiv px-4 mb-6">
                    <p className="stateSearch is-size-5 has-text-centered px-4 pb-5">Search to see if the item is available to bring</p>
                    <input className="input is-link" type="text" placeholder="Search..." onChange={event => {setSearch(event.target.value)}}/>
                </div>
                <div className='signUps mb-6'>
                {signUps.filter((signUp) => {
                    if (signUp.party === currentParty.id && search === "") {
                        return signUp
                    } else if (signUp.party === currentParty.id && signUp.item.toLowerCase().includes(search.toLowerCase())) {
                        return signUp
                    } 
                }).map((signUp) => {
                        return (
                                <div className="signUpContainer" key={signUp.id}>
                                    <div className='signUp'>
                                        <h3 className='is-size-5 py-1'>{signUp.name}</h3>
                                        <h3 className='is-size-4'>{signUp.item}</h3>
                                    </div>
                                    <div className='mt-4'>
                                        <button className="button is-danger is-outlined py-2 px-3" onClick={() => {handleDeleteSignUp(signUp)}}>
                                            <span>Delete</span>
                                            <span class="icon is-small">
                                                <span className='has-text-weight-bold	'>X</span>
                                            </span>
                                        </button>
                                    </div>
    
                                </div>
                        )})
                    }
                </div>
            </div>
        </div>
    )
}

export default EventShowPage;
