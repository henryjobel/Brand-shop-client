import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Fetured from '../../Components/FeaturedVcles/Fetured';
import BrandsOnmap from '../Brands/BrandsOnmap';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-80'>
            <Fetured></Fetured>
            </div>
            <BrandsOnmap></BrandsOnmap>
        </div>
    );
};

export default Home;