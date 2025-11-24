import React, { useState, useEffect, memo, useCallback } from 'react';
import { useFilters } from '../context/FilterContext';
import { MdSearch, MdClose } from 'react-icons/md';

const SearchBar = memo(function SearchBar() {
  const { updateFilter, filters } = useFilters();
  const [searchInput, setSearchInput] = useState(filters.searchQuery || '');

  // Debounce para la búsqueda de texto - solo actualizar si cambió
  useEffect(() => {
    if (searchInput === filters.searchQuery) return;
    
    const timer = setTimeout(() => {
      updateFilter('searchQuery', searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, updateFilter]);

  // Manejo de cambios en el input de búsqueda
  const handleSearchChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  // Limpiar el input de búsqueda
  const handleClearSearch = useCallback(() => {
    setSearchInput('');
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-blue-500">
        <MdSearch className="ml-3 text-gray-400 text-xl" />
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchChange}
          placeholder="Search by location (e.g., Gran Vía, Serrano)..."
          className="w-full px-3 py-2.5 outline-none text-gray-700"
        />
        {searchInput && (
          <button
            onClick={handleClearSearch}
            className="pr-3 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Clear search"
          >
            <MdClose className="text-xl" />
          </button>
        )}
      </div>
    </div>
  );
});

export default SearchBar;
