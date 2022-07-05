import React, { useState } from 'react'


const AdminAccLogin = (props) => {


///////////////////////////////
//////// States ////////////////
//////////////////////////////

///////// Holds the value from the admin login form /////////
const [adminSignIn, setAdminSignIn] = useState({...props.adminSignIn})

///////// Admin login /////////
///////////// Input from form for admin login ////////////////
const handleChange = (event) => {
    setAdminSignIn({ ...adminSignIn, [event.target.name]: event.target.value })
}

///////////// Form Submission for admin login ////////////////
const handleSubmit = (event) => {
    event.preventDefault()
    console.log(adminSignIn)
    props.handleUpdateAdmin(adminSignIn)
}


    return (
        <div>
            <div>AdminAccLogin</div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={adminSignIn.username} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input name="password" value={adminSignIn.password} onChange={handleChange} type="password" />
                <br />
                <br />
                <input type="submit" />
            </form>
            {props.loginError ? <div>
                <h3>Username or password is incorrent. Please try again.</h3>
            </div> : ""}
            
        </div>
    )
}

export default AdminAccLogin