import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import "../Style/navbar.css"
// import Profile from "../Menus/Profile";
// import "../Style/profile.css";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <div className="head">
        <div className="topic">
          <div className="the">The</div>
          <div className="siren">Siren</div>
        </div>
        <button
          className="mobile-menu-icon"
          onClick={() => {
            setIsMobile(!isMobile);
          }}
        >
          {isMobile ? <RxCross2 /> : <GiHamburgerMenu />}
        </button>
      </div>
      <ul
        className={isMobile ? "nav-links-mobile" : "navbar"}
        onClick={() => {
          setIsMobile(false);
        }}
      >
        <li>
          <NavLink to="/" className="link">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/hollywood" className="link">
            Hollywood
          </NavLink>
        </li>
        <li>
          <NavLink to="/bollywood" className="link">
            Bollywood
          </NavLink>
        </li>
        <li>
          <NavLink to="/technology" className="link">
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink to="/fitness" className="link">
            Fitness
          </NavLink>
        </li>
        <li>
          <NavLink to="/food" className="link">
            Food
          </NavLink>
        </li>
      </ul>
    </>
  );
}
