import "./login.css";
import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="login">
        <span className="loginTitle">
            Login
        </span>
        <form className="loginForm">
            <label>Email</label>
            <input type="text" className="loginInput" placeholder="Enter your email..." />
            <label>Password</label>
            <input type="password" className="loginInput"/>
            <button className="loginButton">Login</button>
        </form>
        <button className="loginRegisterButton">
          <Link to="/register" className="link">Register</Link>
        </button>
    </div>
  )
}

export default Login
