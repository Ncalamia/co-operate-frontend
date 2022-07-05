import React, { useState } from 'react'
import axios from 'axios'
import AdminAccLogin from './AdminAccLogin'
import { Navigate, Link } from 'react-router-dom'


const AdminCreate = (props) => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

/////////// Sends in empty " " for each value to initate key ////////////
let emptyAdmin = { username: '', password: '' }
const [admin, setAdmin] = useState(emptyAdmin)

///////// Add new Admin /////////
///////////// Input from form for new admin ////////////////
const handleChange = (event) => {
    setAdmin({ ...admin, [event.target.name]: event.target.value })
}

///////////// Form Submission for new admin ////////////////
const handleSubmit = (event) => {
    event.preventDefault()
    props.createAdmin(admin)
    setAdmin({ username: '', password: '' })
    props.setView('login')
}


    return (
        <div>
            <h3>Only 2 admin accounts allowed, once you sign up you are unable to change the username or password.</h3> 
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
        </div>
    )
}

export default AdminCreate