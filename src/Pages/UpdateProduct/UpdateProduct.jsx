import React from 'react';
import Swal from 'sweetalert2';

const UpdateProduct = () => {
    const handleAddProduct = event =>{
        event.preventDefault();
    
        const form = event.target;
        const name = form.name.value
        const brandname = form.brandname.value
        const category = form.category.value
        const price = form.price.value
        const shortdes = form.shortdes.value
        const rating = form.rating.value
        const photo = form.photo.value
        const brandimage = form.brandimage.value
        const newCars = {name,brandname,category,price,shortdes,rating,photo,brandimage}
        console.log(newCars)
    
        fetch('http://localhost:5000/cars', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(newCars)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Add Product Sucessfully',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
    }
    return (
        <div>
            <div className="hero min-h-screen text-purple-300" style={{ backgroundImage: 'url(https://i.ibb.co/Q81sk6Z/brand-new-car-ai-generated-image-268835-5688.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" p-24">
                <h2 className="text-5xl font-bold text-center pb-6">Update Your Product</h2>
                <form onSubmit={handleAddProduct}>
                   
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
                                <input type="text" name="brandname" placeholder="Brand Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                 
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
                    
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Short Description</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="shortdes" placeholder="Short Description" className="input input-bordered w-full" />
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
                    <div className="mb-8">
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text text-white">Brand Image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandimage" placeholder="Photo URL" className="input input-bordered w-full" />
                            </label>
                        </div>
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-outline btn-secondary" />

                </form>
            </div>
        </div>
        </div>
    );
};

export default UpdateProduct;