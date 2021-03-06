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
    setSeeEditForm(false)
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
    <div className='editParty'>
      <div className='editPartyButton mt-3'>
        <button className='button is-link is-outlined is-light py-2 px-4' onClick={() => {toggleEditForm()}}>Edit</button>
      </div>
      <div className='editForm my-4'>
        {seeEditForm ? 
          <form onSubmit={handleSubmit}>
            <div className='field'>
              <label className="label" htmlFor="title">Event: </label>
              <div className='control'>
                <input className='input' type='text' name='title' value={party.title} onChange={handleChange}/>
              </div>
            </div>
            <div className='field'>
              <label className="label" htmlFor="when">When: </label>
              <div className='control'>
                <input className='input' type='text' name='when' value={party.when} onChange={handleChange}/>
              </div>
            </div>
            <div className='field'>
              <label className="label" htmlFor="time">Time: </label>
              <div className='control'>
                <input className='input' type='text' name='time' value={party.time} onChange={handleChange}/>
              </div>
            </div>
            <div className='field'>
              <label className="label" htmlFor="where">Where: </label>
              <div className='control'>
                <input className='input' type='text' name='where' value={party.where} onChange={handleChange}/>
              </div>
            </div>
            <div className='field'>
              <label className="label" htmlFor="notes">More Info: </label>
              <div className='control'>
                <textarea className='input' type='text' name='notes' value={party.notes} onChange={handleChange}/>
              </div>
            </div>
            <button className='button is-success is-outlined is-light has-text-weight-semibold px-4 mt-4 mb-4' type='submit'>Submit</button>
          </form> 
          : "" }
      </div>
    </div>
  )
}

export default EditEvent