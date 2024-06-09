import React from "react";
import Signup from "./Userauth/Signup";
import Login from "./Userauth/Login";
import { useState, useEffect } from "react";
const User = () => {
  const [loggedin, setloogedin] = useState(false);
  const [singup, setSignup] = useState(true);
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setloogedin(true);
      singup(false);
    } else {
      setloogedin(false);
      setSignup(true);
    }
  }, loggedin);
  return (
    <div>
      {loggedin ? (
        <></>
      ) : (
        <>
          <Login />
        </>
      )}
      {singup ? (
        <>
          <Signup />
        </>
      ) : (
        <></>
      )}
    </div>
  );
};
export default User;
