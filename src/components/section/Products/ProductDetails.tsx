import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { cartDetailsData } from '../../redux/cartItems';
import './ProductsDetails.css';

interface ProductDetailsProps {
    selectedProduct: any;
    closeProduct: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ selectedProduct, closeProduct }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const dispatch = useDispatch();

    const handleFavoriteClick = (value: any) => {
        setIsFavorite(true);
        dispatch(cartDetailsData(value));
    };

    const handleCloseClick = () => {
        closeProduct();
    };

    const icon1 = '🤍';
    const icon2 = '❤️';

    return (
        <div className="card-details">
            <div className="movie-container">
                <div className="image-container">
                    <img src={selectedProduct.image} alt={selectedProduct.title} />
                </div>
                <div className="movie-info">
                    <h1 className="movie-title">{selectedProduct.title}</h1>
                    <p className="movie-description">{selectedProduct.description}</p>
                    <div className="movie-footer">
                        <p className="genre">Category: {selectedProduct.category}</p>
                        <div className="price-add-cart">
                            <p className="rating-value">$Price: {selectedProduct.price}</p>
                            <div className="favorite-button" onClick={() => handleFavoriteClick(selectedProduct)}>
                                {isFavorite ? icon2 : icon1} Add To Cart
                            </div>
                        </div>
                    </div>
                </div>
                <div className="close-button" onClick={handleCloseClick}>
                    <Tooltip title="Cancel" placement="right-start">
                        <CloseIcon style={{ fontSize: 30, cursor: 'pointer' }} />
                    </Tooltip>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
