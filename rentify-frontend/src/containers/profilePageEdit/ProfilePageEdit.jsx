import React, { useContext, useEffect, useState } from 'react';
import './profilePageEdit.css';
import { BuyerNavbar, SellerNavbar } from '../../components';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const ProfilePageEdit = () => {
    const [person, setPerson]= useState({});
    const [loading, setLoading]= useState(false);
    const user = useContext(UserContext);
    const navigate = useNavigate();

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

    let handleSubmit = async (e)=> {
    e.preventDefault();
    try{
        if(user.currentUser?.userRole==="SELLER"){
            let res = await fetch("/seller/update",{
                method: "PUT",
                body: JSON.stringify({
                    id: user.currentUser?.userId,
                    firstname: person.firstname,
                    lastname: person.lastname,
                    phone: person.phone,
                }),
                headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(user.currentUser?.userToken)},
            });
            let resJSON = await res.text();
            if(res.status===200){
            console.log(resJSON);
            user.updateUser(JSON.parse(JSON.stringify({
                userName: person.firstname,
                userId: user.currentUser?.userId,
                userToken: user.currentUser?.userToken,
                userRole: user.currentUser?.userRole
            })));
            navigate("/profile");
            }
            else{
            alert("Invalid Input");
            }
        }
        else{
            let res = await fetch("/buyer/update",{
                method: "PUT",
                body: JSON.stringify({
                    id: user.currentUser?.userId,
                    firstname: person.firstname,
                    lastname: person.lastname,
                    phone: person.phone,
                }),
                headers: {'Content-Type': 'application/json',
                'Authorization': 'Bearer '.concat(user.currentUser?.userToken)},
            });
            let resJSON = await res.text();
            if(res.status===200){
            console.log(resJSON);
            user.updateUser(JSON.parse(JSON.stringify({
                userName: person.firstname,
                userId: user.currentUser?.userId,
                userToken: user.currentUser?.userToken,
                userRole: user.currentUser?.userRole
            })));
            navigate("/profile");
            }
            else{
            alert("Invalid Input");
            }
        }
        console.log(user);
    }
    catch(err){
        console.log(err);
    }
    };

  return (
    <div className='profilePageEdit'>
      <div className="profilePageEdit-left">
        {user.currentUser?.userRole==="SELLER"? <SellerNavbar /> : <BuyerNavbar />}
      </div>
      <div className="profilePageEdit-right">
        <h1>USER PROFILE</h1>
        <div className="profilePageEdit-right-top">
            <div className="profilePageEdit-right-top-left">
                <form>
                    <div className='profilePageEdit-label'>
                        <label>First Name</label><br></br>
                        <input type="text" placeholder="Enter First Name" value={person?.firstname} onChange={(e)=> setPerson({...person,firstname:e.target.value})}></input><br></br>
                    </div>
                    <div className='profilePageEdit-label'>
                        <label>Last Name</label><br></br>
                        <input type="text" placeholder="Enter Last Name" value={person?.lastname} onChange={(e)=> setPerson({...person,lastname:e.target.value})}></input><br></br>
                    </div>
                    <div className='profilePageEdit-label'>
                        <label>Phone No.</label><br></br>
                        <input type="number" placeholder="Enter Phone No." value={person?.phone} onChange={(e)=> setPerson({...person,phone:e.target.value})}></input><br></br>
                    </div>
                </form>
            </div>
            <div className="profilePageEdit-right-top-right">
                <form>
                    <div className='profilePageEdit-label'>
                        <label>*Email</label><br></br>
                        <input type="email" placeholder="Email" value={person?.email} readOnly></input><br></br>
                    </div>
                    <div className='profilePageEdit-label'>
                        <label>*You are a :</label><br></br>
                        <input type="text" placeholder="Role" value={user.currentUser?.userRole} readOnly></input><br></br>
                    </div>
                </form>
            </div>
        </div>
        <div className="profilePageEdit-right-bottom">
            <button onClick={handleSubmit}>SUBMIT</button>
        </div>
      </div>
    </div>
  )
}

export default ProfilePageEdit