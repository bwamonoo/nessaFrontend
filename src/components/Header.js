import React, { useState } from 'react';
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { BsBag } from "react-icons/bs";
import { FaRegCircleUser } from "react-icons/fa6";
import logo from '../asset/LOGO.png';
import filter from '../asset/FILTER.png';
import { CiLogin } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import { CiBookmark } from "react-icons/ci";
import '../styles/Header.css';
import { Link } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { CiHeart } from "react-icons/ci";
import { motion } from 'framer-motion'


const Header = ({ onSearch, CartNumber }) => {
  const [showAccountInfo, setShowAccountInfo] = useState(false);
  const [showFilterInfo, setShowFilterInfo] = useState(false);
  const [showLanguageOptions, setShowLanguageOptions] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [hamShow, setHamShow] = useState(false)


  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setShowLanguageOptions(false);
  };

  const handleSearchChange = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div>
      {/* first header */}
      <div className='first-head'>
        <span className='first-head-span1'>Buying and selling with comfort</span>

        <div className='first-head-div'>
          <div className='language-selector' onMouseEnter={() => setShowLanguageOptions(true)} onMouseLeave={() => setShowLanguageOptions(false)}>
            <span className='first-head-div-span1'>
              {selectedLanguage} <span className="english-icon"><MdKeyboardArrowDown /></span>
            </span>
            {showLanguageOptions && (
              <div className='language-options'>
                <div onClick={() => handleLanguageChange('English')}>English</div>
                <div onClick={() => handleLanguageChange('Spanish')}>Spanish</div>
                <div onClick={() => handleLanguageChange('French')}>French</div>
                <div onClick={() => handleLanguageChange('German')}>German</div>
              </div>
            )}
          </div>

          <span className='first-head-div-span2'>
            <span className="phone-icon"><FaPhoneVolume /></span>023484848
          </span>

          <span style={{ opacity: 0.6 }}>Email: ecommerceness@gmail.com</span>
        </div>
      </div>


      {/* second header */}
      <div className='second-header'>

        {/* hamburger and its menu for media query(mobile responsiveness) */}
        <div className='hamburger-menu'>
          <RxHamburgerMenu size={40}
            onClick={() => setHamShow(!hamShow)}
          />
        </div>
        {hamShow && (
          <div className='product-categories'>
            <h3>Product Categories</h3>
            <hr />
            <div>
              <h4>Perfumes</h4>
              <label>
                <input type="checkbox" />
                Men's Perfumes
              </label>
              <label>
                <input type="checkbox" />
                Women's Perfumes
              </label>
              <label>
                <input type="checkbox" />
                Unisex Perfumes
              </label>
              <label>
                <input type="checkbox" />
                Perfume Sets
              </label>
              <label>
                <input type="checkbox" />
                New Arrivals
              </label>
            </div>

            <div>
              <h4>Outfits</h4>
              <label>
                <input type="checkbox" />
                Men's Clothing
              </label>
              <label>
                <input type="checkbox" />
                Women's Clothing
              </label>
              <label>
                <input type="checkbox" />
                Accessories
              </label>
              <label>
                <input type="checkbox" />
                New Arrivals
              </label>
              <label>
                <input type="checkbox" />
                Best Sellers
              </label>
            </div>
          </div>
        )}

        <div
          className='filter-icon'>
          <img
            onMouseEnter={() => setShowFilterInfo(true)}
            onMouseLeave={() => setShowFilterInfo(false)}
            src={filter} alt="Filter Icon" style={{ cursor: 'pointer' }} />
        </div>

