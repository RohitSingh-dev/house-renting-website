import React from 'react';
import './sellerDashboard.css';
import { SellerNavbar } from '../../components';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  return (
    <div className='sellerDashboard'>
      <div className="sellerDashboard-left">
        <SellerNavbar />
      </div>
      <div className="sellerDashboard-right">
        <div className="sellerDashboard-right-top">
          <div className="sellerDashboard-right-top-container">
            <div className="sellerDashboard-right-top-content">
              <Link to={"/dashboard"}>
                <i class='bx bx-buildings'></i>
                <h3 className="title">All Properties</h3>
              </Link>
            </div>
            <div className="sellerDashboard-right-top-content">
              <Link to={"#"}>
                <i class='bx bx-building-house'></i>
                <h3 className="title">My Properties</h3>
              </Link>
            </div>
            <div className="sellerDashboard-right-top-content">
              <Link to={"#"}>
                <i class='bx bx-layer-plus'></i>
                <h3 className="title">Add New</h3>
              </Link>
            </div>
          </div>
        </div>
        <div className="sellerDashboard-right-bottom"></div>
      </div>
    </div>
  )
}

export default SellerDashboard