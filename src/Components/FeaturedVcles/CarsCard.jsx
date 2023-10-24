import React from 'react';
import { Link } from 'react-router-dom';

const CarsCard = ({ car }) => {

    const {_id,name,brandname,category,price,shortdes,rating,photo,brandimage} = car


    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortdes}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                        <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsCard;