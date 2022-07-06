import React, { useState } from 'react'
import LockIconLogin from '../Lock.jpeg'
import UserIconLogin from '../User.jpeg'


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
            <form id="loginAdmin" onSubmit={handleSubmit}>
                <div className='field mx-3 mt-5'>
                    <label className='label' htmlFor="username">Username </label>
                    <div className='control has-icons-left has-icons-right'>
                        <input className='input is-link' type="text" name="username" value={adminSignIn.username} onChange={handleChange} />
                        <span class="icon is-small is-left">
                            <img className='iconCreate' src={UserIconLogin} alt="user icon"/>
                        </span>
                    </div>
                </div>
{/* Login Error not true - display normal */}
{!props.loginError ?
                <div className='field mx-3 mb-5'>
                    <label className='label' htmlFor="password">Password </label>
                    <div className='control has-icons-left has-icons-right'>
                        <input className='input is-link' name="password" value={adminSignIn.password} onChange={handleChange} type="password" />
                        <span class="icon is-small is-left">
                            <img className='iconCreate' src={LockIconLogin} alt="password icon"/>
                        </span>
                    </div> 
                </div> : 
//  Login Error true - make input red and display message
                <div className='field mx-3 mb-5'>
                    <label className='label' htmlFor="password">Password: </label>                   
                    <div className='control has-icons-left has-icons-right'>
                        <input className='input is-danger' name="password" value={adminSignIn.password} onChange={handleChange} type="password" />
                        <span class="icon is-small is-left">
                            <img className='iconCreate' src={LockIcon} alt="password icon"/>
                        </span>
                    </div>
                    <h3 className='help is-danger'>Username or password is incorrent.</h3>
                </div> }
                <input className='button is-success mx-4 has-text-weight-medium' type="submit" />
            </form>
        </div>
    )
}

export default AdminAccLogin