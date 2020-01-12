import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(props){
  
  return (
    <nav className="navbar navbar-expand-lg navbar navbar-light" >
      
          <a className="navbar-brand">
            { props.title }
          </a>
          <NavLink className="nav-item" exact activeStyle={{color: "red"}} to="/">
            HOME
          </NavLink>
          <NavLink className="nav-item" exact activeStyle={{color: "red"}} to="/meals">
            MEALS
          </NavLink>
          <NavLink className="nav-item" exact activeStyle={{color: "red"}} to="/ingredients">
            INGREDIENTS
          </NavLink>
        
    </nav>
  )
}

export default NavBar