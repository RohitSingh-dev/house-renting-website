import React from 'react';
import './buyerNavbar.css';
import { Link } from 'react-router-dom';

const BuyerNavbar = () => {
  return (
    <div className='buyerNavbar'>
      <div className="buyerNavbar-top">
        <Link to={"/dashboard/buyer"}><h1>Ren<span>tify</span></h1></Link>
      </div>
      <div className="buyerNavbar-bottom">
        <Link to={"/dashboard/buyer"}><h3>Dashboard</h3></Link>
        <Link to={"/profile"}><h3>Profile</h3></Link>
        <Link to={"/"}><h3>Log Out</h3></Link>
      </div>
    </div>
  )
}

export default BuyerNavbar