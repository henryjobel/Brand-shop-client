import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='text-purple-300'>
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/sgNFTDZ/peter-broomfield-m3m-ln-R90u-M-unsplash.jpg)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <h1 className='text-4xl text-purple-300 font-extrabold my-10 text-center'>Login your account</h1>
                    <form className="w-96">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input type="email" name='email' required placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' required className="input input-bordered" />
                            <label className="label ">
                                <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <h1 className='text-center my-4 text-purple-300'>You don&rsquo;t have an account <Link  className='text-blue-700 font-bold' to='/register'>Register</Link></h1>
                </div>
                
            </div>

        </div>
    );
};

export default Login;