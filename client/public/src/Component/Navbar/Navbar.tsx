import React, { useState } from "react";
import { myContext } from '../../Pages/Context';
import { useContext } from 'react';
import Axios from 'axios';
// ICONS
import * as FaIcons from "react-icons/fa"; //Now i get access to all the icons
import * as AiIcons from "react-icons/ai";

import { IconContext } from "react-icons";

// ROUTING

import { Link } from "react-router-dom";

// DATA FILE
import { SidebarData } from "./SidebarData";

// STYLES
import "./Navbar.css";

export default function Navbar({location}:any) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  const ctx = useContext(myContext);

  const logout = () => {
    Axios.get("http://localhost:4000/logout", {
      withCredentials: true
    }).then((res : any) => {
      if (res.data === "success") {
        window.location.href = "/";
      }
    })
  }

  return (
    <>
      <IconContext.Provider value={{ color: "#FFF" }}>
        {/* All the icons now are white */}
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
            <div className="navT mx-5">
            {ctx ? (
        <>
          <Link className="text-decoration-none d-block mt-2 text-light"  onClick={logout} to="/logout">Logout</Link>
          {ctx.isAdmin ? (<Link className="text-decoration-none d-block mt-2 text-light"  to="/admin">Admin</Link>) : null}
          <Link className="text-decoration-none d-block mt-2 text-light"  to="/profile">Profile</Link>
        </>
      ) : (
        <>
          <Link className="text-decoration-none d-block mt-2 text-light"  to="/login">Login</Link>
          <Link className="text-decoration-none d-block mt-2 text-light"  to="/register">Sign Up</Link>  
        </>
      )
      }
            </div>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <AiIcons.AiOutlineClose />
              </Link>
            </li>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
