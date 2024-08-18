import React, { useState, useEffect } from 'react';
import { getAllProducts } from '../../services/api';

const DataFetcher = ({ searchTerm, render }) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await getAllProducts(currentPage);
        setProducts(response.data.data.products);
        setTotalPages(response.data.data.pagination.totalPages);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, searchTerm]);

  return render({ products, currentPage, totalPages, setCurrentPage });
};

export default DataFetcher;
