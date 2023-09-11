import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';
const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config={
    auth:{
        username: USERNAME,
        password: PASSWORD,
        
    },
};


const Restautant = () => {
    const [restaurants, setRestaurants] = useState([]);
    useEffect(()=>{
        const fetchAllRestaurants = async()=>{
            try{
                const res = await axios.get(`${URL}/restaurants`,config);
                setRestaurants(res.data);
            }catch(error){
                console.log(error);
            }

            
        };
        fetchAllRestaurants();


    },[])

  return (
    <div>Restautant</div>
  )
}

export default Restautant