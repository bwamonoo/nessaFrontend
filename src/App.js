import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer/Footer';
import Health from './components/Health/Health';
import ConfirmEmail from './pages/ConfirmEmail';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';
import SearchResults from './components/SearchResults';
import FirstHeader from './components/Header/FirstHeader';
import SecondHeader from './components/Header/SecondHeader';
import ThirdHeader from './components/Header/ThirdHeader';
import PaymentStatus from './components/PaymentStatus';
import Home from './pages/Home';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ProfilePage from './pages/ProfilePage';
import ProductDetails from './pages/ProductDetails';
import Logout from './pages/Logout';
import RegisterVendor from './pages/RegisterVendor';
import SignUp from './pages/SignUp';
import RegisterCustomer from './pages/RegisterCustomer';
import RegisterAdmin from './pages/RegisterAdmin';
import VendorStoreProfile from './pages/VendorStoreProfile';
import ManageProduct from './pages/ManageProduct';


function App() {
  return (
    <AuthProvider>
      <div  className='app'>
        {/* Container for toast notifications */}
        <ToastContainer autoClose={2500} />

        {/* Define routes for different pages */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute element={<Home />} />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/cart" element={<><FirstHeader/><SecondHeader/><Cart /><Footer /></>} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/profile" element={<><SecondHeader/><ProfilePage /></>} />
          <Route path="/product-details/:id" element={<><FirstHeader/><SecondHeader/><ThirdHeader/><ProductDetails /><Footer /></>} />
          <Route path="/health" element={<Health />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/register-vendor" element={<RegisterVendor />} />
          <Route path="/register-customer" element={<RegisterCustomer />} />
          <Route path="/register-admin" element={<RegisterAdmin />} />
          <Route path="/confirm-email" element={<ConfirmEmail />} />
          <Route path="/payment/callback" element={<PaymentStatus />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/vendor" element={<VendorStoreProfile />} />
          <Route path="/manage-product" element={<ManageProduct />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
