import React from 'react';
import './Mobile.css'
import { Link } from 'react-router-dom';

const MobileResponsive= () => {
  return (
    <div className='mobile-responsive-bar'>
      <Link to='/' className='menu-item active'>
        <div className='icon'>🏠</div>
        <div>Home</div>
      </Link>
      <Link to='/categories' className='menu-item'>
        <div className='icon'>📋</div>
        <div>Categories</div>
      </Link>
      <Link to='/cart' className='menu-item'>
        <div className='icon'>🛒</div>
        <div>Cart</div>
      </Link>
      <Link to='/profile' className='menu-item'>
        <div className='icon notification'>👤</div>
        <div>Profile</div>
      </Link>
      <Link to='/help' className='menu-item'>
        <div className='icon'>❓</div>
        <div>Help</div>
      </Link>
    </div>
  );
};


export default MobileResponsive;