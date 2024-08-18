import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { searchProducts } from '../services/api';
import SearchProductsList from './SearchProductsList';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
      try {
        // const response = await axios.get(`/api/products/search`, { params: { query } });
				const response = await searchProducts(query);
				console.log('no easy:', response.data.data)
        setResults(response.data.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    };
    
    if (query) {
      fetchResults();
    }
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      {results.length > 0 ? (
       <SearchProductsList products={results} />
      ) : (
        <p>No results found</p>
      )}
    </div>
  );
};

export default SearchResults;
