import "./register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="register">
        <span className="registerTitle">
            Register
        </span>
        <form className="registerForm">
            <label>UserName</label>
            <input type="text" className="registerInput" placeholder="Enter your name"/>
            <label>Email</label>
            <input type="text" className="registerInput" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className="registerInput"/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">
           <Link to="/login" className="link">Login</Link>
        </button>
    </div>
  )
}

export default Register;
