import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook para manejar peticiones asíncronas con estados de loading y error
 * @param {Function} asyncFunction - Función asíncrona a ejecutar
 * @param {Array} dependencies - Dependencias para re-ejecutar la función
 * @returns {Object} - { data, isLoading, error, refetch }
 */

const useAsync = (asyncFunction, dependencies = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Función para ejecutar la llamada asíncrona
  const execute = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const result = await asyncFunction();
      setData(result);
      
      return result;
    } catch (err) {
      const errorMessage = err.message || 'Error';
      setError(errorMessage);
      console.error('useAsync error:', err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, dependencies);

  useEffect(() => {
    execute();
  }, [execute]);

  const refetch = useCallback(() => {
    return execute();
  }, [execute]);

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useAsync;
