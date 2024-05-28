import React, { useState, useEffect, useContext} from 'react';
import './sellerListPage.css';
import SellerNavbar from '../../components/sellerNavbar/SellerNavbar';
import { UserContext } from '../../context/UserContext';
import PropertyCard from '../../components/propertyCard/PropertyCard';

const SellerListPage = () => {
  const [property, setProperty]= useState([]);
  const [loading, setLoading]= useState(false);
  const user= useContext(UserContext);

  useEffect(() => {
    if(!loading){
      setLoading(true);
      fetch("/property/seller/".concat(user.currentUser?.userId),{
        method: "GET",
        headers: {'Authorization': 'Bearer '.concat(user.currentUser?.userToken)},
      }).then(res => res.json()).then(json => {console.log(json); setProperty(json);}).catch(err => {console.log(err); setLoading(false)});
    }
  }, [])

  const [open, setOpen]= useState(false);
  function toggleMe(){
    setOpen(!open);
  };

  return (
    <div className='sellerListPage'>
      <div className="sellerListPage-left">
        <SellerNavbar />
      </div>
      <div className="sellerListPage-right">
        <div className="sellerListPage-right-top"><h1>MY LIST</h1></div>
        <div className="sellerListPage-right-bottom">
        <table className='sellerListPage-right-bottom-table'>
            <thead className='sellerListPage-right-bottom-table-head'>
              <tr>
                  <th>Location</th>
                  <th>Area</th>
                  <th>Action</th>
              </tr>
            </thead>
            <tbody className='sellerListPage-right-bottom-table-body'>
              {
                property?.map((propertyResponse,index) => {
                  return <tr key={index}>
                    <td>{propertyResponse.location}</td>
                    <td>{propertyResponse.area}</td>
                    <td><button onClick={toggleMe}>View Property</button></td>
                    {open? <PropertyCard toggle={toggleMe}/> : null}
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

export default SellerListPage