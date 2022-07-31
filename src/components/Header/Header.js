import React from 'react';
import './Header.css'
const Header = () => {
    return (
        <div>
            <h2>Welcome to my React website</h2>
            <nav className='menu'>
                <a href="/home">Home</a>
                <a href="/Shop">Shop</a>
                <a href="/about">About</a>
            </nav>
        </div>
    );
};

export default Header;