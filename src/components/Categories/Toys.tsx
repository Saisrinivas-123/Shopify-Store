import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Categories.css';
import ProductsUpdate from '../section/Products/ProductUpdate';
import ProductDetails from '../section/Products/ProductDetails';
import { ProductJson } from '../../ProductsJson'
import Header from '../header/Header';
import Footer from '../footer/Footer';
import InlineNavbar from '../Navbar/InlineNavbar';
import FullScreenLoader from '../../utilities/FullScreenLoader';

const Toys: React.FC = () => {

    const cartData = useSelector((state: any) => state.cartItems.cartData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Toys');
    const [isLoading, setIsLoading] = useState(true);

    const handleClick = (product: any) => {
        setSelectedProduct(product);
    };

    const filteredProducts = selectedCategory
        ? ProductJson.filter(
            (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
        )
        : ProductJson;

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])
    return (
        <div className='cart-page'>
            <Header />
            <InlineNavbar />
            <div className="products-container">
                {cartData.length > 0 && <ProductsUpdate />}
                {isLoading ? (
                    <FullScreenLoader isLoading={true} />
                ) : (
                    selectedProduct ? (
                        <ProductDetails
                            selectedProduct={selectedProduct}
                            closeProduct={() => setSelectedProduct(null)}
                        />
                    ) : (
                        filteredProducts?.map((product: any) => (
                            <div
                                key={product.id}
                                className="product-card"
                                onClick={() => handleClick(product)}
                            >
                                <div className="product-image">
                                    <img src={product.image} alt={product.title} />
                                </div>
                                <div className="product-details">
                                    <h3>{product.title}</h3>
                                    <p className="category">{product.category}</p>
                                    <p className="price">${product.price}</p>
                                </div>
                            </div>
                        ))
                    )
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Toys;
