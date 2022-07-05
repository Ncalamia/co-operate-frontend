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
                <label htmlFor="name">Name: </label>
                <input type="text" name="name" value={signUp.name} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="item">Item: </label>
                <input type="text" name="item" value={signUp.item} onChange={handleChange}/>
                <br />
                <br />
                <label htmlFor="id">id: </label>
                <input type="hidden" name="id" value={props.numID}/>
                <input type="submit"/>
        </form>
    </div>
)
}

export default EventSignUp


