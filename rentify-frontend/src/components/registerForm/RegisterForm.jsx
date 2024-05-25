import React from 'react';
import './registerForm.css';

const RegisterForm = (props) => {
  return (
    <div className='registerForm'>
      <form>
        <div className='registerForm-background'>
          <fieldset className='registerForm-fieldset'>
            <div className='registerForm-close-btn' onClick={props.toggle}>&times;</div>
            <div className='registerForm-legend'><b>Register Here</b></div>
            <div className='registerForm-label'>
              <label>First Name</label><br></br>
              <input type="text" placeholder="Enter First Name" required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Last Name</label><br></br>
              <input type="text" placeholder="Enter Last Name" required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Email Id</label><br></br>
              <input type="email" placeholder="Enter Email" required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Phone No.</label><br></br>
              <input type="number" placeholder="Enter Phone No." required></input><br></br>
            </div>
            <div className='registerForm-label'>
              <label>Password</label><br></br>
              <input type="password" placeholder="Password" required></input>
            </div>
            <div className='registerForm-dropdown'>
              <label for="role">Choose a role: </label>
              <select name="role" id="role" >
                <option value="STUDENT">BUYER</option>
                <option value="TEACHER">SELLER</option>
              </select>
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