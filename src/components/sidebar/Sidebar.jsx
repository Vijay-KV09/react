import "./sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
         <span className="sidebarTitle">ABOUT ME</span>
         <img className="sideImage" src="https://wallpapers.com/images/high/monticello-at-sunrise-o3374nuh8uz9qt80.webp" alt="" />
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, itaque!</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-facebook"></i>
            <i className="sidebarIcon fa-brands fa-twitter"></i>
            <i className="sidebarIcon fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
        </div>
      </div>
    </div>
  )
}

export default Sidebar
