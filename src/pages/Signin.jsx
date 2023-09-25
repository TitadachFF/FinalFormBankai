import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignIn = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignIn = async () => {
    // Your sign-in logic using Axios here
    try {
      // Send a POST request to your authentication endpoint
      const response = await axios.post('YOUR_API_ENDPOINT', formData);

      // Assuming your API returns a token upon successful sign-in
      const token = response.data.token;

      // Store the token in local storage or a state management solution like Redux
      // Example with local storage:
      localStorage.setItem('token', token);

      // Redirect to a protected route or the user's dashboard
      navigate('/dashboard');
    } catch (error) {
      // Handle sign-in errors (e.g., incorrect credentials)
      console.error(error);
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Sign In</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleSignIn}
          >
            Sign In
          </button>
          <Link to="/" className="btn btn-secondary ml-2">
            Cancel
          </Link>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
