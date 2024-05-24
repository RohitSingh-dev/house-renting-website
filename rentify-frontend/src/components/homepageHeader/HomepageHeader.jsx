import React from 'react';
import './homepageHeader.css';

const HomepageHeader = () => {
  return (
    <div className='homepageHeader'>
        <div className="homepageHeader-left"><h1>Ren<span>tify</span></h1></div>
        <div className="homepageHeader-right">
            <i class='bx bx-home-alt'></i>
            <i class='bx bx-info-circle'></i>
            <i class='bx bx-user'></i>
        </div>
    </div>
    
  )
}

export default HomepageHeader