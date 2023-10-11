import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';
import { useAuthContext } from '../context/AuthContext';

const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const {login} = useAuthContext();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      const currentUser = await AuthService.login(user.username, user.password);
      login(currentUser);
      navigate('/profile');
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  return (
    <div className="container">
      <h1>Sign In</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Login to Your Account</h5>
          {/* <div className="error">{error && 'Incorrect email or password.'}</div> */}
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="user">Username</label>
                <input
                  type="user"
                  className="form-control"
                  name="user"
                  placeholder="Username"
                  onChange={handleChange}
                  value={user.username}
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  value={user.password}
                />
              </div>
              <br />
              <button
                type="submit"

                className="btn btn-success"
                onClick={handleSignin}
              >
                Sign In
              </button>
              &nbsp;
              <Link to="/signup" className="btn btn-secondary">
                Don't have an account? Sign Up
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
