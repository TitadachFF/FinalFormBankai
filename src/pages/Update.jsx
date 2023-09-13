import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;
const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};



const Update = () => {
    const [restaurant, setRestaurant] = useState({
        name: "",
        type: "",
        image: ""
    })
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const { restaurantId } = useParams();
    const handleChange = (e) => {
        setRestaurant((prev) => ({ ...prev, [e.target.name]: e.target.value }));

    };

    useEffect(() => {
        const fetchAllRestaurant = async () => {
            try {
                const res = await axios.get(
                    `${URL}/restaurant/${restaurantId}`, config
                );
                setRestaurant(res.data);
            } catch (error) {
                console.error(error);
            }

        };
    });



    const handleClick = async (e) => {
        e.preventDefault();
        try {
            await axios.push(`${URL}/restaurants/${restaurantId}`, restaurant, config);
            navigate('/');
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }


    return (
        <div className="container">
            <h1>Grab Restaurant</h1>
            <div className="row form">
                <div className="col-6 card justify-content-center">
                    <h5 className='card-header'>Add new restaurant</h5>
                    <div className="error">{error && "somethingwrong"}</div>
                    <div className="card-body">

                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Restaurant name</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="name"
                                    placeholder='Restaurant name'
                                    onChange={handleChange}
                                    value={restaurant.name} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="type">Restaurant Type</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="type"
                                    placeholder='Restaurant type'
                                    onChange={handleChange}
                                    value={restaurant.type} />
                            </div>


                            <div className="form-group">
                                <label htmlFor="image">Restaurant image</label>
                                <input
                                    type="text"
                                    className='form-control'
                                    name="image"
                                    placeholder='Restaurant image'
                                    onChange={handleChange}
                                    value={restaurant.image} />
                            </div>

                            <Link to="" className='btn btn-success' onClick={handleClick}>
                                Update
                            </Link>
                            <Link to="/" className='btn btn-danger'>
                                Cancel
                            </Link>


                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Update;