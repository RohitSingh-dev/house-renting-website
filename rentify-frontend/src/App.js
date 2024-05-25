import './App.css';
import Homepage from './containers/homepage/Homepage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SellerDashboard from './containers/sellerDashboard/SellerDashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/dashboard' element={<SellerDashboard />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
