import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import './css/NavBar.css';
import Icon from '@mdi/react'
import {mdiMenuOpen} from '@mdi/js'

function NavBar() {

  return (

    <div className="navbar" >
      <div className="navbar-div">
        <Link to='/' className="navy"><p>Home</p></Link>
        <Link to='/projects' className="navy"><p>Projects</p></Link>
        <Link to='/resume' className="navy"><p>Resume</p></Link>
      </div>
    </div>
  )
}

export default NavBar;
