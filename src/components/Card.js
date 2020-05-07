import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';

const Card = (props) => (

  
    <Link className="nav__link" to={props.path}>
      <div id="card" class={props.bgColor}>
       <div class="cardText"> {props.cardName} </div>
        </div>
      </Link>
    

  
);

  
  export default Card