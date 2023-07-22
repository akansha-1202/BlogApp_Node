import React from "react";
import "../Style/profile.css";
import Profile from "./Profile";

export default function Head() {
  return (
    <div className="head">
      <div className="topic">
        <div className="the">The</div>
        <div className="siren">Siren</div>
      </div>
      <div className="dropdown">
        <Profile/>
      </div>
    </div>
  );
}
