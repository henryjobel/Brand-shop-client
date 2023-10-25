import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const CarsDetails = () => {
    const { id } = useParams();
    const [car, setCar] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/cars/${id}`)
            .then(res => res.json())
            .then(data => setCar(data))
            .catch(error => console.error('Error:', error));
    }, [id]);

    const addToCart = (selectedCar) => {
        setCart([...cart, selectedCar]);
    };

    if (!car) {
        return <div>Loading...</div>;
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={car.photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-2xl font-bold">{car.name}</h1>
                    <h1 className="text-xl font-bold">{car.category}</h1>
                    <h1 className="text-xl font-bold">{car.shortdes }</h1>
                    <h1 className="text-xl font-bold">{car.brandname}</h1>
                    <h1 className="text-xl font-bold">Price:{car.price}</h1>
                    <h1 className="text-xl font-bold">Rating:{car.rating}</h1>
                    
                    <button className="btn btn-primary" onClick={() => addToCart(car)}>Add To Cart</button>
                    <Link to="/mycart" className="btn btn-primary">View Cart</Link>
                </div>
            </div>
        </div>
    );
};

export default CarsDetails;
