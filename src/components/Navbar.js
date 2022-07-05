import { Link } from "react-router-dom"
import React from "react"
import pic from '../teamwork-people.jpeg'
import 'bulma/css/bulma.min.css';


////////// Navbar ////////////
const Navbar = () => {
    return(
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={pic}/> 
                </Link> 
            </div>
            <div class="navbar-start">
                <Link to="/events" className="navbar-item"> Events </Link>
                <Link to="/updates" className="navbar-item"> Updates </Link>
                <Link to="/appreciation" className="navbar-item"> Employee Appreciation </Link> 
                <Link to="/admin" className="navbar-item"> Admin</Link>
            </div>
        </nav>
    )
}

export default Navbar