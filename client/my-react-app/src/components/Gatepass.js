import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Gatepass.css";

const Gatepass = () => {
  const today = new Date().toLocaleDateString("en-GB");
  const [Applyfor, setApplyfor] = useState("Day");
  const [showInDate, setShowInDate] = useState(false);
  const [Indate, setindate] = useState();
  const [out_time, setout_time] = useState(null);
  const [out_date, setout_date] = useState(null);
  const [leave_reason, setLeave_reason] = useState(null);
  const [in_time, setin_time] = useState(null);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear("token");
    navigate("/user/login");
  };
  useEffect(() => {
    setShowInDate(Applyfor === "Night");
  }, [Applyfor]);
  const appplygatepass = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/user/creategatepass",
        {
          Apply_date: today,
          Apply_for: Applyfor,
          in_date: Indate,
          out_time: out_time,
          out_date: out_date,
          leave_reason: leave_reason,
          in_time: in_time,
        }
      );
      if (response) {
        console.log(response.data);
        alert("Gatepass applied");
        navigate("/user/gatepass");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="Gatepass">
      <div className="Container">
        <button type="button" onClick={logout}>
          Log out
        </button>
        <form onSubmit={appplygatepass}>
          <label>Apply-date: {today}</label>
          <label>
            Apply for:
            <label>Day</label>
            <input
              type="checkbox"
              onChange={() => {
                setApplyfor("Day");
              }}
            />
            <label>Night</label>
            <input
              type="checkbox"
              checked={Applyfor === "Night"}
              onChange={(e) => {
                setApplyfor(e.target.checked ? "Night" : "Day");
              }}
            />
          </label>
          <label>
            Out-Date:
            <input
              type="date"
              onChange={(e) => {
                setout_date(e.target.value);
              }}
            />
          </label>
          {showInDate && (
            <label>
              {" "}
              Indate:
              <input
                type="date"
                onChange={(e) => {
                  setindate(e.target.value);
                }}
              />
            </label>
          )}

          <label>
            Out-Time:
            <input type="text" onChange={(e) => setout_time(e.target.value)} />
          </label>

          <label>
            In_time:
            <input
              type="text "
              className="In_time"
              onChange={(e) => setin_time(e.target.value)}
            />
          </label>

          <label>
            Leave-reason:
            <input
              type="text "
              className="Leave_reason"
              onChange={(e) => setLeave_reason(e.target.value)}
            />
          </label>

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Gatepass;
