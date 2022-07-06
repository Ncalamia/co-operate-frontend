import React, { useState, useEffect } from 'react'


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
    setSeeNewForm(false)
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
    <div className='newParty mx-4 my-5'>
      <div className='newPartyButton'>
        <button className='button is-info has-text-weight-semibold is-size-5 mb-4 px-5 mb-4' onClick={() => {toggleNewForm()}}>Add New Event</button>
      </div>
      <div className='newPartyForm'>
        {seeNewForm ? 
        <form onSubmit={handleSubmit}>
          <div className='field'>
            <label className="label" htmlFor="title">Event</label>
            <input className='input is-info' type="text" name="title" value={party.title} onChange={handleChange}/>
          </div>
          <div className='field'>
            <label className="label" htmlFor="when">When </label>
            <input className='input is-info' type="text" name="when" value={party.when} onChange={handleChange}/>
          </div>
          <div className='field'>
            <label className="label" htmlFor="time">Time </label>
            <input className='input is-info' type="text" name="time" value={party.time} onChange={handleChange}/>
          </div>
          <div className='field'>
            <label className="label" htmlFor="where">Where </label>
            <input className='input is-info' type="text" name="where" value={party.where} onChange={handleChange}/>
          </div>
          <div className='field'>
            <label className="label" htmlFor="notes">More Info </label>
            <textarea className='input is-info' type="text" name="notes" value={party.notes} onChange={handleChange}></textarea>
          </div>
          <input className='button is-success is-outlined is-light has-text-weight-semibold px-4 mt-4 mb-6' type="submit"/>
        </form>
      : "" }
    </div>
  </div>
  )
}

export default AddEvent;