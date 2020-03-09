import React from 'react';
import { NavLink } from 'react-router-dom'
import './css/NavBar.css';

function NavBar() {

  return (

    <div className='navbar'>
      <div className='navbar-div'>
        <NavLink exact to='/' activeStyle={{ color: '#f44862' }}><p>Home</p></NavLink>
        <NavLink to='/projects' activeStyle={{ color: '#f44862' }}><p>Projects</p></NavLink>
      </div>
    </div>
  )
}

export default NavBar;
