// Cart.js
import React, { useState, useEffect, useContext } from 'react';
import '../styles/Cart.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { NessaContext } from '../context/NessaContext';

const Cart = () => {
  const { cart, handleRemoveFromCart, handleUpdateCartQuantity, totalPrice, subTotal, handleTotalPrice, cartTotal } = useContext(NessaContext);

  // useEffect(() => {
  //   if (cart.length) {
  //     handleTotalPrice(cart);
  //   }
  // }, [cart]);

  console.log('caaaart::: ', cart);

  const incrementAmount = (id) => {
    const item = cart.find((item) => item.product_id === id);
    if (item) {
      handleUpdateCartQuantity(id, item.quantity + 1);
    }
  };

  const decrementAmount = (id) => {
    const item = cart.find((item) => item.product_id === id);
    if (item && item.quantity > 1) {
      handleUpdateCartQuantity(id, item.quantity - 1);
    }
  };

  return (
    <div className="main-cart-container">

      {/* the cart image and info */}
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart_box" key={item.product_id}>
            <div className="cart_image_box">

              <span className='cart-image'>
              <img className='cart-image' src={item.image_url} alt={item.product_name} />
              </span>

              <button className='remove-item' onClick={() => handleRemoveFromCart(item.product_id)}>
                <span className='cart_bin'><RiDeleteBin6Line /></span>
                Remove item
              </button>
            </div>
            <div className="item-details">
              <span>{item.product_name}</span>
              {/* <span>Seller: {item.seller}</span> */}
            </div>
            <div className="price-details">
              <span className="current-price">GHC {item.price}</span>
              <div className="old-price-discount">
                <span className="cart_old-price">{item.oldPrice}</span>
                <span className="cart_discount">{item.discount}</span>
              </div>
              <div className="quantity-control">
                <button className='quantity-control-button' onClick={() => decrementAmount(item.product_id)}>-</button>
                <span>{item.quantity}</span>
                <button className='quantity-control-button' onClick={() => incrementAmount(item.product_id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* the summary box */}
      <div className="order-summary">
        <h2>ORDER SUMMARY</h2>
        <div className="summary-item">
          <span>Items({cartTotal})</span>
          <span>GHC {subTotal}</span>
        </div>
        <div className="summary-item">
          <span>Delivery fees</span>
          <span>GHC 50.00</span>
        </div>
        <div className="summary-item">
          <span>Sub total</span>
          <span>GHC {subTotal}</span>
        </div>
        <div className="summary-item total">
          <span style={{color:'rgb(177, 39, 4)'}}>Total</span>
          <span style={{color:'rgb(177, 39, 4)'}}>GHC {totalPrice}</span>
        </div>
        <Link to={'/checkout'}><button className="checkout-button">Proceed to checkout</button></Link>
      </div>
    </div>
  );
};

export default Cart;
