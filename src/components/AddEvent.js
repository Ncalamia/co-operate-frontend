import React, { useState, useEffect } from 'react'

const AddEvent = (props) => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

let emptyParty = { title: '', when: '', time: '', where: '', notes:'' }
const [party, setParty] = useState(emptyParty)


const handleChange = (event) => {
    setParty({ ...party, [event.target.name]: event.target.value })
}
  
const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(party)
    setParty({ title: '', when: '', time: '', where: '', notes:'' })
}


  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Event:</label>
        <input type="text" name="title" value={party.title} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="when">When: </label>
        <input type="text" name="when" value={party.when} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="time">Time: </label>
        <input type="text" name="time" value={party.time} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="where">Where: </label>
        <input type="text" name="where" value={party.where} onChange={handleChange}/>
        <br />
        <br />
        <label htmlFor="notes">More Info: </label>
        <input type="text" name="notes" value={party.notes} onChange={handleChange}/>
        <input type="submit"/>
      </form>
    </>
  )
}

export default AddEvent;