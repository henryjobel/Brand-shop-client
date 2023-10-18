// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import navbarlogo from '../../../assets/Capture-removebg-preview (1).png'

const navLinks =
    <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/addproduct'>Add Product</NavLink></li>
        <li><NavLink to='/mycart'>My Cart</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contactus'>Contact Us</NavLink></li>
    </>

const Navbar = () => {
    return (
        <div>
            <div className="navbar">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <img className='w-[200px]' src={navbarlogo} alt="" />
                </div>
                <div className="navbar-center hidden lg:flex text-8xl font-extrabold text-purple-400">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className='btn btn-outline btn-secondary'><Link to='/login'>Login</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;