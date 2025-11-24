import React, { createContext, useContext, useState, useCallback, useMemo } from 'react';

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {

  const [filters, setFilters] = useState({
    location: '',
    priceRange: [0,2000000],
    propertyType: '',
    area: 0,
    bedrooms: 1,
    sortBy: 'date-desc', // 'price-asc', 'price-desc', 'date-asc', 'date-desc'
    searchQuery: '',
    features: [],
  });

  // Debug: detectar cambios en filtros
  React.useEffect(() => {
    console.log('Filters changed:', filters);
  }, [filters]);

  // Actualizacion de filtros
  const updateFilter = useCallback((filterName, value) => {
    setFilters(prev => ({
      ...prev,
      [filterName]: value,
    }));
  }, []);

  // Actualizacion rango de precios
  const updatePriceRange = useCallback((min, max) => {
    setFilters(prev => ({
      ...prev,
      priceRange: [min,max]
    }));
  }, []);

  // Resetear filtros
  const resetFilters = useCallback(() => {
    setFilters({
      location: '',
      priceRange: [0,2000000],
      propertyType: '',
      area: 0,
      bedrooms: 1,
      sortBy: 'date-desc',
      searchQuery: '',
      features: [],
    });
  }, []);

  // Memoriza las funciones por separado para evitar recreaciones innecesarias
  const contextValue = useMemo(() => ({
    filters,
    updateFilter,
    updatePriceRange,
    resetFilters,
  }), [filters, updateFilter, updatePriceRange, resetFilters]);

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContext;

// Custom hook para usar el contexto
export const useFilters = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error('useFilters must be used within a FilterProvider');
  }
  return context;
};
