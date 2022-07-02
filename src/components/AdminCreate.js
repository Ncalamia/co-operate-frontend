import React, { useState } from 'react'
import axios from 'axios'
import AdminAccLogin from './AdminAccLogin'
import { Navigate } from 'react-router-dom'



const AdminCreate = (props) => {


///////////////////////////////
//////// States ////////////////
//////////////////////////////
let emptyAdmin = { username: '', password: '' }

const [admin, setAdmin] = useState(emptyAdmin)

const [goToLogin, setGoToLogin] = useState(false)


///////// Functions ///////////////

const handleChange = (event) => {
    setAdmin({ ...admin, [event.target.name]: event.target.value })
}

const handleSubmit = (event) => {
    event.preventDefault()
    props.createAdmin(admin)
    setAdmin({ username: '', password: '' })
    setGoToLogin(true)
}




    return (
        <div>
            <h1>Only 1 admin account allowed, once you sign up you are unable to change the username or password.</h1> 
            <h1>Sign up below</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" name="username" value={admin.username} onChange={handleChange} />
                <br />
                <br />
                <label htmlFor="password">Password: </label>
                <input name="password" value={admin.password} onChange={handleChange} type= "password" />
                <br />
                <br />
                <input type="submit" />
            </form> 
            {goToLogin ? <Navigate to="/admin/login"/> : ""}
        </div>
    )
}

export default AdminCreate