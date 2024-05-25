import './App.css';
import Homepage from './containers/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SellerDashboard from './containers/sellerDashboard/SellerDashboard';
import ProfilePage from './containers/profilePage/ProfilePage';
import SellerListPage from './containers/sellerListPage/SellerListPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/dashboard' element={<SellerDashboard />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/mylist' element={<SellerListPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
