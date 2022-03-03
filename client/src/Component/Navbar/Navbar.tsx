import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { myContext } from '../../Pages/Context'
import Axios from 'axios';

import OffcanvasMenu from 'react-offcanvas-menu-component'
import './Navbar.css'
function Navbar({location}:any) {
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
    <div className="NavContainer">
      {ctx ? (
        <>
          <Link onClick={logout} to="/logout">Logout</Link>
          {ctx.isAdmin ? (<Link to="/admin">Admin</Link>) : null}
          <Link to="/profile">Profile</Link>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>  
        </>
      )
      }
      <Link to="/">Home</Link>
    </div>
    <OffcanvasMenu
    Link={Link} 
    location={location} 
    config={{
        width: 300, 
        push: true
    }}
   
    menu={[
       
        {text: 'Home', link: '/'}, 

        // menu item with submenu
        {text: 'Pages', link: '/entery', submenu: [ 
            {text: 'Easy', link: '/easy'},
            {text: 'category', link: '/category'}
        ]}
    ]}
   
/>
   </>
  )
}

export default Navbar