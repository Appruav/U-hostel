import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./handlegatepass.css";
export const Handlegatepass = () => {
  const [displaylist, setDisplaylist] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [Apporved, setApproved] = useState(false);
  const logout = () => {
    localStorage.clear("token");
    navigate("/admin/login");
  };
  useEffect(() => {
    const fetchallgatepasses = async () => {
      try {
        const res = await axios.get(
          "http://localhost:9000/api/admin/Gatepasses"
        );
        console.log(res.data);
        if (res.data && Array.isArray(res.data.data)) {
          console.log("Gatepasses has been fetched");
          setDisplaylist(res.data.data);
          setLoading(false);
        } else {
          console.log("Error: Response data is not an array");
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchallgatepasses(); // Call the fetch function
  }, []);
  const handlegatepass = async (gatepass_id) => {
    try {
      const response = await axios.post(
        "http://localhost:9000/api/admin/handlegatepass",
        {
          Gatepass_id: gatepass_id,
        }
      );
      if (response.data) {
        setDisplaylist((prevList) =>
          prevList.filter((item) => item._id !== gatepass_id)
        );
        setApproved(true);
        console.log("Task fetched");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="handlegatepass">
      <button type="button" onClick={logout}>
        Log out
      </button>
      <div className="Container1">
        {Apporved ? <>All Gatepasses are Approved</> : <></>}
        {loading ? (
          <>Loading...</>
        ) : (
          <>
            {displaylist.map((item) => {
              return (
                <div key={item._id}>
                  <p>Apply Date: {item.Apply_date}</p>
                  <p>Apply For: {item.Apply_for}</p>
                  <p>Out Date: {item.out_date}</p>
                  <p>Out Time: {item.out_time}</p>
                  <p>In Time: {item.in_time}</p>
                  <p>In Date: {item.in_date}</p>
                  <p>Leave Reason: {item.leave_reason}</p>
                  <button
                    type="button"
                    onClick={() => {
                      handlegatepass(item._id);
                    }}
                  >
                    Approve gatepass
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
};
