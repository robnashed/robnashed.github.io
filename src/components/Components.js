import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import NavBar from './NavBar'
import './styles.scss';
import Header from './Header';
import Card from './Card';

const Components = () => (
  <>
  <NavBar />
  <Header title="Components"></Header>

  <div class="compWrapper">
  
    <Card bgColor="blueGreen" path="/comp-docs/HeaderDoc" cardName="Header"/>
    <Card bgColor="cherry" path="/comp-docs/CardDoc" cardName="Card"/>
  </div>
  </>
)

export default Components;