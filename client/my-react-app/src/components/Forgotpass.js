import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Forgotpass = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:9000/api/user/forgot-password",
        { email },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log(res.data, "userRegister");
      if (res.data) {
        navigate(`/user/email-sent/`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="ForgotPass">
      <form onSubmit={handlesubmit}>
        <h2>Forgot Password</h2>
        <label>Enter your Email</label>
        <input
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Forgotpass;
