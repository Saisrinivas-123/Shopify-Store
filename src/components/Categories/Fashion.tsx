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

const Fashion: React.FC = () => {

    const cartData = useSelector((state: any) => state.cartItems.cartData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState('Fashion');
    const [isLoading, setIsLoading] = useState(true);
    const [addedProductIds, setAddedProductIds] = useState<number[]>([]);

    const handleClick = (product: any) => {
        setSelectedProduct(product);
    };

    const filteredProducts = selectedCategory
        ? ProductJson.filter(
            (product) => product.category.toLowerCase() === selectedCategory.toLowerCase()
        )
        : ProductJson;

    const filterData = filteredProducts.filter((value) => !addedProductIds.includes(value.id));

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
                            setAddedProductIds={setAddedProductIds}
                            closeProduct={() => setSelectedProduct(null)}
                        />
                    ) : (
                        filterData?.map((product: any) => (
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

export default Fashion;
