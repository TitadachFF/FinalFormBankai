import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../services/auth.header';

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
    headers:authHeader()
};

const Search = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(false);

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`${URL}/restaurants`, {
        params: {
          search: searchTerm,
        },
      });
      setRestaurants(response.data);
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    // You can add any initial data fetching or other logic here
  }, []);

  return (
    <div className="container">
      <h1>Search Restaurants</h1>
      <div className="row form">
        <div className="col-6 card justify-content-center">
          <h5 className="card-header">Find Restaurants</h5>
          <div className="card-body"></div>
          <form>
            <div className="form-group">
              <label htmlFor="searchTerm">Search term</label>
              <input
                type="text"
                className="form-control"
                name="searchTerm"
                placeholder="Enter search term"
                onChange={handleSearchTermChange}
              />
            </div>
            <br />
            <button className="btn btn-primary" onClick={handleSearch}>
              Search
            </button>
          </form>
          {error && <p>Error occurred while searching.</p>}
          <ul>
            {restaurants.map((restaurant) => (
              <li key={restaurant.id}>
                <Link to={`/restaurant/${restaurant.id}`}>
                  {restaurant.name} - {restaurant.type}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Search;