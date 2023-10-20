import React from 'react';
import Swal from 'sweetalert2';
const handlebrand = event =>{
    event.preventDefault();

    const form = event.target;
    const brandimg = form.brandimg.value
    const brandname = form.brandname.value
   const newBrands = {brandimg,brandname}

    fetch('http://localhost:5000/brand', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrands)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if(data.insertedId){
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Add brand Sucessfully',
                showConfirmButton: false,
                timer: 1500
              })
        }
    })
}

const Brands = () => {
    return (
        <div>
            <div className="hero min-h-screen text-purple-300" style={{ backgroundImage: 'url(https://i.ibb.co/Q81sk6Z/brand-new-car-ai-generated-image-268835-5688.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className=" p-24">
                <h2 className="text-5xl font-bold text-center pb-6">Update Your Product</h2>
                <form onSubmit={handlebrand}>
                   
                    <div className="md:flex mb-8">
                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text text-white">Brand Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandname" placeholder="Name" className="input input-bordered w-full" />
                            </label>
                        </div>
                        <div className="form-control md:w-1/2 ml-4">
                            <label className="label">
                                <span className="label-text text-white">Brand image</span>
                            </label>
                            <label className="input-group">
                                <input type="text" name="brandimg" placeholder="Brand Name" className="input input-bordered w-full" />
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

export default Brands;