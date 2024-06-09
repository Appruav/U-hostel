import { useEffect, useState } from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [user, setUser] = useState(false);
  const [admin, setAdmin] = useState(false);
  const navigate = useNavigate();
  const handleuser = (e) => {
    setUser(true);
    setAdmin(false);
    navigate("/user/signup");
  };
  const adminuser = (e) => {
    setAdmin(true);
    setUser(true);
    navigate("/admin/signup");
  };

  return (
    <body className="home">
      <div className="Container1">
        <label>Who is accesing </label>
        <div className="ButtonContainer">
          <button className="Userbutton" onClick={handleuser}>
            User
          </button>
          <button className="Adminbutton" onClick={adminuser}>
            Admin
          </button>
        </div>
      </div>
    </body>
  );
};
export default Home;
