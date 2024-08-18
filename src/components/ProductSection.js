// ProductSection.js
import React, { useContext, useState } from 'react';
import { CiFilter } from "react-icons/ci";
import ProductList from './ProductList/ProductList';
import Pagination from './Pagination';
import { NessaContext } from '../context/NessaContext';
import { getAllProducts, getFeaturedProducts, getNewArrivals } from '../services/api';
//import './ProductSection.css';

const ProductSection = ({ searchTerm }) => {
  const {totalPages} = useContext(NessaContext)
  const [currentPage, setCurrentPage] = useState(1);
  const [sortClicked, setSortClicked] = useState(false);
  const [sortValue, setSortValue] = useState('');

  const handleSort = (e) => {
    setSortValue(e.target.value);
  };
  
  return (
    <div className="product-section">
      <span
       className={`sort-container ${sortClicked ? 'is-selected' : ''}` }
      >
        <span className='sort-wrapper'>
          <span 
          className='sort'
          onClick={() => setSortClicked(!sortClicked)}
          >
            <CiFilter size={20} className='sort_filter' />
            <span>Sort By: </span>
          </span>

          <select
          className="sort-items"
          value={sortValue}
          onChange={handleSort}
          >
            <option value='popular' >Popularity</option>
            <option value='priceLowHigh' >Price: Low</option>
            <option value='priceHighLow' >Price: High</option>
          </select>
        </span> 
      </span>  
      
      <div className="product-lists">
        <ProductList
          title1="New"
          title2="Arrivals"
          currentPage={currentPage}
          getProducts={getNewArrivals}
          sortValue={sortValue}
        />
        
        <ProductList
          title1="Featured"
          title2="Products"
          currentPage={currentPage}
          getProducts={getFeaturedProducts}
          sortValue={sortValue}
        />

        <ProductList
          title1="All"
          title2="Products"
          currentPage={currentPage}
          getProducts={getAllProducts}
          sortValue={sortValue}
        />
      </div>
      
      <Pagination
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductSection;
