import React, { useContext } from 'react';
import Login from './views/authentication/Login';
import Signup from './views/authentication/Signup';
import Blogs from './views/blog/Blogs';
import NewBlog from './views/blog/NewBlog';
import UpdateBlog from './views/blog/UpdateBlog';
import ViewBlog from './views/blog/ViewBlog';
import './App.css';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import { store } from './store.js';

function Home (props) {
  const globalState = useContext(store);
  console.log(globalState.state)
  const PrivateRoute = ({ component: Component, ...props }) => {
    console.log(globalState.state.loggedIn);
    return (
      <Route
        {...props}
        render={innerProps =>
          globalState.state.loggedIn ? 
              <Component {...innerProps} />
              :
              <Redirect to="/login" />
        }
      />
    );
  };

  return (
    <div>
      <nav className="navbar navbar-light">
        {globalState.state.loggedIn ? 
         (
          <ul className="nav navbar-nav">
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/new_blog">NewBlog</Link></li>
            <li><Link to="/update_blog">UpdateBlog</Link></li>
            <li><Link to="/view_blog">ViewBlog</Link></li>
          </ul>
          )
        :
         (
          <ul className="nav navbar-nav">
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
          )
        }
      </nav>
      <Switch>
        <PrivateRoute exact={true} path="/blogs" component={Blogs} />
        <PrivateRoute exact={true} path="/new_blog" component={NewBlog} />
        <PrivateRoute exact={true} path="/update_blog" component={UpdateBlog} />
        <PrivateRoute exact={true} path="/view_blog" component={ViewBlog} />
        <Route exact={true} path="/login" component={Login}/>
        <Route exact={true} path="/signup" component={Signup}/>
      </Switch>
      
    </div>
  );
}

export default App;
