import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProductsUpdate from './ProductUpdate';
import ProductDetails from './ProductDetails';
import { useGetDataQuery } from '../../redux/placeholderApi';
import FullScreenLoader from '../../../utilities/FullScreenLoader';
import './Products.css';

const Products: React.FC = () => {
    const cartData = useSelector((state: any) => state.cartItems.cartData);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const { data, isError, isSuccess, isLoading, isFetching } = useGetDataQuery({ skip: false });
    const [addedProductIds, setAddedProductIds] = useState<number[]>([]);

    const handleClick = (product: any) => {
        setSelectedProduct(product);
    };
    const filterData = data?.filter((value: any) => !addedProductIds.includes(value.id));

    return (
        <div className="products-container">
            {(isLoading || isFetching) && <FullScreenLoader isLoading={true} />}
            {isSuccess &&
                <>
                    {cartData.length > 0 && <ProductsUpdate />}
                    {selectedProduct ? (
                        <ProductDetails
                            setAddedProductIds={setAddedProductIds}
                            selectedProduct={selectedProduct}
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
                    )}
                </>
            }
            {isError && <h2>Internal Server Issue</h2>}
        </div>
    );
};

export default Products;
