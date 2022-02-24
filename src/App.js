import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { signOut } from "firebase/auth";
import { auth } from "./firebase-config";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/Login";
    });
  };
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/CreatePost">Create Post</Link>
        {!isAuth ? (
          <Link to="/Login">Login</Link>
        ) : (
          <button onClick={signUserOut}>Log out</button>
        )}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/CreatePost" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
