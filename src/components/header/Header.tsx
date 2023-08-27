import React, { useState } from 'react';
//@ts-ignore
import { Link } from 'react-router-dom';
import SearchBar from '../../utilities/SearchBar';
import './header.css';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {

    const cartData = useSelector((state: any) => state.cartItems.cartDetails);

    return (
        <nav className='header'>
            <div className='logo'>
                <span><img src='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png' alt='Logo' /></span>
                <span className='logo-name'>Shopify</span>
            </div>
            <div>
                <SearchBar />
            </div>
            <div className='nav-links'>
                <Link to='/' className='nav-link'>
                    <span className='nav-text'>Home</span>
                </Link>
                <Link to='/cart' className='nav-link'>
                    <span className='nav-text'>Cart</span>
                    {
                        cartData.length > 0 ? <span className='cart-badge'>{cartData.length}</span> : null
                    }
                </Link>
                <Link to='/' className='nav-link'>
                    <span className='nav-text'>Logout</span>
                </Link>
            </div>
        </nav>
    );
};

export default Header;
