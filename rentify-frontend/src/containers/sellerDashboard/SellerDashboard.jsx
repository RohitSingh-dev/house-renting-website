import React, { useState, useEffect} from 'react';
import './sellerDashboard.css';
import { PropertyForm, SellerNavbar } from '../../components';
import { Link } from 'react-router-dom';

const SellerDashboard = () => {
  const [property, setProperty]= useState([]);
  const [loading, setLoading]= useState(false);
  
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/property/all",{
        method: "GET",
      }).then(res => res.json()).then(json => {console.log(json); setProperty(json.propertyResponses);}).catch(err => {console.log(err); setLoading(false)});
    }
  }, [])

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
            <Link to={"/dashboard/seller"}>
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
        <div className="sellerDashboard-right-bottom">
          <table className='sellerDashboard-right-bottom-table'>
            <thead className='sellerDashboard-right-bottom-table-head'>
              <tr>
                  <th>Location</th>
                  <th>Area</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody className='sellerDashboard-right-bottom-table-body'>
              {
                property?.map((res,index) => {
                  return <tr key={index}>
                    <td>{res.location}</td>
                    <td>{res.area}</td>
                    <td><Link to={"#"}><button>View Property</button></Link></td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default SellerDashboard