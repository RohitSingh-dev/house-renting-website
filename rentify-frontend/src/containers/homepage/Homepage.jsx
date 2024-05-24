import React, { useState } from 'react';
import './homepage.css';
import HomepageHeader from '../../components/homepageHeader/HomepageHeader';
import image from '../../assets/homepage-image.jpg';
import LoginForm from '../../components/loginForm/LoginForm';

const Homepage = () => {
  const [isOpen, setIsOpen]= useState(false);
  function togglePopUp(){
    setIsOpen(!isOpen);
  };
  return (
    <div className='homepage'>
        <div className="homepage-top"><HomepageHeader /></div>
        <div className="homepage-bottom">
            <div className="homepage-bottom-left">
              <h1>Welcome to Rentify</h1>
              <p>Simplify the renting search</p>
              <button onClick={togglePopUp}>Log In</button>
              {isOpen? <LoginForm toggle={togglePopUp}/> : null}
              </div>
            <div className="homepage-bottom-right">
              <img src={image} alt='pic'></img>
            </div>
        </div>
    </div>
  )
}

export default Homepage