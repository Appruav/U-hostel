import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import User from "./components/User";
import Admin from "./components/Admin";
import Signup from "./components/Userauth/Signup";
import Login from "./components/Userauth/Login";
import { useEffect, useState } from "react";
import Gatepass from "./components/Gatepass";
import AdminSignup from "./components/Adminauth/AdminSignup";
import AdminLogin from "./components/Adminauth/AdminLogin";
import { Handlegatepass } from "./components/Handlegatepass";
import Forgotpass from "./components/Forgotpass";
import { Emailsent } from "./Emailsent";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/forgot-password" element={<Forgotpass />} />
        <Route path="/admin/forgot-password" element={<Forgotpass />} />
        <Route path="/user/email-sent/" element={<Emailsent />} />
        <Route path="/user/signup" element={<Signup />} />
        <Route path="/admin/signup" element={<AdminSignup />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/handlegatepass" element={<Handlegatepass />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/gatepass" element={<Gatepass />} />
      </Routes>
    </Router>
  );
};

export default App;
