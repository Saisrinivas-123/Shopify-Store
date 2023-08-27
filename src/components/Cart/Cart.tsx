import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Cart.css';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { cartRemoveData } from '../redux/cartItems';
import { Alert } from '@mui/material';
import Header from '../header/Header';
import Footer from '../footer/Footer';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state: any) => state.cartItems.cartDetails);
    const [counter, setCounter] = useState<any>({});
    const [showAlert, setShowAlert] = useState(false);
    const [alertItemTitle, setAlertItemTitle] = useState('');

    useEffect(() => {
        const initialCounterState: any = {};
        cartItems.forEach((item: any) => {
            initialCounterState[item.id] = 1;
        });
        setCounter(initialCounterState);
    }, [cartItems]);

    const handleIncrement = (id: number) => {
        setCounter((prevCart: any) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1,
        }));
    };

    const handleDecrement = (id: number) => {
        setCounter((prevCart: any) => ({
            ...prevCart,
            [id]: Math.max((prevCart[id] || 1) - 1, 1)
        }));
    };

    const handleRemove = (id: any) => {
        dispatch(cartRemoveData(id));
    };

    const calculateDeliveryDate = (): string => {
        const today = new Date();
        const deliveryDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
        return deliveryDate.toDateString();
    };

    const handleBuy = (item: any) => {
        setAlertItemTitle(item.title);
        setShowAlert(true);
    };
    return (
        <div className='cart-page'>
            <Header />
            <div className="cart-items-container">
                {
                    cartItems.length > 0 ? (
                        <>
                            {cartItems.map((item: any) => (
                                <div key={item.id} className="cart-item">
                                    <div className="item-image" style={{ position: 'relative', left: 140 }}>
                                        <img src={item.image} alt={item.title} />
                                    </div>
                                    <div className="item-content">
                                        <div className="item-details">
                                            <h3>{item.title}</h3>
                                            <p>Price: ${item.price}</p>
                                            <button
                                                className="quantity-button"
                                                onClick={() => handleDecrement(item.id)}
                                            >
                                                <RemoveIcon />
                                            </button>
                                            <span className="quantity">{counter[item.id] || 0}</span>
                                            <button
                                                className="quantity-button"
                                                onClick={() => handleIncrement(item.id)}
                                            >
                                                <AddIcon />
                                            </button>
                                            <p>Total: ${Number(item.price * (counter[item.id] || 0)).toFixed(2)}</p>
                                            <p>+ $0.9 Secured Packaging Fee</p>
                                            <p>Delivery by {calculateDeliveryDate()}</p>
                                        </div>
                                        <div className="item-actions" style={{ position: 'relative', bottom: '80px', right: 140 }}>
                                            <button className="remove-button" onClick={() => handleRemove(item.id)}>
                                                Remove
                                            </button>
                                            <button className="buy-button" onClick={() => handleBuy(item)}>Buy</button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </>
                    ) : (
                        <h2>No Cart Items</h2>
                    )
                }
                {showAlert && (
                    <Alert
                        onClose={() => setShowAlert(false)}
                        severity="success"
                        sx={{
                            position: 'fixed',
                            top: '5%',
                            left: '50%',
                            transform: 'translate(-50%, -5%)',
                            zIndex: 9999,
                            fontSize: 20
                        }}
                    >
                        Successfully bought the product:
                        <strong> {alertItemTitle}</strong>
                    </Alert>
                )}
            </div>
            <Footer />
        </div>
    );
};

export default Cart;
