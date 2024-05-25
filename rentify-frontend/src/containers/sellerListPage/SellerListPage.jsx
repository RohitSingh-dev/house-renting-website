import React from 'react';
import './sellerListPage.css';
import SellerNavbar from '../../components/sellerNavbar/SellerNavbar';

const SellerListPage = () => {
  return (
    <div className='sellerListPage'>
      <div className="sellerListPage-left">
        <SellerNavbar />
      </div>
      <div className="sellerListPage-right">
        <div className="sellerListPage-right-top"><h1>MY LIST</h1></div>
        <div className="sellerListPage-right-bottom"></div>
      </div>
    </div>
  )
}

export default SellerListPage