import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";
function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update your account
                </span>
                <span className="settingsDeleteTitle">
                    Delete your account
                </span>
            </div>
            <form className="settingsForm">
                <label>Profile Picture</label>
                <div className="settingsPP">
                    <img src="https://wallpapers.com/images/high/1920x1080-full-hd-nature-fern-plants-mcgfoqt988da7gy9.webp" alt="" />
                    <label htmlFor="fileInput">
                        <i className="settingsPPIcon fa-regular fa-circle-user"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder="Safak"/>
                <label>Email</label>
                <input type="email" placeholder="Safak@gmail.com"/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div>
      </div>
      <Sidebar/>
    </div>
  )
}

export default Settings
