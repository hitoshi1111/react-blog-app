import { signInWithPopup } from "@firebase/auth";
import React from "react";
import { auth, provider } from "../firebase";
import { useNavigate } from "react-router";

const Login = ({ setIsAuth }) => {
  const navigate = useNavigate();
  const LoginInWithGoogle = () => {
    // Googleでログイン
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div>
      <p>ログインして始める</p>
      <button onClick={LoginInWithGoogle}>Googleでログイン</button>
    </div>
  );
};

export default Login;
