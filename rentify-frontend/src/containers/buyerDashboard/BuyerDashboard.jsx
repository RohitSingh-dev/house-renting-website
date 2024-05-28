import React, { useState, useEffect} from 'react';
import './buyerDashboard.css';
import { BuyerNavbar } from '../../components';
import { Link } from 'react-router-dom';

const BuyerDashboard = () => {
  const [property, setProperty]= useState([]);
  const [loading, setLoading]= useState(false);
  
  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/property/all",{
        method: "GET",
      }).then(res => res.json()).then(json => {console.log(json); setProperty(json);}).catch(err => {console.log(err); setLoading(false)});
    }
  }, [])

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
        <div className="buyerDashboard-right-bottom">
          <table className='buyerDashboard-right-bottom-table'>
            <thead className='buyerDashboard-right-bottom-table-head'>
              <tr>
                  <th>Location</th>
                  <th>Area</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody className='buyerDashboard-right-bottom-table-body'>
              {
                property?.map((propertyResponse,index) => {
                  return <tr key={index}>
                    <td>{propertyResponse.location}</td>
                    <td>{propertyResponse.area}</td>
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

export default BuyerDashboard