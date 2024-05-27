import React, { useContext, useEffect, useState } from 'react';
import './profilePage.css';
import { BuyerNavbar, SellerNavbar } from '../../components';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProfilePage = () => {
    const [person, setPerson]= useState({});
    const [loading, setLoading]= useState(false);
    const user = useContext(UserContext);
    useEffect(() => {
        if(user.currentUser?.userRole==="SELLER"){
        console.log("SELLER Profile");
        if(!loading){
          setLoading(true);
          fetch("/seller/".concat(user.currentUser?.userId),{
            method: "GET",
            headers: {'Authorization': 'Bearer '.concat(user.currentUser?.userToken)},
          }).then(res => res.json()).then(json => setPerson(json)).catch(err => {console.log(err); setLoading(false)});
        }}
        else{
            console.log("BUYER Profile");
            if(!loading){
              setLoading(true);
              fetch("/buyer/".concat(user.currentUser?.userId),{
                method: "GET",
                headers: {'Authorization': 'Bearer '.concat(user.currentUser?.userToken)},
              }).then(res => res.json()).then(json => setPerson(json)).catch(err => {console.log(err); setLoading(false)});
            }
        }
      }, []);
  return (
    <div className='profilePage'>
      <div className="profilePage-left">
        {user.currentUser?.userRole==="SELLER"? <SellerNavbar /> : <BuyerNavbar />}
      </div>
      <div className="profilePage-right">
        <h1>USER PROFILE</h1>
        <div className="profilePage-right-top">
            <div className="profilePage-right-top-left">
                <form>
                    <div className='profilePage-label'>
                        <label>First Name</label><br></br>
                        <input type="text" placeholder="Enter First Name" value={person?.firstname} readOnly></input><br></br>
                    </div>
                    <div className='profilePage-label'>
                        <label>Last Name</label><br></br>
                        <input type="text" placeholder="Enter Last Name" value={person?.lastname} readOnly></input><br></br>
                    </div>
                    <div className='profilePage-label'>
                        <label>Phone No.</label><br></br>
                        <input type="number" placeholder="Enter Phone No." value={person?.phone} readOnly></input><br></br>
                    </div>
                </form>
            </div>
            <div className="profilePage-right-top-right">
                <form>
                    <div className='profilePage-label'>
                        <label>*Email</label><br></br>
                        <input type="email" placeholder="Email" value={person?.email} readOnly></input><br></br>
                    </div>
                    <div className='profilePage-label'>
                        <label>*You are a :</label><br></br>
                        <input type="text" placeholder="Role" value={user.currentUser?.userRole} readOnly></input><br></br>
                    </div>
                </form>
            </div>
        </div>
        <div className="profilePage-right-bottom">
            <Link to={"/profile/edit"}><button>Edit Profile</button></Link>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage