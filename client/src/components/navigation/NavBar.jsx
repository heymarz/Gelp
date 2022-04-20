import React from 'react';
import { Link } from "react-router-dom";
import './navbar.css';

function NavBar({loggedIn, logoutUser}) {
  function loggedOutLinks(){
    return (
      <nav className="nav-Links">
        <div><Link to="/">Home</Link></div>
        <div><Link to="/signup">Sign up</Link></div>
        <div><Link to="/login">Log in</Link></div>
      </nav>
    )
  }
  function handleLogout(e){
    e.preventDefault();
    logoutUser();
  }

  function loggedInLinks(){
    return(
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#!" onClick={handleLogout}>Log out</a></li>
      </ul>
    )
  }
  return (
    <div>
      {loggedIn ? loggedInLinks() : loggedOutLinks()}
    </div>
  )
}

export default NavBar