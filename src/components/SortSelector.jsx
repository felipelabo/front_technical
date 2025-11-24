import React, { memo } from 'react';
import { useFilters } from '../context/FilterContext';

const SORT_OPTIONS = [
  { value: 'date-desc', label: 'Newest First' },
  { value: 'date-asc', label: 'Oldest First' },
  { value: 'price-desc', label: 'Price: High to Low' },
  { value: 'price-asc', label: 'Price: Low to High' },
];

const SortSelector = memo(function SortSelector() {
  const { filters, updateFilter } = useFilters();

  // Manejo de cambios en el select de ordenamiento
  const handleSortChange = (e) => {
    updateFilter('sortBy', e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm font-semibold text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        value={filters.sortBy}
        onChange={handleSortChange}
        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
});

export default SortSelector;