{/* fiter or category information menu items */}
        {showFilterInfo && (
          < motion.div
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: 1, x: 10 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className='product-categories'
            onMouseEnter={() => setShowFilterInfo(true)}
            onMouseLeave={() => setShowFilterInfo(false)}
          >
            <h3>Product Categories</h3>
            <hr />
            <div>
              <h4>Perfumes</h4>
              <label>
                <input type="checkbox" />
                Men's Perfumes
              </label>
              <label>
                <input type="checkbox" />
                Women's Perfumes
              </label>
              <label>
                <input type="checkbox" />
                Unisex Perfumes
              </label>
              <label>
                <input type="checkbox" />
                Perfume Sets
              </label>
              <label>
                <input type="checkbox" />
                New Arrivals
              </label>
            </div>

            <div>
              <h4>Outfits</h4>
              <label>
                <input type="checkbox" />
                Men's Clothing
              </label>
              <label>
                <input type="checkbox" />
                Women's Clothing
              </label>
              <label>
                <input type="checkbox" />
                Accessories
              </label>
              <label>
                <input type="checkbox" />
                New Arrivals
              </label>
              <label>
                <input type="checkbox" />
                Best Sellers
              </label>
            </div>
          </motion.div>
        )}



        {/* logo side */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 100, damping: 20 }}
          className='logo-image'>
          <img src={logo} alt="Nessa Logo" />
        </motion.div>


        {/* input filed */}
        <div className='input-side'>
          <div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
            <input
              className='main-input'
              type='text'
              placeholder='search products....'
              style={{ height: 30, width: 400, padding: 5, margin: 0, borderRadius: 5, border: '1px solid rgb(229, 232, 235)' }}
              onChange={handleSearchChange}
            />
            <CiSearch style={{ position: 'absolute', right: 5, cursor: 'pointer' }} size={20} />
          </div>
        </div>


        <div className='user-side-container'>

          {/* user div */}
          <div
            onMouseEnter={() => setShowAccountInfo(true)}
            onMouseLeave={() => setShowAccountInfo(false)}
            className='user-account-div'>
            <CiUser className='ciuser  icons-hover' size={34} style={{ cursor: 'pointer' }} />
            <span className='account-container'>
              <span className='account-title  icons-hover'>ACCOUNT</span>
              <span className='account-login'>Login</span>
            </span>
          </div>

{/* accont informatinon menu */}
          {showAccountInfo &&
            <motion.div
              initial={{ x: 0, opacity: 0, scale: 0 }}
              animate={{ x: 10, opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              onMouseEnter={() => setShowAccountInfo(true)}
              onMouseLeave={() => setShowAccountInfo(false)}
              className='account-info'>
              <span className='showed'>
                <CiLogin />
                <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Login</Link>
              </span>
              <hr style={{ backgroundColor: 'black', width: 100 }} />

              <span className='showed'>
                <MdShoppingCartCheckout />
                <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Checkout</Link> </span>
              <hr style={{ backgroundColor: 'black', width: 100 }} />

              <span className='showed'>
                <CiBookmark />
                <Link to='/login' style={{ textDecoration: 'none', color: 'black' }}>Saved</Link> </span>
            </motion.div>
          }


          {/* the wishlist div */}
          <div className='wishlist-div'>
            <CiHeart className='bsbag  icons-hover' size={32} style={{ cursor: 'pointer' }} />
            <span className='wishlist-container'>
            <span className='wishlist-item'>Items</span>
              <span className='wishlist-title icons-hover'>Wishlist</span>
            </span>
          </div>

          {/* cart div */}
          <Link to='/cart' style={{ textDecoration: 'none', color: 'black' }}>
            <div className='cart-div'>
              <BsBag className='bsbag  icons-hover' size={32} style={{ cursor: 'pointer' }} />
              <span className='cart-container'>
              <span className='cart-item'>{CartNumber}</span>
                <span className='cart-title  icons-hover'>Cart</span>
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* third head */}
      <div className='third-header'>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Offers</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Others</li>
          <li>Help</li>
        </ul>

        <div className='third-header-image' style={{ marginLeft: 45 }}>
          <FaRegCircleUser size={30} />
        </div>
      </div>
    </div>
  );
}

export default Header;
