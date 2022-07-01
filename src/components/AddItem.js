// import React, { useState, useEffect } from 'react'

const AddItem = (props) => {

///////////////////////////////
//////// States ////////////////
//////////////////////////////



  return (
    <div>
        <h4>Name: {props.employee.name}</h4>
        <h5>Item: {props.employee.item}</h5>
        <img src={props.employee.image}/>
    </div>
  )
}

export default AddItem;