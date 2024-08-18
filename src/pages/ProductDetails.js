import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../services/api";
import "../styles/ProductDetails.css";
import { NessaContext } from "../context/NessaContext";
import { PiUserLight } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";
import { WiDayCloudy, WiDayHail } from "react-icons/wi";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";

const ProductDetails = () => {
  const [pink, setPink] = useState(false);
  const { handleAddToCart, handleAddToWishlist, handleRemoveFromWishlist } = useContext(NessaContext);
  const { id: productId } = useParams();

  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProduct(productId);
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="image-section">
        <img
          src={product.image_url}
          alt={product.product_name}
          className="pd-product-image"
        />
        <div className="thumbnail-container">
          <img src={product.image_url} alt="thumbnail" className="thumbnail" />
          <img src={product.image_url} alt="thumbnail" className="thumbnail" />
          <img src={product.image_url} alt="thumbnail" className="thumbnail" />
        </div>
      </div>
      <hr className="pd-line1" />
      <div className="details-section">
        <span className="product-title">{product.product_name}</span>

        <div className="price-section">
          <span className="current-price">GHC {product.price}</span>
          <span className="old-price">GHC {product.oldPrice}</span>
          <span className="discount">-{product.discount}%</span>
        </div>

        <span className="cart-section">
          <button
            className="pd-add-to-cart-button"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </button>

          <span className="pd-quantity-control">
            <button className="pd-quantity-control-button">-</button>
            {product.quantity}
            <button className="pd-quantity-control-button">+</button>
          </span>
        </span>

        <div className="wishlist-section">
          <span className={`pd-heart ${pink ? "pink-on" : "pink-off"}`}>
          {pink ? (
              <IoHeartSharp
                size={28}
                style={{ color: "rgb(240, 56, 86)", fontWeight: "bold" }}
                onClick={() =>{ setPink(false)
                  handleRemoveFromWishlist(product.product_id);
                }
                }
              />
            ) : (
              <IoHeartOutline
                size={30}
                style={{ color: "rgb(255, 163, 178)", fontWeight: "bold" }}
                onClick={() => { setPink
                (true)
                handleAddToWishlist(product)
                }
              }
              />
            )}
          </span>
          Add to wishlist
        </div>

        <hr className="pd-line2" />

        <div className="vendor-info">
          <span className="vendor-user">
            <PiUserLight size={30} />
          </span>

          <span className="vendor-details">
            <span className="vendor-name">Benjamin Wilberforce</span>
            <span className="vendor-response-time">Replies in 48 hours</span>
          </span>
          <button
            className="contact-vendor-button"
            onClick={() => {
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=desmondadarkwah48@gmail.com&su=Subject%20Here&body=Body%20text%20here",
                "_blank"
              );
            }}
          >
            Get in contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
