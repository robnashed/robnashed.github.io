import React from 'react';
import '../App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './Home'
import Guidelines from './Guidelines'
import Components from './Components'
import HeaderDoc from './comp-docs/HeaderDoc';
import CardDoc from './comp-docs/CardDoc';
const App = () => (
  <>
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/Guidelines" component={Guidelines} />
      <Route path="/Components" component={Components} />
      <Route path="/comp-docs/HeaderDoc" component={HeaderDoc} />
      <Route path="/comp-docs/CardDoc" component={CardDoc} />
     </Switch>
  </>
)

export default App;
