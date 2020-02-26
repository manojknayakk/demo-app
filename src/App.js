import React, { useContext } from 'react';
import Login from './views/authentication/Login';
import Signup from './views/authentication/Signup';
import Blogs from './views/blog/Blogs';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { store } from './store.js';

function App() {
  const globalState = useContext(store);
  const { dispatch } = globalState;
  console.log(globalState.state)
  // if (globalState.state.loggedIn == false) {
  //   dispatch({ type: 'setRedirectUrl', newState: {redirectUrl: window.location.pathname} })
  //   browserHistory.replace("/login")
  // }
  return (
    <div>
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li><Link to="/">Blogs</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Signup</Link></li>
        </ul>
      </nav>
      <p>
      </p>
      <Switch>
        <Route exact path="/">
          {globalState.state.loggedIn ? <Redirect to="/" /> : <Redirect to="/login" />}
        </Route>
        <Route exact={true} path="/" component={Blogs}/>
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/signup" component={Signup}/>
      </Switch>
      
    </div>
  );
}

export default App;
