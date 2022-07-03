import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import AdminCreate from './AdminCreate.js'
import AdminAccLogin from './AdminAccLogin.js'
import { Navigate } from 'react-router-dom'
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

const numOfAdmins = () => {
    if (admins.length > 1) {
        setAdminLimit(false)
        alert("Admin account was already created. Please login")
    } else {
        setView('createAdmin')
    }
}


//////// READ / FETCH ////////////////
const getAdmins = () => {
    axios
        .get(HEROKU_URL_useraccount)
        .then(
        (response) => setAdmins(response.data),
        (err) => console.error(err)
        )
        .catch((error) => console.error(error))
}


///////CREATE USER - new user login //////////
const createAdmin = (addAdmin) => {
    axios
        .post(HEROKU_URL_useraccount, addAdmin)
        .then((response) => {
            setAdmins([...admins, addAdmin])
            setView('login')
        })
}

// returning admin login
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
            if (response == undefined){
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
        <div>
            <button onClick={()=> numOfAdmins()}>Create Admin Account</button>
            <button onClick={()=> toggleView('login')}>Login</button>
        {view == 'login' ? <AdminAccLogin loginError={loginError} handleUpdateAdmin={handleUpdateAdmin} admins={admins}/> : ""}
        {view == 'createAdmin' ?  
            <AdminCreate createAdmin={createAdmin} setView={setView}/> : "" }
        </div>
    )
}

export default AdminLogin