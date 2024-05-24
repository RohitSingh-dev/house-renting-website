import React from 'react';
import './loginForm.css';

const LoginForm = (props) => {
  return (
    <div className='loginForm'>
      <form>
        <div className='loginForm-background'>
          <fieldset className='loginForm-fieldset'>
            <div className='loginForm-close-btn' onClick={props.toggle}>&times;</div>
            <div className='loginForm-legend'><b>User Login</b></div>
            <div className='loginForm-label'>
              <label>Email Id</label><br></br>
              <input type="email" placeholder="Enter email" required></input><br></br>
            </div>
            <div className='loginForm-label'>
              <label>Password</label><br></br>
              <input type="password" placeholder="Password" required></input>
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