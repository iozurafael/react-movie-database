import { useState, useEffect, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function SearchField({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('');
  const debounceTimerRef = useRef(null);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setSearchQuery(newValue);
    clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = setTimeout(() => {
      onSearch(newValue);
    }, 400);
  };

  useEffect(() => {
    return () => {
      clearTimeout(debounceTimerRef.current);
    };
  }, []);

  const handleClearClick = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="search-container">
      <div className="search-input-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a movie.."
          value={searchQuery}
          onChange={handleInputChange}
        />
        {searchQuery && (
          <button className="clear-button" onClick={handleClearClick}>
            <AiOutlineClose />
          </button>
        )}
      </div>
    </div>
  );
}

export default SearchField;
