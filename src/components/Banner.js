import React, { useEffect, useState } from 'react';
import '../styles/Banner.css'
import { motion } from 'framer-motion'
import banner1 from '../asset/banner/banner1.jpg'
import banner2 from '../asset/banner/banner2.webp'
import banner3 from '../asset/banner/banner3.webp'
import banner4 from '../asset/banner/banner4.webp'
import banner5 from '../asset/banner/banner5.jpg'
import banner6 from '../asset/banner/banner6.jpg'
import banner7 from '../asset/banner/banner7.jpg'
import banner8 from '../asset/banner/banner8.jpg'
import banner9 from '../asset/banner/banner9.png'
import banner10 from '../asset/banner/banner10.webp'




const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    banner1,
    banner2,
    banner3,
    banner4,
    banner5,
    banner6,
    banner7,
    banner8,
    banner9,
    banner10
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3000);

    return () => clearTimeout(timer);
  }, [currentImage]); // Dependency on currentImage ensures the effect reruns when it changes

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className='banner-container'>

      <motion.img
        // initial={{ scale: 0.8, opacity: 0 }}
        // animate={{ scale: 1, opacity: 1 }}
        // transition={{ duration: 1 }}
        src={images[currentImage]} alt='banner slider' />

    </motion.div>
  );
};

export default Banner;
