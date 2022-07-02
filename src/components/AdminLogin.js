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


///////// Functions ///////////////


///////// URLs ///////////////
const LOCAL_URL_useraccounts = 'http://localhost:8000/api/useraccount'

const HEROKU_URL_useraccount = 'https://co-operate-backend.herokuapp.com/api/useraccount'

const numOfAdmins = () => {
    console.log(admins)
    if (admins.length > 1) {
        setAdminLimit(false)
        alert("Admin account was already created. Please login")
    } else {
        setAdminLimit(true)
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
            console.log(response)
            // getUsers()
            setAdmins([...admins, response.data])
        })
}

// returning admin login
const handleUpdateAdmin = (adminAccount) => {
    axios
        .put(HEROKU_URL_useraccount, adminAccount)
        .catch((error) => {
            if (error) {
                alert("Username or password does not match records")
            }
        })
        .then((response) => {
            console.log(adminAccount)
            console.log(response.data)
    })
}


//////// PAGE LOAD //////////////

useEffect(() => {
    getAdmins()
}, [])


    return (
        <div>
            <button onClick={()=> numOfAdmins()}>Create Admin Account</button>
            <button><Link to="/admin/login">Login</Link></button>
            <div>AdminLogin</div>
        {adminLimit ?  
            <AdminCreate createAdmin={createAdmin}/> : "" }
        </div>
    )
}

export default AdminLogin