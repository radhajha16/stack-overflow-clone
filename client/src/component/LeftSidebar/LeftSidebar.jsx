

import React from "react";
import { NavLink } from "react-router-dom";
import Globe from "../../assets/Globe.svg";
import "./LeftSidebar.css";

const LeftSidebar = () => {
  return (
    <div className="left-sidebar">
      <nav className="side-nav">
        <NavLink to="/" className="side-nav-links" activeclassname="active">
          <p>Home</p>
        </NavLink>
        <div className="side-nav-div"> 
          <div>
            <p>PUBLIC</p>
          </div>
          <NavLink
            to="/Questions"
            className="side-nav-links"
            activeclassname="active"
          >
            <img src={Globe} alt="Globe" width="20px" />
            <p style={{ paddingLeft: "10px" }}> Questions </p>
          </NavLink>
          <NavLink
            to="/Tags"
            className="side-nav-links"
            activeclassname="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Tags</p>
          </NavLink>
          <NavLink
            to="/Users"
            className="side-nav-links"
            activeclassname="active"
            style={{ paddingLeft: "40px" }}
          >
            <p>Users</p>
          </NavLink>


          
        </div>


        <a
          href="https://socialmedia-rm.netlify.app/"
          rel="noreferrer"
          target="_blank"
          className="side-nav-links"
        >
          <p>COMMUNITY</p>
        </a>
        
      </nav>
    </div>
  );
};

export default LeftSidebar;