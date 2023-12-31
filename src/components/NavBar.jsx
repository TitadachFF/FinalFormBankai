import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#"><h3>&nbsp;&nbsp;GrabRestaurant</h3></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <Link className="nav-item nav-link active" to="/">Home </Link>
      <Link className="nav-item nav-link" to="/add">Add</Link>
      <Link className="nav-item nav-link" to="/search">Search</Link>
      <Link className="nav-item nav-link" to="/signin">SignIn</Link>
      <Link className="nav-item nav-link" to="/signup">SignUp</Link>
      
    </div>
  </div>
</nav>
  );
};

export default NavBar;
