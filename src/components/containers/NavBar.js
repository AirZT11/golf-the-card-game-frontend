import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {

    return (
      <nav className='nav-bar' >
        <ul> 
          <li>
            <NavLink className='nav-link' to='/home'>Home</NavLink>
          </li>
          
          <li>
            <NavLink className='nav-link' to='/game'>Game</NavLink>
          </li>
        </ul>
      </nav>
    )

}

export default NavBar;