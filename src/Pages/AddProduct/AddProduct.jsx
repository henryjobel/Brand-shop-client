import React from 'react';

const AddProduct = () => {
    return (
        <div className="hero min-h-screen text-purple-300" style={{ backgroundImage: 'url(https://i.ibb.co/Q81sk6Z/brand-new-car-ai-generated-image-268835-5688.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" p-24">
                <h2 className="text-5xl font-bold text-center pb-6">Add a Product</h2>
                <form>
                    {/* form name and quantity row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="name" placeholder="Car Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brand_name" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form supplier row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Types of Car</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="category" placeholder="Types of Car" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Price</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="price" placeholder="$00.00" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form category and details row */}
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="short_description" placeholder="Short Description" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Rating</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="rating" placeholder="Rating" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    {/* form Photo url row */}
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white">Photo URL</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-outline btn-secondary" />

                </form>
            </div>
        </div>
    );
};

export default AddProduct;