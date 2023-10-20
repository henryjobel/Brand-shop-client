import React from 'react';

const Brandscard = ({ brand }) => {

    const {brandimg,brandname} = brand
    return (
        <div >
            <div className="card w-96  shadow-xl">
                <figure><img src={brandimg} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="text-center font-bold text-3xl">{brandname}</h2>
                    
                </div>
            </div>
        </div>
    );
};

export default Brandscard;