import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './components/Home';

// import './App.scss';

const App = () => (
  <Switch>
    <Route component={Home} />
  </Switch>
);

export default App;
