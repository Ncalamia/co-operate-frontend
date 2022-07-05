import React, { useState, useEffect } from 'react'
import 'bulma/sass/base/_all.sass';


const AddEvent = (props) => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

/////////// Controls show/hide for new party/event form ////////////
const [seeNewForm, setSeeNewForm] = useState(false)

/////////// Sends in empty " " for each value to initate key ////////////
let emptyParty = { title: '', when: '', time: '', where: '', notes:'' }
const [party, setParty] = useState(emptyParty)

///////// Add party/event /////////

///////////// Input from form for new party/event ////////////////
const handleChange = (event) => {
    setParty({ ...party, [event.target.name]: event.target.value })
}
///////////// Form Submission for new party/event ////////////////
const handleSubmit = (event) => {
    event.preventDefault()
    props.handleCreate(party)
    setParty({ title: '', when: '', time: '', where: '', notes:'' })
}


///////// Hide/Show New event/party Form ///////////
const toggleNewForm = () => {
  if (seeNewForm == true) {
    setSeeNewForm(false)
  } else if (seeNewForm == false) {
    setSeeNewForm(true)
  }
}

  return (
    <div className='newParty'>
      <div className='newPartyButton'>
        <button onClick={() => {toggleNewForm()}}>New</button>
      </div>
      <div className='newForm'>
        {seeNewForm ? 
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
        <textarea type="text" name="notes" value={party.notes} onChange={handleChange}></textarea>
        <input type="submit"/>
      </form>
      : "" }
    </div>
  </div>
  )
}

export default AddEvent;