import "./write.css";

function Write() {
  return (
    <div className="write">
      <img className="writeImg" src="https://wallpapers.com/images/high/1920x1080-full-hd-nature-red-flower-uw9gsvu1hz1uxlv4.webp" alt="" />
      <form className="writeForm">
        <div className="writeFormGroup">
            <label htmlFor="fileInput">
            <i className="writeIcon fa-solid fa-plus"></i>
            </label>
            <input type="file" id="fileInput" style={{display:"none"}}/>
            <input className="writeInput" type="text" placeholder="Title" autoFocus/>
        </div>
        <div className="writeFormGroup">
          <textarea className="writeInput writeText" placeholder="Tell your story..." type="text"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>
      </form>
    </div>
  )
}

export default Write
