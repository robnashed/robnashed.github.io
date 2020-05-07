import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';

const Header = (props) => (
  

  <div class="headerWrapper">
    <h1 class="headerTitle">{props.title}</h1>
    <h5 class="headerDesc">{props.desc}</h5>
  </div>
);

  
  export default Header