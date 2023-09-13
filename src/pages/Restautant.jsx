import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from '../components/Card';

const url = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;

const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        const fetchAllRestaurant = async () => {
            try {
                const res = await axios.get(`${url}/restaurants`, config);
                setRestaurants(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllRestaurant();
    }, []);

    return (
        <div>
            <h1>Restaurant</h1>
            <div className='row'>
                <div className='restaurants'>
                    {restaurants.map(restaurant => {
                        return (
                            <Card restaurant={restaurant} key={restaurant.id} />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Restaurant;
