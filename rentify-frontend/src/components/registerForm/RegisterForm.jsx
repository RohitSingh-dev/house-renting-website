import React, { useState } from 'react'
import './registerForm.css';

const RegisterForm = (props) => {
  const [firstname, setFirstname]= useState("");
  const [lastname, setLastname]= useState("");
  const [email, setEmail]= useState("");
  const [phone, setPhone]= useState(null);
  const [password, setPassword]= useState("");
  const [role, setRole]= useState("BUYER");
  const [message, setMessage]= useState("");
  let handleRegister = async (e)=> {
    console.log("Inside handleRegister");
    e.preventDefault();
    try{
      let res= await fetch("/register",{
        method: "POST",
        body: JSON.stringify({
          firstname: firstname,
          lastname: lastname,
          email: email,
          phone: phone,
          password: password,
          role: role,
        }),
        headers: {'Content-Type': 'application/json'},
      });
      let resJSON= await res.text();
      if(res.status===201){
        console.log(resJSON);
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhone(null);
        setPassword("");
        setRole("BUYER");
        setMessage("User Registered successfuly");
      }
      else{
        setMessage("Invalid Input");
      }
    }
    catch(err){
      console.log(err);
    }
  };

  return (
    <div className='registerForm'>
      <form onSubmit={handleRegister}>
        <div className='registerForm-background'>
          <fieldset className='registerForm-fieldset'>
            <div className='registerForm-close-btn' onClick={props.toggle}>&times;</div>
            <div className='registerForm-legend'><b>Register Here</b></div>
            <div className='registerForm-label'>
              <label>First Name</label><br></br>
              <input type="text" placeholder="Enter First Name" value={firstname} onChange={(e)=> setFirstname(e.target.value)} required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Last Name</label><br></br>
              <input type="text" placeholder="Enter Last Name" value={lastname} onChange={(e)=> setLastname(e.target.value)} required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Email Id</label><br></br>
              <input type="email" placeholder="Enter Email" value={email} onChange={(e)=> setEmail(e.target.value)} required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Phone No.</label><br></br>
              <input type="number" placeholder="Enter Phone No." value={phone} onChange={(e)=> setPhone(e.target.value)} required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Password</label><br></br>
              <input type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required></input>
            </div>
            <div className='registerForm-dropdown'>
              <label for="role">Choose a role: </label>
              <select name="role" id="role" >
                <option value={role} onChange={(e)=> setRole(e.target.value)}>BUYER</option>
                <option value={role} onChange={(e)=> setRole(e.target.value)}>SELLER</option>
              </select>
            </div>
            <div className='registerForm-message'>
              {message ? <p id='message'>{message}</p> : null}
            </div>
            <div className='registerForm-button'>
              <input type="submit" value="REGISTER"></input>
            </div>
          </fieldset>
        </div>
      </form>
    </div>
  )
}

export default RegisterForm