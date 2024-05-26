import './App.css';
import Homepage from './containers/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SellerDashboard from './containers/sellerDashboard/SellerDashboard';
import ProfilePage from './containers/profilePage/ProfilePage';
import SellerListPage from './containers/sellerListPage/SellerListPage';
import ProfilePageEdit from './containers/profilePageEdit/ProfilePageEdit';
import BuyerDashboard from './containers/buyerDashboard/BuyerDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/dashboard/seller' element={<SellerDashboard />}/>
        <Route path='/dashboard/buyer' element={<BuyerDashboard />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/profile/edit' element={<ProfilePageEdit />}/>
        <Route path='/mylist' element={<SellerListPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
