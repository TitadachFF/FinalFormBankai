import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

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
        image: "",
    });
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
                    `${URL}/restaurants/${restaurantId}`,
                    config
                );
                setRestaurant(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchAllRestaurant()
    },[restaurantId]);

    const handleClick = async (e) => {
        e.preventDefault();
        try {
        
            await axios.put(
                `${URL}/restaurants/${restaurantId}`,
                restaurant,
                config
            );
            navigate("/");
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };

console.log(restaurant);

    return (
        <div className="container">
            <h1>Grab Restaurant</h1>
            <div className="row form">
                <div className="col-6 card justify-content-center">
                    <h5 className="card-header">Edit restaurant</h5>
                    <div className="error">{error && "somethingwrong"}</div>
                    <div className="card-body">
                        <form onSubmit={handleClick}>
                            {" "}
                            <div className="form-group" style={{ marginTop: "10px" }}>
                                <label htmlFor="name">Restaurant name</label>{" "}
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder={restaurant.name}
                                    onChange={handleChange}
                                />{" "}
                            </div>{" "}
                            <div className="form-group" style={{ marginTop: "15px" }}>
                                <label htmlFor="name">Restaurant type</label>{" "}
                                <input
                                    type="text"
                                    className="form-control"
                                    name="type"
                                    placeholder={restaurant.type}
                                    onChange={handleChange}
                                />{" "}
                            </div>{" "}
                            <div className="form-group" style={{ marginTop: "15px" }}>
                                {" "}
                                <label htmlFor="name">Restaurant image url</label>{" "}
                                <input
                                    type="text"
                                    className="form-control"
                                    name="imageUrl"
                                    placeholder={restaurant.image}
                                    onChange={handleChange}
                                />{" "}
                            </div>{" "}
                            <div style={{ marginTop: "15px" }}>
                                {" "}
                                <button
                                    className="btn btn-success"
                                    style={{ marginRight: "15px" }}
                                    type="submit"

                                >update
                                </button>{" "}
                                <button className="btn btn-danger" >
                                    Cancel  {" "}
                                </button>{" "}
                                <div className="error" style={{ marginTop: "5px" }}>
                                    {error && "something went wrong !!"}{" "}
                                </div>{" "}
                            </div>{" "}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Update;