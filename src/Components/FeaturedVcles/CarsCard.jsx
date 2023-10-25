import React from 'react';
import { Link } from 'react-router-dom';

const CarsCard = ({ car }) => {

    const {_id,name,brandname,category,price,shortdes,rating,photo,brandimage} = car


    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{shortdes}</p>
                    <p className='text-xl'>{category}</p>
                    <p className='text-xl'>{brandname}</p>
                    <p className='text-xl'>Price{price}</p>
                    <p className='text-xl'>Rating: {rating}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/carsdetail/${_id}`}><button className="btn btn-primary">Get More Info</button></Link>
                        <Link to={`/update/${_id}`}>
                        <button className="btn btn-primary">Update</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarsCard;