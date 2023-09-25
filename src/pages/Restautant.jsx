import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import axios from "axios";
import Card from '../components/Card';

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username:USERNAME,
        password:PASSWORD,
    },
};

const Restaurant = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        const fetcAllRestaurant = async () =>{
            try {
                const res = await axios.get(`${URL}/restaurants`, config)
                setRestaurants(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetcAllRestaurant();
    },[])

    const handDelete = async (id) =>{
        try {
            await axios.delete(`${URL}/restaurants/${id}`, config);
            window.location.reload();
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div>
        <h1>Restaurant</h1>
        <div className="row">
            <div className="restaurants">
                {
                    restaurants.map(restaurant =>{
                        return(
                            <Card restaurant={restaurant} 
                            key={restaurant.id}/>
                        );
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Restaurant
