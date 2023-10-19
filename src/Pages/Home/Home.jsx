import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Fetured from '../../Components/FeaturedVcles/Fetured';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-80'>
            <Fetured></Fetured>
            </div>
        </div>
    );
};

export default Home;