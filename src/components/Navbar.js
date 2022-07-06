import { Link } from "react-router-dom"
import React, { useState, useEffect } from 'react'
import pic from '../teamwork-people.jpeg'
// import 'bulma/css/bulma.min.css';


////////// Navbar ////////////
const Navbar = () => {

/////////// Controls show/hide for Navbar ////////////
const [seeNavbar, setSeeNavbar] = useState(false)


///////// Hide/Show Navbar ///////////
const toggleNavbar = () => {
    if (seeNavbar == true) {
        setSeeNavbar(false)
    } else if (seeNavbar == false) {
        setSeeNavbar(true)
    }
}

    return(
    <>
{/* Mobile (smaller screen view) */}
        <nav className="navbar">
{/* Nav Pic and Title */}
            <div className="navbar-brand pl-2">
                <Link to="/" className="navbar-item">
                    <img src={pic} alt="site logo" className="" width="30"/>
                    <h1 id="navbar-title" className="pl-3 has-text-weight-bold">Co-Operate</h1> 
                </Link>
{/* Hamburger navbar (mobile) */}
                <button onClick={() => {toggleNavbar()}}className="navbar-burger">
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                    <span className="hamburger"></span>
                </button> 
            </div>
{/* If seeNavbar is true, show the navbar (mobile), if false, don't show */}
{/* Nav Buttons */}
            {seeNavbar ?
            <div className="navbar-menu is-active" id="nav-links">
                <div className="navbar-start">
                    <Link to="/events" id="eventsButton" className="navbar-item has-text-weight-medium is-size-5 m-4 px-4 button is-danger is-light is-outlined"> Events </Link>
                    <Link to="/updates" id="updatesButton"  className="navbar-item has-text-weight-medium is-size-5 m-4 px-4 button is-info is-light is-outlined"> Updates </Link>
                </div>
{/* Nav Admin button */}
                <div className="navbar-end">
                    <Link to="/admin" id="adminButton" className="navbar-item has-text-weight-medium my-2 m-4 px-4 button is-size-5  is-primary is-light is-outlined">Admin</Link>
                </div> 
            </div> : "" }
            {!seeNavbar ?
        <div className="welcomeDiv">
            <button className="welcomeButton button is-ghost has-text-primary py-1" onClick={() => {toggleNavbar()}}> Click here to get started!
            </button>
        </div> : ""}
        </nav>
    </>
    )
}

export default Navbar