import React, { useState, useEffect } from 'react'

const EventSignUp = (props) => {


///////////////////////////////
//////// States ////////////////
//////////////////////////////

/////////// Initate keys and sends in value ////////////
let emptySignUp = { name: '', item: '', party: `${props.numID}`}
let [signUp, setSignUp] = useState(emptySignUp)

///////// Add sign up for event/party /////////

///////////// Input from form for new signup ////////////////
const handleChange = (event) => {
    setSignUp({ ...signUp, [event.target.name]: event.target.value })
}

///////////// Form Submission for new sign up ////////////////
const handleSubmit = (event) => {
    console.log(props.currentParty.id)
    event.preventDefault()
    console.log(signUp)
    setSignUp({ name: '', item: '', party: `${props.numID}`})
    props.handleCreateSignUp(signUp)
}



return (
    <div className='newSignUpForm'>
        <form onSubmit={handleSubmit}>
            <div className='field'>
                <label className="label" htmlFor="name">Name </label>
                <input className='input is-link' type="text" name="name" value={signUp.name} onChange={handleChange}/>
            </div>
            <div className='field'>
                <br />
                <label className="label" htmlFor="item">Item </label>
                <input className='input is-link' type="text" name="item" value={signUp.item} onChange={handleChange}/>
            </div>
            <div className='newSignUpDiv'>
                <input type="hidden" name="id" value={props.numID}/>
                <input className='button is-success is-outlined is-light mt-4 mb-6' type="submit"/>
            </div>
        </form>
    </div>
)
}

export default EventSignUp


