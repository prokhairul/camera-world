import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className="head-design">

            <nav className='nav-bar'>
                <Link to="/home">Home</Link>
                <Link to="/allreviews">Reviews</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/about">About Us</Link>
            </nav>

        </div>
    );
};

export default Header;