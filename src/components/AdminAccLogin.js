import React, { useState } from 'react'


const AdminAccLogin = (props) => {


///////////////////////////////
//////// States ////////////////
//////////////////////////////

const [loggedin, setLoggedIn] = useState()
const [adminSignIn, setAdminSignIn] = useState()

//////////// Functions ////////////////

const handleChange = (event) => {
    setAdminSignIn({ ...adminSignIn, [event.target.name]: event.target.value })
}


const handleSubmit = (event) => {
    event.preventDefault()
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
        </div>
    )
}

export default AdminAccLogin