import './App.css';
import Homepage from './containers/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './containers/profilePage/ProfilePage';
import SellerListPage from './containers/sellerListPage/SellerListPage';
import ProfilePageEdit from './containers/profilePageEdit/ProfilePageEdit';
import Dashboard from './containers/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/dashboard' element={<Dashboard />}/>
        <Route path='/profile' element={<ProfilePage />}/>
        <Route path='/profile/edit' element={<ProfilePageEdit />}/>
        <Route path='/mylist' element={<SellerListPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
