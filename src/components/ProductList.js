import React from 'react';
import '../styles/ProductList.css'; // Adjust the path if necessary
import { CiHeart } from "react-icons/ci";
import { motion } from 'framer-motion';
import image1 from '../asset/IMAGES/image1.png';
import image2 from '../asset/IMAGES/image2.png';
import image3 from '../asset/IMAGES/image3.png';
import image4 from '../asset/IMAGES/image4.png';
import image5 from '../asset/IMAGES/image5.png';
import image6 from '../asset/IMAGES/image6.png';
import image7 from '../asset/IMAGES/image7.png';
import image8 from '../asset/IMAGES/image8.png';
import image9 from '../asset/IMAGES/image9.png';
import image10 from '../asset/IMAGES/image10.png';
import image11 from '../asset/IMAGES/image11.png';
import image12 from '../asset/IMAGES/image12.png';
import image13 from '../asset/IMAGES/image13.png';
import image14 from '../asset/IMAGES/image14.png';
import image15 from '../asset/IMAGES/image15.png';
import { CiFilter } from "react-icons/ci";

const perfumes = [
  { id: 1, name: "Perfume 1", price: "GHC 150.00", oldPrice: "GHC 180.00", discount: "17%", imageUrl: image1, amount: 1 },
  { id: 2, name: "Perfume 2", price: "GHC 300.00", oldPrice: "GHC 350.00", discount: "14%", imageUrl: image2, amount: 1 },
  { id: 3, name: "Perfume 3", price: "GHC 400.00", oldPrice: "GHC 450.00", discount: "11%", imageUrl: image3, amount: 1 },
  { id: 4, name: "Perfume 4", price: "GHC 200.00", oldPrice: "GHC 250.00", discount: "8%", imageUrl: image4, amount: 1 },
  { id: 5, name: "Perfume 5", price: "GHC 120.00", oldPrice: "GHC 150.00", discount: "20%", imageUrl: image5, amount: 1 },
];

const outfits = [
  { id: 6, name: "Outfit 1", price: "GHC 1,500.00", oldPrice: "GHC 1,800.00", discount: "17%", imageUrl: image6, amount: 1 },
  { id: 7, name: "Outfit 2", price: "GHC 3,000.00", oldPrice: "GHC 3,500.00", discount: "14%", imageUrl: image7, amount: 1 },
  { id: 8, name: "Outfit 3", price: "GHC 4,000.00", oldPrice: "GHC 4,500.00", discount: "11%", imageUrl: image8, amount: 1 },
  { id: 9, name: "Outfit 4", price: "GHC 6,000.00", oldPrice: "GHC 6,500.00", discount: "8%", imageUrl: image9, amount: 1 },
  { id: 10, name: "Outfit 5", price: "GHC 2,500.00", oldPrice: "GHC 3,000.00", discount: "17%", imageUrl: image10, amount: 1 },
  { id: 11, name: "Outfit 6", price: "GHC 3,500.00", oldPrice: "GHC 4,000.00", discount: "13%", imageUrl: image11, amount: 1 },
  { id: 12, name: "Outfit 7", price: "GHC 5,500.00", oldPrice: "GHC 6,000.00", discount: "9%", imageUrl: image12, amount: 1 },
  { id: 13, name: "Outfit 8", price: "GHC 2,000.00", oldPrice: "GHC 2,500.00", discount: "20%", imageUrl: image13, amount: 1 },
  { id: 14, name: "Outfit 9", price: "GHC 3,200.00", oldPrice: "GHC 3,800.00", discount: "15%", imageUrl: image14, amount: 1 },
  { id: 15, name: "Outfit 10", price: "GHC 4,800.00", oldPrice: "GHC 5,500.00", discount: "13%", imageUrl: image15, amount: 1 },
];


const ProductList = ({ ClickToAdd, searchTerm }) => {
  const [hoveredProduct, setHoveredProduct] = React.useState(null);

  const handleMouseEnter = (productId) => {
    setHoveredProduct(productId);
  };

  const handleMouseLeave = () => {
    setHoveredProduct(null);
  };

  const filteredPerfumes = perfumes.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredOutfits = outfits.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const mixedProducts = [...filteredPerfumes, ...filteredOutfits];

  return (
    <div className="product-list">

      <span className='sort'>
        <CiFilter size={25} className='sort_filter' />
        <span className="product-list-title">Sort by</span>
      </span>

      {/* Perfumes Section */}
      <motion.div
        initial={{ x: 0, opacity: 0, scale: 0.99999 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="category">

        <h3 className="category-title">
          <span className='non_green_title'>New <span className='green_title'>Arrivals</span></span>
        </h3>
        <div className="category-products">
          {filteredPerfumes.map(product => (
            <div key={product.id} className="product"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}>
              {/* <span className='product_img'> */}
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              {/* </span> */}
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <div className='price_and_discount'>
                  <p className="price">
                    <span className="new-price">{product.price}</span>
                    <span className="old-price">{product.oldPrice}</span>
                  </p>
                  <span className='product_discount'>{product.discount}</span>
                </div>

                <div className='heart_and_cart'>
                  <span className='wish_heart'>
                    <CiHeart size={33} />
                  </span>

                  {hoveredProduct === product.id &&
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="add-to-cart"
                      onClick={() => ClickToAdd(product)}
                    >Add to Cart</motion.button>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Outfits Section */}
      <motion.div
        initial={{ x: 0, opacity: 0, scale: 0.99999 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="category">
        <h3 className="category-title">
          <span className='non_green_title'>Featured <span className='green_title'>Products</span></span>
        </h3>
        <div className="category-products">
          {filteredOutfits.map(product => (
            <div key={product.id} className="product"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>

                <div className='price_and_discount'>
                  <p className="price">
                    <span className="new-price">{product.price}</span>
                    <span className="old-price">{product.oldPrice}</span>
                  </p>
                  <span className='product_discount'>{product.discount}</span>
                </div>

                <div className='heart_and_cart'>
                  <span className='wish_heart'>
                    <CiHeart size={33} />
                  </span>
                  {hoveredProduct === product.id &&
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="add-to-cart"
                      onClick={() => ClickToAdd(product)}
                    >Add to Cart</motion.button>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Mixed Section */}
      <motion.div
        initial={{ x: 0, opacity: 0, scale: 0.99999 }}
        whileInView={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="category">
        <h3 className="category-title">
          <span className='non_green_title'>Clothing and<span className='green_title'>Fashion</span></span>
        </h3>
        <div className="category-products">
          {mixedProducts.map(product => (
            <div key={product.id} className="product"
              onMouseEnter={() => handleMouseEnter(product.id)}
              onMouseLeave={handleMouseLeave}>
              <img src={product.imageUrl} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>

                <div className='price_and_discount'>
                  <p className="price">
                    <span className="new-price">{product.price}</span>
                    <span className="old-price">{product.oldPrice}</span>
                  </p>
                  <span className='product_discount'>{product.discount}</span>
                </div>

                <div className='heart_and_cart'>
                  <span className='wish_heart'>
                    <CiHeart size={33} />
                  </span>
                  {hoveredProduct === product.id &&
                    <motion.button
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="add-to-cart"
                      onClick={() => ClickToAdd(product)}
                    >Add to Cart</motion.button>
                  }
                </div>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProductList;
