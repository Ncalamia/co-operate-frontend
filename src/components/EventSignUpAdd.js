import React, { useState, useEffect } from 'react'

const EventSignUp = (props) => {


///////////////////////////////
//////// States ////////////////
//////////////////////////////

let emptySignUp = { name: '', item: '', party: `${props.currentParty.id}`}

let [signUp, setSignUp] = useState(emptySignUp)

///////// Add sign up for event/party /////////

const handleChange = (event) => {
    setSignUp({ ...signUp, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
    event.preventDefault()
    console.log(signUp)
    setSignUp({ name: '', item: '', party: `${props.currentParty.id}`})
    props.handleCreateSignUp(signUp)
}



return (
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name: </label>
            <input type="text" name="name" value={signUp.name} onChange={handleChange}/>
            <br />
            <br />
            <label htmlFor="item">Item: </label>
            <input type="text" name="item" value={signUp.item} onChange={handleChange}/>
            <br />
            <br />
            <input type="submit"/>
        </form>
        </>
    )
}

export default EventSignUp


