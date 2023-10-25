import React from 'react';

const seAllCars = ({detail}) => {
    const {_id,name,brandname,category,price,shortdes,rating,photo,brandimage} = detail
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default seAllCars;