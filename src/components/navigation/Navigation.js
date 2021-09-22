import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navigation.css'
import logo from '../../assets/PMPL-LOGO.png'
import {Navbar,Nav,Container} from "react-bootstrap"

function Navigation(props)
{
  return(
 <div className="nav-container">
  <NavLink className="nav-content-left" to='/'>
    <img  className="nav-logo" src={logo} alt="LOGO"/>
  </NavLink>
  {props.id === "create-room" &&
  <NavLink className="nav-content-right" to='/join-room'>
   Join Room
  </NavLink>}
  {props.id === "join-room" &&
  <NavLink className="nav-content-right" to='/create-room'>
   Exit Room
  </NavLink>}
  {props.id === "joined" &&
  <NavLink className="nav-content-right" to='/join-room'>
   Exit
  </NavLink>}
 </div>

  )
}
export default Navigation;