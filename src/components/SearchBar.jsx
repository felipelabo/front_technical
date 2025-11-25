import React, { useState, useEffect, memo, useCallback } from 'react';
import { useFilters } from '../context/FilterContext';
import { MdSearch } from 'react-icons/md';

const SearchBar = memo(function SearchBar({className}) {
  const { updateFilter, filters } = useFilters();
  const [searchInput, setSearchInput] = useState(filters.searchQuery || '');
  const [propertyType, setPropertyType] = useState(filters.propertyType || '');
  const [area, setArea] = useState(filters.area || '');

  // Debounce para la búsqueda de texto - solo actualizar si cambió
  useEffect(() => {
    if (searchInput === filters.searchQuery) return;
    
    const timer = setTimeout(() => {
      updateFilter('searchQuery', searchInput);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchInput, updateFilter, filters.searchQuery]);

  // Manejo de cambios en el input de búsqueda
  const handleSearchChange = useCallback((e) => {
    setSearchInput(e.target.value);
  }, []);

  // Limpiar el input de búsqueda
  const handleClearSearch = useCallback(() => {
    setSearchInput('');
  }, []);

  return (
    <div className={`w-10/12 sm:w-1/3 flex items-center bg-white rounded-full shadow-sm border border-gray-200 overflow-hidden ${className}`}>
      
      <input
        type="text"
        value={searchInput}
        onChange={handleSearchChange}
        placeholder="Calle de Huesca 27, Tetuan, 28020 Madrid"
        className="flex-1 px-6 py-3 outline-none text-gray-700 placeholder-gray-400 min-w-[150px]"
      />
      
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-3 m-1 transition-colors"
        aria-label="Search"
      >
        <MdSearch className="text-xl" />
      </button>
    </div>
  );
});

export default SearchBar;
