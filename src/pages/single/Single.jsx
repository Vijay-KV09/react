import Sidebar from "../../components/sidebar/Sidebar";
import SinglePost from "../../components/singlePost/SinglePost";
import "../single/single.css";

function Single() {
  return (
    <div className="single">
       <SinglePost/>
       <Sidebar/>
    </div>
  )
}

export default Single
