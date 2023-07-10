import { Link } from "react-router-dom"

const RegisterComponent = () => {
  return (
    <div className="f-container">
    <div className="f-wrapper">
    <h2>Registration</h2>
    <form action="#">
      <div className="f-input-box">
        <input type="text" placeholder="Enter your name" required/>
      </div>
      <div className="f-input-box">
        <input type="text" placeholder="Enter your email" required/>
      </div>
      <div className="f-input-box">
        <input type="password" placeholder="Create password" required/>
      </div>
      <div className="f-input-box">
        <input type="password" placeholder="Confirm password" required/>
      </div>
      <div className="f-input-box f-button">
        <input type="Submit" value="Register Now"/>
      </div>
      <div className="f-text">
        <h3>Already have an account? <Link to="/login">Login now</Link></h3>
      </div>
    </form>
  </div>
    </div>
  )
}

export default RegisterComponent