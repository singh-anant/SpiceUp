import React from 'react'
import {Link} from 'react-router-dom'

const LoginComponent = () => {
  return (
    <div className="f-container">
 <div className="f-wrapper">
    <h2>Login</h2>
    <form action="#">
      <div className="f-input-box">
        <input type="text" placeholder="Enter your email" required/>
      </div>
      <div className="f-input-box">
        <input type="password" placeholder="Create password" required/>
      </div>
      <div className="f-input-box f-button">
        <input type="Submit" value="Login"/>
      </div>
      <div className="f-text">
        <h3>Already have an account? <Link to="/register">Register Here</Link></h3>
      </div>
    </form>
  </div>
    </div>
   
  )
}

export default LoginComponent