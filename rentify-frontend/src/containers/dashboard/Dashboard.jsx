import React, { useContext } from 'react';
import './dashboard.css';
import { UserContext } from '../../context/UserContext';
import SellerDashboard from '../sellerDashboard/SellerDashboard';
import BuyerDashboard from '../buyerDashboard/BuyerDashboard';

const Dashboard = () => {
    const user = useContext(UserContext);
  return (
    <div>
        {user.currentUser?.userRole === "SELLER"? <SellerDashboard /> : <BuyerDashboard />}
    </div>
  )
}

export default Dashboard