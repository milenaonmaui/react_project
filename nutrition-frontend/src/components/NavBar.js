import React from 'react'
import {NavLink} from 'react-router-dom'

function NavBar(props){
  
  const s = {color: "#6a49e3"}
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" >
        
          <a className="navbar-brand" href="/">
            { props.title }
          </a>
          <NavLink className="nav-item" activeStyle={s} exact to="/">
            HOME
          </NavLink>
          <NavLink className="nav-item" exact activeStyle={s} to="/meals">
            MEALS
          </NavLink>
          <NavLink className="nav-item" exact activeStyle={s} to="/ingredients">
            INGREDIENTS
          </NavLink>
       
        
    </nav>
  )
}

export default NavBar