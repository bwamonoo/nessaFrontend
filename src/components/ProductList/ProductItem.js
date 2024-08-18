import { motion } from "framer-motion";
import { CiHeart } from "react-icons/ci";
import { MdShoppingCartCheckout } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { useState } from "react";


const ProductItem = ({
  product,
  hoveredProduct,
  handleMouseEnter,
  handleMouseLeave,
  handleProductClick,
  handleAddToCart,
  handleAddToWishlist,
  handleRemoveFromWishlist,
  wishlistColor,
}) => {
  const [pink, setPink] = useState(false);

  return (
    <div
      initial={{ x: 0, opacity: 0, scale: 0.9 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="product"
      onMouseEnter={() => handleMouseEnter(product.product_id)}
      onMouseLeave={handleMouseLeave}
    >
      {/* <span classNamje="product-image-cover"> */}
      <span className="image-and-info">
        <img
          src={product.image_url}
          alt={product.product_name}
          className="product-image"
          onClick={() => handleProductClick(product.product_id)}
        />
      {/* </span> */}

      <div className="product-info">
        <span className="product-name1">{product.product_name}</span>
        <div className="price_and_discount">
          <span className="price">
            <span className="new-price">GHC {product.price}</span>
            <span className="old-price">{product.oldPrice}</span>
          </span>
          <span className="product_discount">{product.discount}</span>
        </div>
        <div className="heart_and_cart">
        <span className={`pd-heart ${pink ? "pink-on" : "pink-off"}`}>
            {pink ? (
              <IoHeartSharp
                size={18}
                style={{ color: "rgb(240, 56, 86)", fontWeight: "bold" }}
                onClick={() =>{ setPink(false)
                  handleRemoveFromWishlist(product.product_id);
                }
                }
              />
            ) : (
              <IoHeartOutline
                size={20}
                style={{ color: "rgb(255, 163, 178)", fontWeight: "bold" }}
                onClick={() => { setPink
                (true)
                handleAddToWishlist(product)
                }
              }
              />
            )}
          </span>
          {hoveredProduct === product.product_id && (
            <motion.button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              <MdShoppingCartCheckout size={16} style={{ marginRight: 5 }} />
              Add to Cart
            </motion.button>
          )}
        </div>
      </div>
      </span>
    </div>
  );
};

export default ProductItem;
