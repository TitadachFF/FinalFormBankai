import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const URL = import.meta.env.VITE_BASE_URL;

const Signin = () => {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the sign-in endpoint with user credentials (email and password).
      await axios.post(`${URL}/signin`, user);

      // Assuming successful sign-in, you can navigate to a dashboard or profile page.
      navigate('/dashboard');
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
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Email"
                  onChange={handleChange}
                  value={user.email}
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

              <button
                type="submit"
           
                className="btn btn-success"
                onClick={handleSignin}
              >
                Sign In
              </button>

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
