// import React, { useState, useEffect } from 'react'

const EventsComp = (props) => {

    
///////////// Reads all info for each event //////////////// 
      return (
        <div>
            <h4 className="is-size-4 has-text-centered has-text-weight-semibold mb-5">{props.party.title}</h4>
            <div className="info">
              <h5 className="is-size-6 has-text-centered has-text-weight-bold mb-3 is-uppercase">When:</h5> 
              <h5 className="is-size-6 has-text-centered has-text-weight-medium mb-3 ml-2">{props.party.when}</h5>
            </div>
            <div className="info">
              <h5 className="is-size-6 has-text-centered has-text-weight-bold mb-3 is-uppercase">Time:</h5> 
              <h5 className="is-size-6 has-text-centered has-text-weight-medium mb-3 ml-3">
              {props.party.time}</h5>
            </div>
            <div className="info">
              <h5 className="is-size-6 has-text-centered has-text-weight-bold mb-3 is-uppercase">Where:</h5> 
              <h5 className="is-size-6 has-text-centered has-text-weight-medium mb-3 ml-3">
              {props.party.where}</h5>
            </div>
            <div className="info">
              <h5 className="is-size-6 has-text-left has-text-weight-bold mb-3 is-uppercase mr-2">More Info:</h5> 
              <h5 className="is-size-6 has-text-left has-text-weight-medium mb-3">
              {props.party.notes}</h5>
            </div>
        </div>
      )
    }
    
    export default EventsComp;