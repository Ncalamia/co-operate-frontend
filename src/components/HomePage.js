import React from 'react'
import pic from '../teamwork-people.jpeg'

////////// Home page ////////////
const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className='title is-size-3'>Co-Operate</h1>
      <img className='homepic' src={pic}/>
    </div>
  )
}

export default HomePage