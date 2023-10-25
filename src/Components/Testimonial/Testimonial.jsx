import React from 'react';

const Testimonial = () => {
    return (
        <div className='grid grid-cols-3 gap-6 container mx-auto '>

            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
                <div className="flex items-center mb-4">
                    <img
                        className="w-12 h-12 object-cover rounded-full mr-4"
                        src="https://placekitten.com/150/150"
                        alt="Client Avatar"
                    />
                    <div>
                        <h2 className="text-xl font-bold mb-1">John Doe</h2>
                        <p className="text-gray-600">CEO, Air Turbo</p>
                    </div>
                </div>
                <p className="text-gray-800 mb-6">

                    AirTubo: Efficient, Portable, and Innovative Air Filtration. Our advanced technology ensures clean, fresh air in any environment. Experience superior quality with AirTubo today!
                </p>
                <div className="flex justify-end">
                    <span className="text-blue-600">Read more</span>
                </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
                <div className="flex items-center mb-4">
                    <img
                        className="w-12 h-12 object-cover rounded-full mr-4"
                        src="https://placekitten.com/150/150"
                        alt="Client Avatar"
                    />
                    <div>
                        <h2 className="text-xl font-bold mb-1">Stella Diess</h2>
                        <p className="text-gray-600">Manneger, AirTurbo</p>
                    </div>
                </div>
                <p className="text-gray-800 mb-6">

                    AirTubo: Efficient, Portable, and Innovative Air Filtration. Our advanced technology ensures clean, fresh air in any environment. Experience superior quality with AirTubo today!
                </p>
                <div className="flex justify-end">
                    <span className="text-blue-600">Read more</span>
                </div>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-md mx-auto">
                <div className="flex items-center mb-4">
                    <img
                        className="w-12 h-12 object-cover rounded-full mr-4"
                        src="https://placekitten.com/150/150"
                        alt="Client Avatar"
                    />
                    <div>
                        <h2 className="text-xl font-bold mb-1">Mikel</h2>
                        <p className="text-gray-600">Director, AirTurbo</p>
                    </div>
                </div>
                <p className="text-gray-800 mb-6">

                    AirTubo: Efficient, Portable, and Innovative Air Filtration. Our advanced technology ensures clean, fresh air in any environment. Experience superior quality with AirTubo today!
                </p>
                <div className="flex justify-end">
                    <span className="text-blue-600">Read more</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
