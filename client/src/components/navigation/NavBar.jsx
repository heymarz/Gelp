import React from 'react';
import { Link } from "react-router-dom";

function NavBar({ user, setUser }) {
  return (
    <div>
      <Link to="/">Login</Link>
      <Link to="/new">Add new Restaurant</Link>
      
    </div>
  )
}

export default NavBar