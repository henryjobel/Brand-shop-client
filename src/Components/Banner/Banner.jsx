import React from 'react';
import { FcCallback } from 'react-icons/fc';
import { FcBusinessman} from 'react-icons/fc';
import { AiOutlineSetting } from 'react-icons/ai';
const Banner = () => {
    return (
        <div>
            <div className="hero h-[900px]" style={{ backgroundImage: 'url(https://i.ibb.co/ryjd8jW/serge-kutuzov-1-K9-Tb-JWs2-U-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <img src="https://i.ibb.co/ZmWzjTs/Daco-1244842.png" alt="" />
                <div className='mt-[800px]'>
                <div className='lg:grid lg:grid-cols-3 max-w-7xl mx-auto bg-red-400 lg:p-10 rounded-2xl text-white '>
                <div className='flex gap-6'>
                    <p className='text-6xl'><AiOutlineSetting></AiOutlineSetting></p>
                    <div>
                        <h1 className='text-3xl font-extrabold'><span className='text-purple-300'>FAST & EFFECTIVE SERVICE</span></h1>
                        <p className='text-xl font-semibold'>Default is 6 months Update & Support. Furthermore, you can extend support to 12 months</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                <p className='text-6xl'><FcBusinessman></FcBusinessman></p>
                    <div>
                        <h1 className='text-3xl font-extrabold'><span className='text-purple-300'>HIGHLY-TRAINED STAFF</span></h1>
                        <p className='text-xl font-semibold'>Support is always our highest priority. With support members spread across the world</p>
                    </div>
                </div>
                <div className='flex gap-6'>
                    <p className='text-6xl'><FcCallback></FcCallback></p>
                    <div>
                        <h1 className='text-3xl font-extrabold'><span className='text-purple-300'>SUPPORT 24/7</span></h1>
                        <p className='text-xl font-semibold'>Default is 6 months Update & Support. Furthermore, you can extend support to 12 months</p>
                    </div>
                </div>
            </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;