import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
function Nav() {

  const location = useLocation();

  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={location.pathname === "/" ?
          "nav-link active" : "nav-link"}>
          Homepage
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/about"
          className={location.pathname === "/about" ?
            "nav-link active" : "nav-link"}
        >
          About Me 
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/portfolio"
          className={location.pathname === "/contact/portfolio" ?
            "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>


      <li className="nav-item">
        <Link
          to="/contact"
          className={location.pathname === "/contact" ?
            "nav-link active" : "nav-link"}
        >
          Reach Me !
        </Link>
      </li>

    </ul>
  );
}

export default Nav;
