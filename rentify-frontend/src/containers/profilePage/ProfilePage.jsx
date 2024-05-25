import React from 'react';
import './profilePage.css';
import { SellerNavbar } from '../../components';

const ProfilePage = () => {
  return (
    <div className='profilePage'>
      <div className="profilePage-left">
        <SellerNavbar />
      </div>
      <div className="profilePage-right">
        <h1>USER PROFILE</h1>
        <div className="profilePage-right-top">
            <div className="profilePage-right-top-left">
                <form>
                    <div className='profilePage-label'>
                        <label>First Name</label><br></br>
                        <input type="text" placeholder="Enter First Name" value={"Rohit"} readOnly></input><br></br>
                    </div>
                    <div className='profilePage-label'>
                        <label>Last Name</label><br></br>
                        <input type="text" placeholder="Enter Last Name" value={"Singh"} readOnly></input><br></br>
                    </div>
                    <div className='profilePage-label'>
                        <label>Phone No.</label><br></br>
                        <input type="number" placeholder="Enter Phone No." value={"7679552015"} readOnly></input><br></br>
                    </div>
                </form>
            </div>
            <div className="profilePage-right-top-right">
                <form>
                    <div className='profilePage-label'>
                        <label>Email</label><br></br>
                        <input type="email" placeholder="Email" value={"rohit123@gmail.com"} readOnly></input><br></br>
                    </div>
                    <div className='profilePage-label'>
                        <label>You are a :</label><br></br>
                        <input type="text" placeholder="Role" value={"SELLER"} readOnly></input><br></br>
                    </div>
                </form>
            </div>
        </div>
        <div className="profilePage-right-bottom">
            <button>Edit Profile</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage