import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./Signup.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
const Signup = () => {
  const navigate = useNavigate();
  // const [signupData, setSignupData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  //   phoneNumber: null,
  // });
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlesingup = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(
        "http://localhost:9000/api/user/signup",
        {
          name: name,
          email: email,
          password: password,
          phoneNumber: phoneNumber,
        }
      );
      if (response.data) {
        console.log(response.data);
        alert("User has signed up");
        navigate("/user/login");
      } else {
        console.log("No response");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="Signup">
      <form onSubmit={handlesingup}>
        <h2>Signup</h2>
        <label>
          Enter your name
          <input
            type="text"
            name="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <label>
          Enter your EMAIL
          <input
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label>
          Enter your password
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div
            className="Password-icon1"
            onClick={() => {
              setShowPassword(!showPassword);
            }}
          >
            {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
          </div>
        </label>
        <label>
          Enter your Phonenumber
          <input
            type="number"
            name="phonenumber"
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
export default Signup;
