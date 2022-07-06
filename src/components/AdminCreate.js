import React, { useState } from 'react'
import axios from 'axios'
import AdminAccLogin from './AdminAccLogin'
import { Navigate, Link } from 'react-router-dom'
import LockIcon from '../Lock.jpeg'
import UserIcon from '../User.jpeg'



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
            <article className='message is-link m-3'>
                <div className='message-header mt-4'>
                    <p className='is-size-5'>Attention Admin</p>
                </div>
                <div className='message-body'>
                    <h3 className='is-size-5 pb-3'>Only 2 admin accounts allowed, once you sign up you are unable to change the username or password.</h3> 
                </div>
            </article>
                <form id="adminCreate" onSubmit={handleSubmit}>
                    <div className='field mx-3 mt-5'>
                        <label className='label' htmlFor="username">Create Username</label>
                        <div className='control has-icons-left has-icons-right'>
                            <input className='input is-info' type="text" name="username" value={admin.username} onChange={handleChange} />
                            <span class="icon is-small is-left">
                                <img className='iconCreate' src={UserIcon}/>
                            </span>
                        </div>
                    </div>
                    <div className='field mx-3 mb-5'>
                        <label className='label' htmlFor="password">Create Password</label>
                        <div className='control has-icons-left has-icons-right'>
                            <input className='input is-info' type="text" name="password" type="password" value={admin.password} onChange={handleChange} />
                            <span class="icon is-small is-left">
                                <img className='iconCreate' src={LockIcon}/>
                            </span>
                        </div>
                    </div>
                    <input className='button is-success mx-4 has-text-weight-medium' type="submit" />
                </form>
        </div>
    )
}

export default AdminCreate