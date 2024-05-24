import React from 'react';
import './homepage.css';
import HomepageHeader from '../../components/homepageHeader/HomepageHeader';
import image from '../../assets/homepage-image.jpg';

const Homepage = () => {
  return (
    <div className='homepage'>
        <div className="homepage-top"><HomepageHeader /></div>
        <div className="homepage-bottom">
            <div className="homepage-bottom-left">
              <h1>Welcome to <span>Rentify</span></h1>
              <p>Simplify the renting search</p>
              <button>Log In</button>
              </div>
            <div className="homepage-bottom-right">
              <img src={image} alt='pic'></img>
            </div>
        </div>
    </div>
  )
}

export default Homepage