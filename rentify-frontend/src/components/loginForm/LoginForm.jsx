import React, { useState, useContext } from 'react'
import './loginForm.css';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

const LoginForm = (props) => {
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");
  const user = useContext(UserContext);
  const navigate = useNavigate();
  let handleSubmit = async (e)=> {
    e.preventDefault();
    try{
      let res = await fetch("/login",{
        method: "POST",
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        headers: {'Content-Type': 'application/json'},
      });
      let resJSON = await res.text();
      if(res.status===200){
        console.log(resJSON);
        user.setCurrentUser(JSON.parse(resJSON));
        setEmail("");
        setPassword("");
        if(user.currentUser?.userRole === "SELLER"){
          navigate("/dashboard/seller");
        }
        else
        {
          navigate("/dashboard/buyer");
        }
      }
      else{
        alert("Invalid Credentials")
      }
    }
    catch(err){
      console.log(err);
    }
  };
  return (
    <div className='loginForm'>
      <form onSubmit={handleSubmit}>
        <div className='loginForm-background'>
          <fieldset className='loginForm-fieldset'>
            <div className='loginForm-close-btn' onClick={props.toggle}>&times;</div>
            <div className='loginForm-legend'><b>User Login</b></div>
            <div className='loginForm-label'>
              <label>Email Id</label><br></br>
              <input type="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br></br>
            </div>
            <div className='loginForm-label'>
              <label>Password</label><br></br>
              <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
            </div>
            <div className='loginForm-buttons'>
              <input type="reset" value="RESET"></input>
              <input className='loginForm-buttons-login' type="submit" value="LOGIN"></input>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default LoginForm