import React from 'react';
import { Link } from "react-router-dom";

function NavBar({loggedIn, logoutUser}) {
  function loggedOutLinks(){
    return (
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
        <li><Link to="/login">Log in</Link></li>
      </ul>
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