import React, { useState } from 'react';
import { useNavigate  } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate ();

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <form className='input-side' onSubmit={handleSearch}>
			<div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}>
				<input
          className='main-input'
					type="text"
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					placeholder="Search for products..."
					style={{ height: 30, width: 400, padding: 5, margin: 0, borderRadius: 5, border: '1px solid rgb(229, 232, 235)' }}
					required
				/>
      	<button type="submit">Search</button>
			</div>	
    </form>
  );
};

export default SearchBar;
