import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Fetured from '../../Components/FeaturedVcles/Fetured';
import FeaturedCarsCard from '../../Components/FeaturedVcles/FeaturedCarsCard';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-80'>
            <Fetured></Fetured>
            </div>
            <FeaturedCarsCard></FeaturedCarsCard>
        </div>
    );
};

export default Home;