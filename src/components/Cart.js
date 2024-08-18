import React, { useState, useEffect } from 'react';
import '../styles/Cart.css';
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = ({ cart, setCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  //function to remove cart item
  const removeItem = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  //function to calculate price
  const handlePrice = () => {
    let initial = 0;
    cart.forEach((item) => {
      const price = parseFloat(item.price.replace('GHC ', '').replace(',', ''));
      initial += item.amount * price;
    });
    setTotalPrice(initial);
  };

  //function to increase cart item amount
  const incrementAmount = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  //function to decrement cart amount
  const decrementAmount = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.amount > 1) {
        return { ...item, amount: item.amount - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  useEffect(() => {
    handlePrice();
  }, [cart]);

  return (
    <div className="main-cart-container">

    {/* the cart image and info */}
      <div className="cart-items">
        {cart.map((item) => (
          <div className="cart_box" key={item.id}>
            <div className="cart_image_box">
              <img src={item.imageUrl} alt={item.name} />
              <button onClick={() => removeItem(item.id)}>
                <span className='cart_bin'><RiDeleteBin6Line /></span>
                Remove item
              </button>
            </div>
            <div className="item-details">
              <span>{item.name}</span>
              {/* <span>Seller: {item.seller}</span> */}
            </div>
            <div className="price-details">
              <span className="current-price">{item.price}</span>
              <div className="old-price-discount">
                <span className="cart_old-price">{item.oldPrice}</span>
                <span className="cart_discount">{item.discount}</span>
              </div>
              <div className="quantity-control">
                <button onClick={() => decrementAmount(item.id)}>-</button>
                <span>{item.amount}</span>
                <button onClick={() => incrementAmount(item.id)}>+</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* the summary box */}
      <div className="order-summary">
        <h2>ORDER SUMMARY</h2>
        <div className="summary-item">
          <span>Items({cart.length})</span>
          <span>GHC {totalPrice.toFixed(2)}</span>
        </div>
        <div className="summary-item">
          <span>Delivery fees</span>
          <span>GHC 50.00</span>
        </div>
        <div className="summary-item">
          <span>Sub total</span>
          <span>GHC {(totalPrice + 50).toFixed(2)}</span>
        </div>
        <div className="summary-item total">
          <span>Total</span>
          <span>GHC {(totalPrice + 50).toFixed(2)}</span>
        </div>
        <button className="checkout-button">Proceed to checkout</button>
      </div>
    </div>
  );
};

export default Cart;