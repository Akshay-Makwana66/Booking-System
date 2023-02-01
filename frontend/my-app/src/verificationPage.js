import React, { useState } from 'react';
import image from './gift.jpg';
import './Verification.css'
function VerificationPage(){
    const [phone , setPhone] = useState('');

    return <div>
        <img style={{height:'50px'}}src={image} alt="demo"/>
        <h3> Our team of certified professionals determined </h3>
      <h3>to have your back throughout your recovery journey</h3>
      <label htmlFor='PhoneNumber' style={{display:'block'}}>Phone Number</label>
    <input type='number'  placeholder='enter mobile number'  />
      <button>Send otp</button>
      <h3>OTP</h3>
      <div className='k'>
      <div className='otp'></div>
      <div className='otp'></div>
      <div className='otp'></div>
      <div className='otp'></div>
      </div>
      <h4>Consultation type</h4>
      <div>
      <p className='l'>Online</p>
      <p className='l'>In-Person</p>
      </div>
      

      <button className="g">View all therepists</button>
      <button className="g">Call us</button>
      <button className="g">Call us</button>
    </div>
}

export default VerificationPage;