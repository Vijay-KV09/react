import './topbar.css';
import { Link } from "react-router-dom";

function Topbar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
       <i className="topIcon fa-brands fa-facebook"></i>
       <i className="topIcon fa-brands fa-twitter"></i>
       <i className="topIcon fa-brands fa-pinterest"></i>
       <i className="topIcon fa-brands fa-linkedin"></i>
      </div>
      <div className="topCenter">
        <ul className='topList'>
            <li className='topListItem'>
              <Link className="link" to="/">HOME</Link>
            </li>
            <li className='topListItem'>
              <Link className="link" to="/about">ABOUT</Link>
            </li>
            <li className='topListItem'>
              <Link className="link" to="/contact">CONTACT</Link>
            </li>
            <li className='topListItem'>
              <Link className="link" to="/write">WRITE</Link>
            </li>
            <li className='topListItem'>
              <Link className="link" to="/logout">
                  {user && "LOGOUT"}
              </Link>
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (<img className="topImg" src="" alt="" />) 
                  :
                 ( 
                 <ul className='topList'>
                  <li className='topListItem'>
                    <Link className='link' to="/login">
                       LOGIN 
                    </Link>
                  </li>
                  <li className='topListItem'>
                    <Link className='link' to="/register">
                       REGISTER
                    </Link>
                  </li>
                 </ul>
                 )
                 
        }
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar
