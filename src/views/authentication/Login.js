import React, { useContext } from 'react';
import { store } from '../../store';

function Login() {

  const globalState = useContext(store);
  const { dispatch } = globalState;

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    const newState = {
      loggedIn: true, 
      Authentication: "1234567890-123128378912",
      firstName: "John",
      lastName: "Cena",
      email: "john.cena@nasa.com"
    }
    dispatch({ type: 'login', newState: newState })
  }

  return (
    <div>
      <header>
        <h1>Login Page</h1>
      </header>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email Address</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password"/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
