import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Link } from "react-router-dom";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const taketosignup = () => {
    navigate("/user/signup");
  };
  const handlelogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:9000/api/user/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.token;
      console.log(response.data);
      if (response) {
        localStorage.setItem("token", token);
        alert("User has logged in");
        navigate("/user/gatepass");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Login">
      <form onSubmit={handlelogin}>
        <h2>Log in</h2>
        <label>Enter your email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>
          Enter your Password
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div
            className="password-icon"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            <br />
          </div>
          <div className="Forgot-Pass">
            <Link to="/user/forgot-password">Forgot Password?</Link>
          </div>
        </label>
        <button type="sumbit">Submit</button>

        <button className="Signupbutton" onClick={taketosignup}>
          Signup
        </button>
      </form>
    </div>
  );
};
export default Login;
