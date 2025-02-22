import React, { useContext } from "react";
import { CartcontextApi } from "../context/CartContext";
import { NavLink } from "react-router-dom";

function AddtoCart() {
    const { cart, totalPayment, addProduct, setCart, productQuantity, setProductQuantity } = useContext(CartcontextApi);
    //HANDLE INCREMENT
    const handleIncre = (item) => {
        addProduct(item);
    };
    //HANDLE DECREMENT
    const handleDecre = (item) => {
        setCart((prevCart) =>
            prevCart
                .map(cartItem =>
                    cartItem.id === item.id && cartItem.quantity > 1
                        ? { ...cartItem, quantity: cartItem.quantity - 1 }
                        : cartItem
                )
                .filter(cartItem => cartItem.quantity > 0)
        );
        setProductQuantity(prevQty => Math.max(0, prevQty - 1)); 
    };
    //  REMOVE BUTTON
    const removeFromCart = (id) => {
        setCart((prevCart) => {
            const itemToRemove = prevCart.find(item => item.id === id);
            if (!itemToRemove) return prevCart; 

            
            const newQuantity = Math.max(0, productQuantity - itemToRemove.quantity);
            setProductQuantity(newQuantity);

            return prevCart.filter(item => item.id !== id); 
        });
    };

    return (
        <>
            <div className="cart-container">
                <h1 className="page-title">Your Shopping Cart</h1>
                
                {cart.length === 0 ? (
                    <p className="empty-cart">Your cart is empty.</p>
                ) : (
                    <div className="cart-list">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item?.image || item.thumbnail} alt={item.title} className="cart-img" />
                                <div className="cart-info">
                                    <h2 className="cart-title">{item.title}</h2>
                                    <p className="cart-price">${item.price}</p>
                                    <div className="incredec">
                                        <button className="increase-btn" onClick={() => handleIncre(item)}>+</button>
                                        <p className="cart-quantity">Quantity: {item.quantity}</p>
                                        <button className="decrease-btn" onClick={() => handleDecre(item)}>-</button>
                                    </div>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        ))}
                        <div className="total-payment">
                            <h2 style={{ fontSize: "16px", fontWeight: "normal" }}>
                                Total Payment:<span className="payment-gap"> ${totalPayment.toFixed(2)}</span>
                            </h2>
                            <NavLink to="/checkout" className="remove-btn" >Check Out</NavLink>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
export default AddtoCart;
