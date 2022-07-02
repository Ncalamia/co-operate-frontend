import {useState} from 'react'

const EditEvent = (props) => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

  const [party, setParty] = useState({...props.party})

  const handleChange = (event) => {
    setParty({...party, [event.target.name]: event.target.value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(party)
  }

  return(
    <>
      <details>
        <summary>Edit Event</summary>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Event: </label>
          <input type='text' name='title' value={party.title} onChange={handleChange}/>
          <br/>
          <br/>
          <label htmlFor="when">When: </label>
          <input type='text' name='when' value={party.when} onChange={handleChange}/>
          <br/>
          <br/>
          <label htmlFor="time">Time: </label>
          <input type='text' name='time' value={party.time} onChange={handleChange}/>
          <br/>
          <br/>
          <label htmlFor="where">Where: </label>
          <input type='text' name='where' value={party.where} onChange={handleChange}/>
          <br/>
          <br/>
          <label htmlFor="notes">More Info: </label>
          <input type='text' name='notes' value={party.notes} onChange={handleChange}/>
          <button type='submit'>Submit</button>
        </form>
      </details>
    </>
  )
}

export default EditEvent