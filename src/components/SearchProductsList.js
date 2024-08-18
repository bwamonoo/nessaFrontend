import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductItem from './ProductList/ProductItem';
import { NessaContext } from '../context/NessaContext';
import './ProductList/ProductList.css';
import { Link, useNavigate } from 'react-router-dom';
import { searchProducts } from '../services/api';


const SearchProductsList = ({ products }) => {
  const {handleAddToCart, handleClick, addToWishlist, wishlistColor } = useContext(NessaContext);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  console.log('PPPPP: ', products);

  const navigate = useNavigate();
  
  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  return (
    <div className="category">
      <h3 className="category-title">
        <span className='non_green_title'>{'Search'} <span className='green_title'>{'Products'}</span></span>
      </h3>

      <div className="category-products">
        {products.map(product => (
          <ProductItem
            key={product.product_id}
            product={product}
            hoveredProduct={hoveredProduct}
            handleMouseEnter={handleMouseEnter}
            handleMouseLeave={handleMouseLeave}
            handleProductClick={handleProductClick}
            handleClick={handleClick}
            handleAddToCart={handleAddToCart}
            addToWishlist={addToWishlist}
            wishlistColor={wishlistColor}
          />
        ))}
      </div>
    </div>
  );
};

export default SearchProductsList;
