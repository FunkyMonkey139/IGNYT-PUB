import React, { useEffect, useState } from 'react';
import './Cart.css'

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchCartFromLocalStorage = () => {
            const storedCart = localStorage.getItem('cart');
            if (storedCart) {
                setCart(JSON.parse(storedCart));
            }
        };

        fetchCartFromLocalStorage();
    }, []);
    const handlePlaceOrderClick = () => {
        // Navigate to '/'
        window.location.href = '/';

        // Show prompt
        window.alert('Order placed successfully');
    };
    return (
        <div className="cart-container" style={{ textAlign: 'center' }}>
            <h1 style={{ color: '#ccc', fontStyle: 'italic' }}>Cart</h1>
            <table className="cart-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index}>
                            <td style={{ fontSize: '1.2em', textAlign: 'center' }}>{item.name}</td>
                            <td style={{ fontSize: '1.2em', textAlign: 'center' }}>{item.price} Rs.</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button style={{ backgroundColor: 'black', color: 'white', border: 'none', borderRadius: '10px', padding: '10px 20px', fontSize: '1.2em', marginTop: '20px' }} onClick={handlePlaceOrderClick}>Place Order</button>
        </div>

    );
}

export default Cart;
