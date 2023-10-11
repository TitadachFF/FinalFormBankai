import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AuthService from '../services/auth.service';
import { useAuthContext } from '../context/AuthContext';


const NavBar = () => {
  const { user, logout } = useAuthContext();
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    navigate("/signin")
  }
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Grab Restaureant
        </Link>

        <button className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">

          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse"
          id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active"
                aria-current="page" to="/">
                Home</Link>
            </li>
            {user && (
              <li className="nav-item">
                <Link className="nav-link" to="add">
                  Add
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="search">
                Search
              </Link>
            </li>
            {!user && (
              <li className="nav-item">
                <Link className="nav-link" to="signup" >
                  Sign Up
                </Link>
              </li>
            )}

            {!user && (
              <li className="nav-item">
                <Link className="nav-link" to="signin">
                  Sign In
                </Link>
              </li>
            )}
          </ul>
          {user && (
            <div className="from-inline my-2 my-lg-0">
              <span className="badge">Welcome,<span className="mr-sm2 h4"><Link to={"/profile"}>{user.username}</Link></span>
              </span>
              <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleLogout}>Logout</button>
            </div>
          )}

        </div>
      </div>
    </nav>
  )
}

export default NavBar;