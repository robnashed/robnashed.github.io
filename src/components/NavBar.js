import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';

const NavBar = (props) => (

    <header class="header">
      
      <Link to="/">
      <div class="logo">puls</div>
      </Link>
      <div class="nav">

              <div class="navLink"><Link className="nav__link" to="/">Home</Link></div>
              <div class="navLink"><Link className="nav__link" to="/Guidelines">Guidelines</Link></div> 
              <div class="navLink"><Link className="nav__link" to="/Components">Components</Link></div>
         
      </div>
    </header>
);

  
  export default NavBar