import React from 'react';
import '../App.css';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom';
import './styles.scss';
import Header from './Header';

const Guidelines = () => (
  <>
  <NavBar />
  <Header title="Guidelines"></Header>
  </>
)

export default Guidelines;