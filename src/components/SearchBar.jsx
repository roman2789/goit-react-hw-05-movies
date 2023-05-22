import { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleQuery = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      alert('Enter the film title');
    }

    onSearch(query);
    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchQuery"
          autoComplete="off"
          onChange={handleQuery}
          value={query}
          placeholder="Search ..."
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
