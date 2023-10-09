import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth.service';

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;

const Signup = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    confirmpassword:'',
  });
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState({message: ""});
  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      if (user.confirmpassword === user.password) {
        const register = await AuthService.register
        (user.username, user.email, user.password);
        navigate("/signin");
      } else {
        setError(true);
        setErrorMessage({ message: "Failed Password mis"})
      }
      // Assuming successful signup, you can navigate to a success page or login page.
     
    } catch (error) {
      console.error(error);
      setError(true);
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="container">
      <h1>Signup</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Create an Account</h5>
          {/* <div className="error">{error && 'Something went wrong.'}</div> */}
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="Username"
                  onChange={handleChange}
                  value={user.username}
                />
              </div>

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
              <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  onChange={handleChange}
                  value={user.confirmpassword}
                />
              </div>
<br />
            
              <Link to="/signin"
                type="submit"
                className="btn btn-success"
                onClick={handleSignup}
              >
                Signup
              </Link>
              &nbsp;
              <Link to="/signin" className="btn btn-secondary">
                Already have an account? Login
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;