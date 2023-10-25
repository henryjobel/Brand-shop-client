import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Brandscard from './Brandscard';

const BrandsOnmap = () => {

    const carBrands = useLoaderData()
    return (
        <div className='lg:grid lg:grid-cols-3 gap-3 container mx-auto pt-10'>
            {
                carBrands.map(brand => <Brandscard key={brand._id} brand={brand}></Brandscard>)
            }
        </div>
    );
};

export default BrandsOnmap;