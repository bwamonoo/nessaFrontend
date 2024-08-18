// ProductList.js
import React, { useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ProductItem from './ProductItem';
import { NessaContext } from '../../context/NessaContext';
import './ProductList.css';
import { getAllProducts } from '../../services/api';
import { Link, useNavigate } from 'react-router-dom';

const ProductList = ({ searchTerm, title1, title2, currentPage, getProducts, sortValue}) => {
  const { handleAddToCart, handleAddToWishlist, handleRemoveFromWishlist, wishlistColor, setTotalPages, totalPages } = useContext(NessaContext);

  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getProducts(currentPage, sortValue);
        setProducts(response.data.data.products);
        console.log(response.data.data.products);

        totalPages < response.data.data.pagination.totalPages ? setTotalPages(response.data.data.pagination.totalPages) : setTotalPages(totalPages);

      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, sortValue]);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  if (!products.length) {
    return <div></div>
  };

  return (
    <div className="category">
      <h3 className="category-title">
        <span className='non_green_title'>{title1} <span className='green_title'>{title2}</span></span>
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
            handleAddToCart={handleAddToCart}
            handleRemoveFromWishlist={handleRemoveFromWishlist}
            handleAddToWishlist={handleAddToWishlist}
            wishlistColor={wishlistColor}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
