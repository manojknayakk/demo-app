import React, { useContext } from 'react';
import { store } from '../../store';

function Blog() {

  const globalState = useContext(store);
  console.log(globalState.state)

  return (
    <div>
      <header>
        <h1>Blog Page</h1>
      </header>
      <form>
        <div>
          <label>Title</label>
          <input type="text" name="title" required />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="password"/>
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Blog;