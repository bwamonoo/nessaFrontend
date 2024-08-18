import React, { useContext } from 'react';
import './Viewed.css'
import { NessaContext } from '../UseContext/NessaContext';

const Viewed = () => {
  const { recentlyViewed } = useContext(NessaContext);

  return (
    <div className="pp-viewed-box">
      {recentlyViewed.length === 0 ? (
        <p>No products viewed recently.</p>
      ) : (
        <div className="viewed-products">
          {recentlyViewed.map(product => (
            <div key={product.id} className="pp-viewed-item">
              <img src={product.imageUrl} alt={product.name} className="pp-viewed-image" />
              <div className="viewed-product-info">
                <span className="pp-wishlist-name">{product.name}</span>
                <p>{product.description}</p>
                <span className="pp-viewed-price">GHC {product.price.toFixed(2)}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Viewed;
