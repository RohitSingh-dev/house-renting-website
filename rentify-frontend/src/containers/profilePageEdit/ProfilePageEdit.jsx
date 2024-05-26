import React from 'react';
import './profilePageEdit.css';
import { SellerNavbar } from '../../components';

const ProfilePageEdit = () => {
  return (
    <div className='profilePageEdit'>
      <div className="profilePageEdit-left">
        <SellerNavbar />
      </div>
      <div className="profilePageEdit-right">
        <h1>USER PROFILE</h1>
        <div className="profilePageEdit-right-top">
            <div className="profilePageEdit-right-top-left">
                <form>
                    <div className='profilePageEdit-label'>
                        <label>First Name</label><br></br>
                        <input type="text" placeholder="Enter First Name" value={"Rohit"}></input><br></br>
                    </div>
                    <div className='profilePageEdit-label'>
                        <label>Last Name</label><br></br>
                        <input type="text" placeholder="Enter Last Name" value={"Singh"}></input><br></br>
                    </div>
                    <div className='profilePageEdit-label'>
                        <label>Phone No.</label><br></br>
                        <input type="number" placeholder="Enter Phone No." value={"7679552015"}></input><br></br>
                    </div>
                </form>
            </div>
            <div className="profilePageEdit-right-top-right">
                <form>
                    <div className='profilePageEdit-label'>
                        <label>*Email</label><br></br>
                        <input type="email" placeholder="Email" value={"rohit123@gmail.com"} readOnly></input><br></br>
                    </div>
                    <div className='profilePageEdit-label'>
                        <label>*You are a :</label><br></br>
                        <input type="text" placeholder="Role" value={"SELLER"} readOnly></input><br></br>
                    </div>
                </form>
            </div>
        </div>
        <div className="profilePageEdit-right-bottom">
            <button>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePageEdit