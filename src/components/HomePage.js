import React from 'react'
import HomeImg from '../teamwork-people.jpeg'

////////// Home page ////////////
const HomePage = () => {
  return (
    <div className="homePage">
      <h1 className='title is-size-2 is-italic has-text-centered pt-6'>Co-Operate</h1>
      <figure id="homeImgDiv" className="image container is-256x256">
        <img className='homepic has-image-centered' src={HomeImg} alt="site logo"/>
      </figure>
    </div>
  )
}

export default HomePage