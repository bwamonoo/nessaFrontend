import React, { useState, useContext } from 'react';
import Banner from '../components/Banner/Banner';
import Footer from '../components/Footer/Footer';
import ProductSection from '../components/ProductSection';
import '../styles/Home.css';
import FirstHeader from '../components/Header/FirstHeader';
import SecondHeader from '../components/Header/SecondHeader';
import ThirdHeader from '../components/Header/ThirdHeader';
import { NessaContext } from '../context/NessaContext';

const Home = () => {
  const { fetchCartItems, fetchWishlist } = useContext(NessaContext);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchCartItems();
    fetchWishlist();
  }, []);

  return (
    <div className="home-container">
        <FirstHeader/>
        <SecondHeader/>
        <ThirdHeader/>

        <Banner />

        <ProductSection />

        <Footer />
    </div>
  );
};

export default Home;
