import { createContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addToCart, getCartItems, removeFromCart, updateCartQuantity, addToWishlist, getWishlist, removeFromWishlist } from '../services/api';

// Create the context
const NessaContext = createContext();

const NessaProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('')
  const [totalPages, setTotalPages] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [wishlistCount, setWishlistCount] = useState(0);
  const [wishlist, setWishlist] = useState(0);
  const [showAccount,setShowAccount] = useState(false)
  const [showWishlist, setShowWishlist] = useState(false);
  const [wishlistColor, setWishlistColor] = useState({});
  const [recentlyViewed, setRecentlViewed] = useState(false)



  useEffect(() => {
    fetchCartItems();
    fetchWishlist();
  }, []);

  const handleUsername = async (name) => {
    setUsername(name)
    setIsLoggedIn(true)
  }

  const fetchWishlist = async () => {
    try {
      const response = await getWishlist();
      setWishlist(response.data.data.wishlist);
      setWishlistCount(response.data.data.wishlistCount);
      console.log('WISHLIST', response.data.data.wishlist);
      console.log('wishlist::', response.data.data);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
    }
  };

  const handleAddToWishlist = async (product) => {
    try {
      console.log('hPrID:', product.product_id
      );
      await addToWishlist(product.product_id
      );
      fetchWishlist();
      toast.success('Item added to wishlist!');
    } catch (error) {
      toast.error('Item already in wishlist.');
      console.error('Error adding item to wisthlist:', error);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      console.log('productId:::', productId)
      await removeFromWishlist(productId);
      fetchWishlist();
      toast.success('Item removed from wishlist!');
    } catch (error) {
      toast.error('Error removing item from wishlist');
      console.error('Error removing item from wishlist:', error);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await getCartItems();
      setCart(response.data.data.cartItems);
      handlePrice(response.data.data.cartItems);
      console.log('sercsrtTotalCartNo::', response.data.data);
      setCartTotal(response.data.data.cartTotal);
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      await addToCart(product.product_id, 1);
      fetchCartItems();
      toast.success('Item added to cart!');
    } catch (error) {
      toast.error('Error adding item to cart');
      console.error('Error adding item to cart:', error);
    }
  };

  const handleRemoveFromCart = async (productId) => {
    try {
      await removeFromCart(productId);
      fetchCartItems();
      toast.success('Item removed from cart!');
    } catch (error) {
      toast.error('Error removing item from cart');
      console.error('Error removing item from cart:', error);
    }
  };

  const handleUpdateCartQuantity = async (productId, quantity) => {
    try {
      await updateCartQuantity(productId, quantity);
      fetchCartItems();
    } catch (error) {
      toast.error(`Error updating cart quantity: ${error.response.data.messages}`);
      console.error(`Errrror updating cart quantity: ${error.response.data.messages}`, error);
    }
  };

  function formatCurrency(price) {
	  return (price.toFixed(2));
  }

  const handleTotalPrice = (cart) => {
    let totalAmount = 0;

    cart.forEach( cartItem => {
      // const amount = cartItem.quantity * cartItem.price;
      const price = parseFloat(cartItem.price.replace('GHC ', '').replace(',', ''));
      totalAmount +=  cartItem.quantity * price;
    });

    console.log('caaaarrqqq::: ', totalAmount);
    setSubTotal(totalAmount);
    setTotalPrice(totalAmount + 50);
  }

  const handlePrice = (cart) => {
    let initial = 0;

    cart.forEach((cartItem) => { 
      initial += cartItem.quantity * cartItem.price;
    });

    setSubTotal( formatCurrency(initial) );
    setTotalPrice( formatCurrency(initial + 50) );
  };

  return (
    <NessaContext.Provider
      value={{
        isLoggedIn,
        username,
        handleUsername,
        totalPages,
        setTotalPages,
        wishlist,
        wishlistCount,
        fetchWishlist,
        handleAddToWishlist,
        handleRemoveFromWishlist,
        wishlistColor,
        setWishlistColor,
        cart,
        cartTotal,
        fetchCartItems,
        setCartTotal,
        handleAddToCart,
        handleRemoveFromCart,
        handleUpdateCartQuantity,
        subTotal,
        setSubTotal,
        totalPrice,
        setTotalPrice,
        handlePrice,
        handleTotalPrice,
        showWishlist,
        setShowWishlist,
        recentlyViewed,
        setRecentlViewed,
        showAccount,
        setShowAccount      
      }}
    >
      {children}
      <ToastContainer autoClose={2000} />
    </NessaContext.Provider>
  );
};

export { NessaContext, NessaProvider };
