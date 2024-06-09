import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./AdminSignup.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const AdminSignup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showpassword, setShowpassword] = useState(false);
  const navigate = useNavigate();
  const handlesignup = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:9000/api/admin/signup",
        {
          name: name,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        }
      );
      if (response.data) {
        console.log(response.data);
        alert("Admin has signed up");
        navigate("/admin/login");
      } else {
        console.log("No response");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="AdSignup">
      <form className="formAd" onSubmit={handlesignup}>
        <h2>Signup</h2>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
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
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div
            className="password-icon1"
            onClick={() => {
              setShowpassword(!showpassword);
            }}
          >
            {showpassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </label>
        <label>
          PhoneNumber
          <input
            type="number"
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AdminSignup;
