import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Register from "./pages/register/Register";
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  const user = false;
  return (
    <Router>
      <Topbar/>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/register" exact element={user ? <Home/> : <Register/>}/>
        <Route path="/login" exact element={user ? <Home/> : <Login/>}/>
        <Route path="/write" exact element={user ? <Write/> : <Register/>}/>
        <Route path="/settings" exact element={user ? <Settings/> : <Register/>}/>
        <Route path="/post/:id" element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
