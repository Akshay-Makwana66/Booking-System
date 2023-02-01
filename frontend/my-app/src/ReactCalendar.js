import React, { useState,useEffect } from "react";
import image from './gift.jpg';
import VerificationPage from "./verificationPage";
import { Link, useLocation } from 'react-router-dom';
import Calendar from "react-calendar";

import './app.css';
const ReactCalendar = () => {
  const [date, setDate] = useState(new Date());
  
    const [activeTab, setActiveTab] = useState("Home");

    const location = useLocation();

    useEffect(() => { 
        if (location.pathname === '/') {
            setActiveTab('Home')
        } else if (location.pathname === '/VerificationPage') {
            setActiveTab('NextPage')
        } 
    }, [location])

  const onChange = date => {
    setDate(date);
  };   


  return (
    <div className="a">
      <img style={{height:'50px'}}src={image} alt="demo"/>
      <h1 className="c">Pick your slot</h1>
      <h3> Our team of certified professionals determined </h3>
      <h3>to have your back throughout your recovery journey</h3>
      <h4>Select Date and Time</h4>
      <div style={{display : "flex"}}>
      <div className="b">
      <Calendar showWeekNumbers onChange={onChange} value={date} />
      </div>
      {console.log(date)}
      <div>
        <h5 className="e">{date.toString()}</h5>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
          <p className="d">1:00 PM</p>
          <p className="d">1:30 PM</p>
          <p className="d">2:00 PM</p>
          <p className="d">2:30 PM</p>
          <p className="d">3:00 PM</p>
          <p className="d">3:30 PM</p>
        </div>
      </div>
      </div>
     
      <button className="g">View all therepists</button>
      <button className="g">Call us</button>
      <button className="g">Call us</button>
                <Link to="/VerificationPage">
                    <button onClick={() => setActiveTab("VerificationPage")} >Next</button>
                </Link>
    </div>
  );
};
export default ReactCalendar;