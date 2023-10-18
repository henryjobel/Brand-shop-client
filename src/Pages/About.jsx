import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen ">
            <div className="text-6xl font-bold text-red-600 mb-4">402</div>
            <div className="text-2xl font-semibold mb-4">Payment Required</div>
            <div className="text-lg text-gray-700 mb-8">Sorry, but the requested resource requires payment.</div>
            <a href="#" className="px-4 py-2 bg-red-600 text-white rounded-full text-lg hover:bg-red-700">Make Payment</a>
        </div>
    );
};

export default About;