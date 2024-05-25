import React, { useState } from 'react';
import './sellerDashboard.css';
import { PropertyForm, SellerNavbar } from '../../components';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  const [isOpen, setIsOpen]= useState(false);
  function togglePopUp(){
    setIsOpen(!isOpen);
  };
  return (
    <div className='sellerDashboard'>
      <div className="sellerDashboard-left">
        <SellerNavbar />
      </div>
      <div className="sellerDashboard-right">
        <div className="sellerDashboard-right-top">
          <div className="sellerDashboard-right-top-content">
            <Link to={"/dashboard"}>
              <i class='bx bx-buildings'></i>
              <h3 className="title">All Properties</h3>
            </Link>
          </div>
          <div className="sellerDashboard-right-top-content">
            <Link to={"/mylist"}>
              <i class='bx bx-building-house'></i>
              <h3 className="title">My Properties</h3>
            </Link>
          </div>
          <div className="sellerDashboard-right-top-content">
            <button onClick={togglePopUp}>
              <i class='bx bx-layer-plus'></i>
              <h3 className="title">Add New</h3>
            </button>
            {isOpen? <PropertyForm toggle={togglePopUp}/> : null}
          </div>
        </div>
        <div className="sellerDashboard-right-bottom"></div>
      </div>
    </div>
  )
}

export default SellerDashboard