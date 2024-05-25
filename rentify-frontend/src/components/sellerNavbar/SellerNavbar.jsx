import React from 'react';
import './sellerNavbar.css';
import { Link } from 'react-router-dom';

const SellerNavbar = () => {
  return (
    <div className='sellerNavbar'>
      <div className="sellerNavbar-top">
        <Link to={"/dashboard"}><h1>Ren<span>tify</span></h1></Link>
      </div>
      <div className="sellerNavbar-bottom">
        <Link to={"/dashboard"}><h3>Dashboard</h3></Link>
        <Link to={"/profile"}><h3>Profile</h3></Link>
        <Link to={"/mylist"}><h3>My List</h3></Link>
        <Link to={"/"}><h3>Log Out</h3></Link>
      </div>
    </div>
  )
}

export default SellerNavbar