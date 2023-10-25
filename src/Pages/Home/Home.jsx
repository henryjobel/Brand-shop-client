import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Fetured from '../../Components/FeaturedVcles/Fetured';
import BrandsOnmap from '../Brands/BrandsOnmap';
import Testimonial from '../../Components/Testimonial/Testimonial';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='mt-80'>
            <Fetured></Fetured>
            </div>
            <BrandsOnmap></BrandsOnmap>
            <div>
                <h1 className='text-center text-5xl font-bold pt-40 pb-20'>TestiMonial</h1>
                <Testimonial></Testimonial>
            </div>
        </div>
    );
};

export default Home;