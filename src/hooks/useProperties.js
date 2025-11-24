import { useCallback } from 'react';
import { propertyApi } from '../api/propertyApi';
import useAsync from './useAsync';

/**
 * Custom hook para obtener propiedades con filtros
 * @param {Object} filters - Filtros a aplicar
 * @returns {Object} - { properties, isLoading, error, refetch }
 */
const useProperties = (filters) => {
  const fetchProperties = useCallback(async () => {
    const response = await propertyApi.getProperties({ 
      page: 1, 
      filters: filters 
    });
    return response.data;
  }, [filters]);

  const { data, isLoading, error, refetch } = useAsync(
    fetchProperties,
    [filters]
  );

  return {
    properties: data || [],
    isLoading,
    error,
    refetch,
  };
};

export default useProperties;
