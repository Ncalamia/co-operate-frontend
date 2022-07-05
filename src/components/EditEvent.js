import {useState} from 'react'

const EditEvent = (props) => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

/////////// Controls show/hide for edit party/event form ////////////
const [seeEditForm, setSeeEditForm] = useState(false)

///////// Holds the value from the edit form for party/event /////////
const [party, setParty] = useState({...props.party})

///////// Edit party/event /////////
///////////// Input from form for edit party/event ////////////////
  const handleChange = (event) => {
    setParty({...party, [event.target.name]: event.target.value})
  }

  ///////////// Form Submission for edit party/event ////////////////
  const handleSubmit = (event) => {
    event.preventDefault()
    props.handleUpdate(party)
  }

///////// Hide/Show Edit Form ///////////
const toggleEditForm = () => {
  if (seeEditForm == true) {
    setSeeEditForm(false)
  } else if (seeEditForm == false) {
    setSeeEditForm(true)
  }
}



  return(
    <div className='editparty'>
      <div className='editPartyButton'>
        <button onClick={() => {toggleEditForm()}}>Edit</button>
      </div>
      <div className='editForm'>
        {seeEditForm ? 
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
            <textarea type='text' name='notes' value={party.notes} onChange={handleChange}/>
            <button type='submit'>Submit</button>
          </form> 
          : "" }
      </div>
    </div>
  )
}

export default EditEvent