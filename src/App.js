import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link, useNavigate} from "react-router-dom";
import Home from "./pages/Home"
import Login from "./pages/Login"
import CreatePost from "./pages/CreatePost";
import {useState} from "react";
import {signOut} from "firebase/auth";
import {auth} from "./firebase-config";

function App() {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
    const signUserOut = () => {
        signOut(auth).then(()=> {
            localStorage.clear();
            setIsAuth(false);
            window.location.pathname = "/login"
        });
    }
  return (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            {!isAuth ? <Link to="/login">Login</Link> :
                <>
                    <Link to="/createpost">Post</Link>
                    <button onClick={signUserOut}>Log Out</button>
                </>}
        </nav>
      <Routes>
        <Route path="/" element={ <Home />} />
        <Route path="/createpost" element={ <CreatePost isAuth={isAuth}/>} />
        <Route path="/login" element={ <Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
  );
}

export default App;
