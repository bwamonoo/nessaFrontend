import React, { useContext, useEffect, useState } from "react";
import { CiLogin } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { FaOpencart } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { VscHistory } from "react-icons/vsc";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../asset/icons/LOGO.png";
// import { RxHamburgerMenu } from "react-icons/rx";
import Search from "../../asset/icons/Search.png";
import { NessaContext } from "../../context/NessaContext";
import "./SecondHeader.css";

const SecondHeader = () => {
  const { cartTotal, wishlistCount, setShowWishlist, isLoggedIn, username } =
    useContext(NessaContext);

  console.log("cartTotal:::", username);

  const [searchTerm, setSearchTerm] = useState("");
  const [showAccountInfo, setShowAccountInfo] = useState(false);

  console.log("loggeddinn::", isLoggedIn);

  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?query=${searchTerm}`);
    }
  };

  return (
    <div className="second-header-main">
      <div className="second-header">
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
            className="logo-image"
          >
            <img src={logo} alt="Nessa Logo" />
          </motion.div>
        </Link>

        <div className="input-side">
          <div
            style={{
              display: "flex",
              position: "relative",
              alignItems: "center",
            }}
          >
            <form onSubmit={handleSearchSubmit}>
              <input
                className="main-input"
                type="text"
                placeholder="search products...."
                style={{
                  height: 30,
                  padding: 5,
                  width: 500,
                  border: "1px solid #ccc",
                  boxShadow: "inset 1px 2px 3px rgba(0, 0, 0, 0.06)",
                }}
                onChange={handleSearchChange}
              />
              <button className="search-button" type="submit">
                <img src={Search} alt="search" className="search-icon" />
              </button>
            </form>
          </div>
        </div>

        <div className="user-side-container">
          <div
            onClick={() => setShowAccountInfo(!showAccountInfo)}
            className="user-account-div"
          >
            <PiUserLight
              className="ciuser icons-hover"
              size={34}
              style={{ cursor: "pointer" }}
            />
            <span className="account-container">
              <span className="account-title icons-hover">{`${
                username ? username : "Account"
              }`}</span>
              <span className="account-login">{`${
                username ? "" : "LOGIN"
              }`}</span>
            </span>
          </div>

          {showAccountInfo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="account-info"
            >
              {isLoggedIn ? (
                <span className="showed">
                  <PiUserLight />
                  <Link
                    to="/profile"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Account
                  </Link>
                </span>
              ) : (
                <span className="showed">
                  <CiLogin />
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    Login
                  </Link>
                </span>
              )}
              <span className="showed">
                <VscHistory />
                <Link to="" style={{ textDecoration: "none", color: "black" }}>
                  History
                </Link>
              </span>
              <Link
                to="/profile"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span onClick={() => setShowWishlist(true)} className="showed">
                  <MdOutlineFavoriteBorder />
                  Wishlist
                </span>
              </Link>

              <Link
                to="/checkout"
                style={{ textDecoration: "none", color: "black" }}
              >
                <span className="showed">
                  <MdShoppingCartCheckout />
                  Checkout
                </span>
              </Link>

              <hr style={{ backgroundColor: "black", width: "100%",marginTop:'0px' }} />
              <span className="logout-span" onClick={() => navigate("/logout")}>
                LOGOUT
              </span>
            </motion.div>
          )}

          <Link
            to={"/profile"}
            style={{ textDecoration: "none", color: "black" }}
            onClick={() => setShowWishlist(true)}
          >
            <div className="wishlist-div">
              <MdOutlineFavoriteBorder
                className="bsbag icons-hover"
                size={32}
                style={{ cursor: "pointer" }}
              />
              <span className="wishlist-container">
                <span className="wishlist-item">{wishlistCount}</span>
                <span className="wishlist-title icons-hover">Wishlist</span>
              </span>
            </div>
          </Link>

          <Link to="/cart" style={{ textDecoration: "none", color: "black" }}>
            <div className="cart-div">
              <FaOpencart
                className="bsbag icons-hover"
                size={32}
                style={{ cursor: "pointer" }}
              />
              <span className="cart-container">
                <span className="cart-item">{cartTotal}</span>
                <span className="cart-title icons-hover">Cart</span>
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SecondHeader;
