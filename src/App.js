import './App.css';
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AddItem from './components/AddItem';

const App = () => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////

let [employees, setEmployees] = useState([])



///////////////////////////////
//////// CRUD ////////////////
//////////////////////////////

///////// URLs ///////////////
const LOCAL_URL = 'http://localhost:8000/api/employees'

const HEROKU_URL = 'https://co-operate-backend.herokuapp.com/api/employees'

//////// READ / FETCH ////////////////
const getEmployees = () => {
  axios
    .get(HEROKU_URL)
    .then(
      (response) => setEmployees(response.data),
      (err) => console.error(err)
    )
    .catch((error) => console.error(error))
 }
 
//////// CREATE //////////////


//////// UPDATE //////////////


//////// DELETE //////////////






//////// PAGE LOAD //////////////

 useEffect(() => {
  getEmployees()
 }, [])
 


  return (
    <div>
      <div className="employees">
 {employees.map((employee) => {
   return (
     <div className="employee" key={employee.id}>
       <AddItem employee={employee}/>
     </div>
   )
 })}
</div>
    </div>
  )
}

export default App;
