import React, { useContext } from 'react';
import Home from './Home';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import { store } from './store.js';

function App() {

  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
