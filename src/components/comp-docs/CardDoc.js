import React from 'react';

import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import Header from '../Header';
import '../styles.scss';
import Card from '../Card';
import { Link } from 'react-router-dom';

const CardDoc = () => (
  <>
  <NavBar />
  <Link class="back-button" to="../Components">&larr; Components</Link>
  <Header title="Card" desc="Use this to display or link content."></Header>
  
  <div class="compDetails">
    <Card bgColor="white" path="/comp-docs/CardDoc" cardName="Card Text"/>
    <pre>
      <code>
      &lt;Card bgColor="white" path="path" cardName="Card Text"/&gt;
      </code>
    </pre>
  </div>
  </>
)

export default CardDoc;