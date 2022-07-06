import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AdminCreate from './AdminCreate.js'
import AdminAccLogin from './AdminAccLogin.js'
import { Link } from 'react-router-dom'


const AdminLogin = () => {


///////////////////////////////
//////// States ////////////////
//////////////////////////////

const [admins, setAdmins] = useState([])
const [adminLimit, setAdminLimit] = useState(false)
const [view, setView] = useState("loginMain")
const [adminLoggedIn, setAdminLoggedIn] = useState(false)
const [loginError, setLoginError] = useState(false)


///////// Functions ///////////////

///////// Hide/Show Admin Login/Sign Up ///////////////
const toggleView = (param) => {
    setView(param)
}

///////// URLs ///////////////
const LOCAL_URL_useraccounts = 'http://localhost:8000/api/useraccount'

const HEROKU_URL_useraccount = 'https://co-operate-backend.herokuapp.com/api/useraccount'

const HEROKU_URL_useraccount_Login = 'https://co-operate-backend.herokuapp.com/api/useraccount/login'


////// Only allows 2 admin accounts //////////////
const numOfAdmins = () => {
    if (admins.length > 1) {
        setAdminLimit(false)
        alert("Admin accounts were already created. Please login")
    } else {
        setView('createAdmin')
    }
}


//////// READ / FETCH admins ////////////////
const getAdmins = () => {
    axios
        .get(HEROKU_URL_useraccount)
        .then(
        (response) => setAdmins(response.data),
        (err) => console.error(err)
        )
        .catch((error) => console.error(error))
}


///////CREATE new admin //////////
const createAdmin = (addAdmin) => {
    console.log(addAdmin)
    axios
        .post(HEROKU_URL_useraccount, addAdmin)
        .then((response) => {
            setAdmins([...admins, addAdmin])
            setView('login')
        })
}

/////// Returning admin, checks if username & password matches DB //////////
const handleUpdateAdmin = (adminAccount) => {
    console.log(adminAccount)
    axios
        .put(HEROKU_URL_useraccount_Login, adminAccount)
        .catch((error) => {
            if (error) {
                console.log("error")
                setAdminLoggedIn(false)
                setLoginError(true)
            }
        })
        .then((response) => {
            if (response === undefined){
                console.log("no match")
                setAdminLoggedIn(false)
                setLoginError(true)
            } else  {
                console.log("match")
                setAdminLoggedIn(true)
                setLoginError(false)
            } 
        })
}


//////// PAGE LOAD //////////////
useEffect(() => {
    getAdmins()
}, [])


    return (
        <div className='adminPage has-background-success-light pt-3'>
            <div className='adminButton m-3'>
                <button className='button is-size-5 m-4 px-4 is-info has-text-weight-bold' onClick={()=> numOfAdmins()}>Create Admin Account</button>
                <button className='button is-size-5 m-4 px-4 is-primary has-text-weight-bold' onClick={()=> toggleView('login')}>Login</button>
            </div>
        {view === 'login' ? <AdminAccLogin loginError={loginError} handleUpdateAdmin={handleUpdateAdmin} admins={admins}/> : ""}
        {view === 'createAdmin' ?  
            <AdminCreate createAdmin={createAdmin} setView={setView}/> : "" }
        {adminLoggedIn ? 
            <article class="message is-info mt-5 m-3">
                <div class="message-header">
                    <p className='is-size-4'>Admin Access</p>
                </div>
                <div class="message-body">
                    <Link className='is-size-5' to={'/eventsAdmin'}>Events</Link>                </div>
            </article> : "" }
        </div>
    )
}

export default AdminLogin