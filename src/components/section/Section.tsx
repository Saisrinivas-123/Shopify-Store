import React from 'react';
import './Section.css';
import Products from './Products/Products';
import InlineNavbar from '../Navbar/InlineNavbar';
import ProductDetailPage from '../../utilities/ProductDetailPage';

const Section: React.FC = () => {
    return (
        <div className="section">
            <InlineNavbar />
            <ProductDetailPage />
            <Products />
        </div>
    );
};

export default Section;
