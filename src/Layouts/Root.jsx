// eslint-disable-next-line no-unused-vars
import React from 'react';
import Navbar from '../Components/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';

const Root = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-50'>
            <div className='max-w-7xl mx-auto'>
                <Navbar></Navbar>
            </div>
            <div><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default Root;