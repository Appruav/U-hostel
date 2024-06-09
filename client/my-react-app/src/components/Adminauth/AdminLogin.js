import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AdminLogin.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showpassword, setShowpassword] = useState(false);
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
      console.log(response);
      if (response) {
        alert("User has logged in");
        navigate("/admin/handlegatepass");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="AdLogin">
      {" "}
      <form onSubmit={handlelogin}>
        <h2>Login</h2>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type={showpassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div
            className="password-icon2"
            onClick={() => {
              setShowpassword(!showpassword);
            }}
          >
            {showpassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
          <br />
          <div className="Forgot-Pass1">
            <Link to="/admin/forgot-password">Forgot Password?</Link>
          </div>
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default AdminLogin;
