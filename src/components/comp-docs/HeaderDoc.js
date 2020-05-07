import React from 'react';

import { Route, Switch } from 'react-router-dom';
import NavBar from '../NavBar';
import Header from '../Header';
import '../styles.scss';
import { Link } from 'react-router-dom';

const HeaderDoc = () => (
  <>
  <NavBar />
  <Link class="back-button" to="../Components">&larr; Components</Link>
  <Header title="Header" desc="Use this to create titles for your content."></Header>
  
  <div class="compDetails">
    <Header title="Header Title" desc="Header Description"/>
    <pre>
      <code>
      &lt;Header title="Header Title" desc="Header Description"/&gt;
      </code>
    </pre>
  </div>
  </>
)

export default HeaderDoc;