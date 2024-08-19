import React, { useContext, useState, CSSProperties } from "react";
import "../styles/Checkout.css";
import logo from "../asset/icons/LOGO.png";
import { ImCheckboxChecked } from "react-icons/im";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { NessaContext } from "../context/NessaContext";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { checkout } from "../services/api";
import ClipLoader from "react-spinners/ClipLoader";

const Checkout = () => {
  const { cart, cartTotal, totalPrice, subTotal, setCheckoutCart, checkoutCart } = useContext (NessaContext);

  const [isDisabled, setIsDisabled] = useState(false);

  // useEffect(() => {
  //   handlePrice(cart);
  // }, [cart]);

  const handleCheckout = async () => {
    try {
      const response = await checkout();
      setCheckoutCart(response.data.data.cartItems);
      console.log('checkcartdata', response.data.data);
      window.location.href = response.data.data.authorization_url;

      console.log('setCheckoutCart', checkoutCart)
    } catch (err) {
      console.log("Payment Failed.");
      console.error("Payment error:", err);
    }
    setIsDisabled(true);
  };

  return (
    <div className="checkout-container">
      {/* Logo and Order Placement Header */}
      <div className="purchase-logo-display">
        <Link to={"/"}>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            className="checkout-image"
          >
            <img
              style={{
                marginLeft: "50px",
                height: "80px",
                width: "150px",
                padding: "-2px",
              }}
              src={logo}
              alt="Logo"
            />
          </motion.div>
        </Link>
        <span className="checkout-checkout" style={{ marginRight: "500px" }}>CHECKOUT ({cartTotal})</span>
      </div>

      <span className="checkout-content-and-order-summary">
        <div className="checkout-content">
          {/* Customer Address Section */}
          <div className="checkout-section">
            <h2 className="address-h2">
              <FaCheckCircle size={18} color="rgba(0, 128, 0, 0.612)" />
              CUSTOMER ADDRESS
            </h2>
            <p style={{ fontFamily: "Georgia, serif" }}>Benjamin Wilberforce</p>
            <p style={{ fontFamily: "Georgia, serif" }}>
              University of Ghana | TF Hostels | Greater Accra - Ghana |
              0245098776
            </p>
          </div>

          {/* Delivery Details Section */}
          <div className="checkout-section delivery-details">
            <h2 className="delivery-details-h2">
              <FaCheckCircle
                size={18}
                style={{ color: "rgba(0, 128, 0, 0.612)" }}
              />
              DELIVERY DETAIL
            </h2>

            <div className="delivery-info">
              <span className="delivery-info-1">
                <h5 style={{ marginBottom: "5px" }}>Delivery</h5>
                <span style={{ fontSize: "13px", opacity: 0.7 }}>
                  Delivered on 12 July.
                </span>
              </span>

              <span className="delivery-info-2">
                <h5>Delivery 1/2</h5>
                <span
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <span style={{ fontSize: "13px", opacity: 0.7 }}>
                    Fulfilled by Vendor
                  </span>
                  <h5>Delivery 2/2</h5>
                </span>
                <span style={{ fontSize: "13px", opacity: 0.7 }}>
                  Fulfilled by vendor
                </span>
              </span>
            </div>

            <div className="delivery-grid">
              {cart.map((item, index) => (
                <div key={index} className="delivery-item">
                  <span className="image-and-name">
                    <img src={item.image_url} alt={item.name} />
                    <p>{item.product_name}</p>
                  </span>
                  {/* <div style={{ fontFamily: "Georgia, serif" }}> */}
                  <span className="price-and-quantity">
                    <p>Price: GHC {item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                  </span>

                  {/* </div> */}
                </div>
              ))}
            </div>
            <Link to={"/cart"}>
              <button className="modify-cart-button">MODIFY CART</button>
            </Link>
          </div>

          {/* Payment Method Section */}
          <div className="checkout-section">
            <span
              className="payment-method"
              style={{
                borderBottom: " 1.5px solid rgba(204, 197, 197, 0.477)",
              }}
            >
              <h2 className="payment-method-h2">
                <FaCheckCircle
                  size={18}
                  style={{ color: "rgba(0, 128, 0, 0.612)" }}
                />
                PAYMENT METHOD
              </h2>
              <span className="payment-change-method">
                CHANGE METHOD
                <MdOutlineKeyboardArrowRight size={17} />
              </span>
            </span>
            <span className="payment-method">
              <p>Mobile Money</p>
              <span>
                <ImCheckboxChecked
                  size={20}
                  style={{ color: "rgba(0, 128, 0, 0.612)" }}
                />
              </span>
            </span>
          </div>
        </div>

        {/* Order Summary Section */}
        <div className="purchase-order-summary">
          <h2>ORDER SUMMARY</h2>
          <div className="purchase-summary-item">
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
            <span>Total</span>
            <span>GHC {totalPrice}</span>
          </div>
          <button
            disabled={isDisabled}
            className="confirm-button"
            onClick={handleCheckout}
            style={{
              backgroundColor: isDisabled ? "" : "#0b90ce",
              cursor: isDisabled ? "not-allowed" : "pointer",
              opacity: isDisabled ? 0.5 : 1,
            }}
          >
            {isDisabled ? (
              <ClipLoader
                size={11}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              "Confirm Order"
            )}
          </button>
        </div>
      </span>
    </div>
  );
};

export default Checkout;
