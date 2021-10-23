import { Link } from 'react-router-dom'

import './App.css';

function PageNotFound() {
  return (
    <div className="App backgroundI">
      <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <h1 className="HomeCover_title mt-5">The Louvre</h1>
        <h2 className="HomeCover_title">
          404 Page Not Found
        </h2>
          <a href="/" ><button type="button" class="btn button-1 btn-lg">Home</button></a>
      </div>
    </div>
  );
}

export default PageNotFound
