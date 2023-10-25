import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CarsCard from './CarsCard';

const FeaturedCarsCard = () => {

    const feturedCars = useLoaderData()

    return (
        <div className='lg:grid lg:grid-cols-4 container mx-auto gap-4 pt-28'>

            {
                feturedCars.map(car => <CarsCard key={car._id} car={car}></CarsCard>)
            }
        </div>
    );
};

export default FeaturedCarsCard;