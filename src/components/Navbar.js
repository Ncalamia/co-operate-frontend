import { Link } from "react-router-dom"

const Navbar = () => {


    return(
        <div className="navbar">
            <Link to="/"> Home </Link> 
            <Link to="/events"> Events </Link>
            <Link to="/updates"> Updates </Link>
            <Link to="/appreciation"> Employee Appreciation </Link> 
            <Link to="/admin"> Admin</Link> 
        </div>
    )
}

export default Navbar