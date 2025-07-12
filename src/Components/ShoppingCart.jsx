import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrementItemQuantity, deleteItemFromCart, incrementItemQuantity } from './CartSlice';
import './ShoppingCart.css'; 

const ShoppingCart = () => {

const dispatch = useDispatch();
const cartItems = useSelector(state => state.cart.cartItems); // Get cart items globally
const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);


const handleDeleteFromCart = (itemId) => {
dispatch(deleteItemFromCart(itemId)); // Delete product from cart
}


const handleClearCart = () => {
    dispatch(clearCart()); // Add product to cart
}


const handleIncrementItemQuantity = (itemId) => {
dispatch(incrementItemQuantity(itemId)); // Add product to cart
}

const handleDecrementItemQuantity = (itemId) => {
dispatch(decrementItemQuantity(itemId)); // Add product to cart
}


  return (
    <>
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      <ul className="cart-items">
       {
        cartItems.map((item) => (
            <li key={item.id} style={{display:"flex", justifyContent: "space-between", gap: "5"}}>
                <span>{item.name} - ${item.price}</span>
                <div className="quantity-controls">
                    <button className="quantity-control-btn" onClick={() => handleDecrementItemQuantity(item.id)}>-</button>
                    <span> {item.quantity} </span>
                    <button className="quantity-control-btn" onClick={() => handleIncrementItemQuantity(item.id)}>+</button>
                </div>
                <button className="remove-item-btn" onClick={() => handleDeleteFromCart(item.id)}>Delete</button>
            </li>
        ))
       }
      </ul>
      <button className="clear-cart-btn" onClick={handleClearCart}>Clear Cart</button>
      <div>{totalAmount ? <div>'The total amount is {totalAmount}</div> : ''}</div>


    
    </div>
  
    </>
  );
};

export default ShoppingCart;
