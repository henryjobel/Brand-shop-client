import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsCard from './carsCard';

const FeaturedCarsCard = () => {


    const cars = useLoaderData()

    return (
        <div className='grid grid-cols-4'>
            {
                cars.map(car => <CarsCard key={cars._id} car={car}></CarsCard>)
            }
        </div>
    );
};

export default FeaturedCarsCard;