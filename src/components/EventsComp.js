// import React, { useState, useEffect } from 'react'

const EventsComp = (props) => {

    
///////////// Reads all info for each event //////////////// 
      return (
        <div>
            <h4>{props.party.title}</h4>
            <h5>When: {props.party.when}</h5>
            <h5>Time: {props.party.time}</h5>
            <h5>Where: {props.party.where}</h5>
            <h5>More Info: {props.party.notes}</h5>
        </div>
      )
    }
    
    export default EventsComp;