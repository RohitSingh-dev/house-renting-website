import React, { useState } from 'react';
import './homepageHeader.css';
import RegisterForm from '../registerForm/RegisterForm';

const HomepageHeader = () => {
  const [isOpen, setIsOpen]= useState(false);
  function togglePopUp(){
    setIsOpen(!isOpen);
  };
  return (
    <div className='homepageHeader'>
        <div className="homepageHeader-left"><a href='/'><h1>Ren<span>tify</span></h1></a></div>
        <div className="homepageHeader-right">
            <a href='/'><i class='bx bx-home-alt'></i></a>
            <i class='bx bx-info-circle'></i>
            <button onClick={togglePopUp}><i class='bx bx-user'></i></button>
            {isOpen? <RegisterForm toggle={togglePopUp}/> : null}
        </div>
    </div>
    
  )
}

export default HomepageHeader