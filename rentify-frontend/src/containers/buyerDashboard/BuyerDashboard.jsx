import React from 'react';
import './buyerDashboard.css';
import { BuyerNavbar } from '../../components';
import { Link } from 'react-router-dom';

const BuyerDashboard = () => {
  return (
    <div className='buyerDashboard'>
      <div className="buyerDashboard-left">
        <BuyerNavbar />
      </div>
      <div className="buyerDashboard-right">
        <div className="buyerDashboard-right-top">
          <div className="buyerDashboard-right-top-content">
            <Link to={"/dashboard/buyer"}>
              <i class='bx bx-buildings'></i>
              <h3 className="title">All Properties</h3>
            </Link>
          </div>
          <div className="buyerDashboard-right-top-content">
            <Link to={"/profile"}>
              <i class='bx bx-user-pin'></i>
              <h3 className="title">My Profile</h3>
            </Link>
          </div>
        </div>
        <div className="buyerDashboard-right-bottom"></div>
      </div>
    </div>
  )
}

export default BuyerDashboard