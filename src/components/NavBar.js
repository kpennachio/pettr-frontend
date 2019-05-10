import React from "react"
import { Link } from "react-router-dom";

const NavBar = props => {
  return (

  <div className="navbar">
    <Link to={`/pet/${localStorage.getItem('currentPet')}`}> Home </Link>
    <a class="logout-button" href="/login" onClick={props.logout}> Logout </a>
  </div>
  )
}

export default NavBar
