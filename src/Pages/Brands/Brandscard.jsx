import React from 'react';
import { Link } from 'react-router-dom';

const Brandscard = ({ brand }) => {

    const {brandimg,brandname,_id} = brand
    return (
        <div >
            <div className="card w-96  shadow-xl">
                <figure><img src={brandimg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-3xl">{brandname}</h2>
                    <Link className='btn' to={`/details/${_id}`}>Get More</Link>
                </div>
            </div>
        </div>
    );
};

export default Brandscard;