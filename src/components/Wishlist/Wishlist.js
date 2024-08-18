import { useContext } from "react";
import { TiTimes } from "react-icons/ti";
import "./Wishlist.css";
import { NessaContext } from "../../context/NessaContext";
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
  const { wishlist, handleRemoveFromWishlist } = useContext(NessaContext);
  console.log('wishlist', wishlist);

  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product-details/${id}`);
  };

  console.log('wishlisttt::: ', wishlist);

  function shortenString(str, maxLength) {
    if (str.length > maxLength) {
      return str.slice(0, maxLength) + '...';
    } else {
      return str;
    }
  }

  return (
    <div className="pp-wishlist-box">
      <div className="pp-wishlist-products">
        {wishlist.map((item) => (
          <div key={item.productId} className="pp-wishlist-item">
            <span
              className="pp-remove-wishlist"
              onClick={() => handleRemoveFromWishlist(item.productId)}
            >
              <TiTimes size={20} />
            </span>
            <img
              src={item.imageUrl}
              alt={item.name}
              className="pp-wishlist-image"
            />
            <div className="pp-wishlist-info">
              <span className="pp-wishlist-name">{item.name}</span>
              <span >
                {shortenString(item.description, 31)}
              </span>
              <span className="pp-wishlist-price">GHC {item.price}</span>
              <span className="pp-wishlist-details"
              onClick={() => handleProductClick(item.productId)}
              >CHECK DETAILS</span>
            </div>
            {/* <button>addd</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
