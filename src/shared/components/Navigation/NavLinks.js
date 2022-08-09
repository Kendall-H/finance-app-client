import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

const NavLinks = (props) => {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/" exact>
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink to="/assets">My Assets</NavLink>
      </li>
      <li>
        <NavLink to="/newasset">New Asset</NavLink>
      </li>
      <li>
        <NavLink to="/account">Account</NavLink>
      </li>
      <li>
        <NavLink to="/logout">Logout</NavLink>
      </li>
    </ul>
  );
};

export default NavLinks;
