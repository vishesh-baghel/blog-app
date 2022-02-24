import React from "react";
import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({ setIsAuth }) {
  let Navigate = useNavigate();
  const signInWithgoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      Navigate("/");
    });
  };
  return (
    <div className="loginPage">
      Sign in with Google to continue
      <button className="login-with-google-btn" onClick={signInWithgoogle}>
        Sign in with Google
      </button>
    </div>
  );
}

export default Login;
