import React from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import AddIcon from "@mui/icons-material/Add";
import "../Style/profile.css";

export default function Profile() {
  return (
    <>
      <button className="dropbtn">
        <AccountCircleIcon fontSize="large" />
      </button>
      <div className="dropdown-content">
        <NavLink to="/login">
          <div>
            <LoginIcon />
          </div>
          <div>LogIn</div>
        </NavLink>
        <NavLink to="/register">
          <div>
            <AddIcon />
          </div>
          <div>Register</div>
        </NavLink>
      </div>
    </>
  );
}
