import { mockProperties, mockLocations, propertyTypes } from "./mockData";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const propertyApi = {
  getProperties: async ({ page = 1, filters = {} }) => {
    await delay(400);

    let filtered = [...mockProperties];

    // Búsqueda por texto (location)
    if (filters.searchQuery && filters.searchQuery.trim() !== '') {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((p) =>
        p.location.toLowerCase().includes(query)
      );
    }

    // Filtro por features (todas deben estar presentes)
    if (filters.features && filters.features.length > 0) {
      filtered = filtered.filter((p) =>
        filters.features.every((feature) => p.features.includes(feature))
      );
    }

    // Filtros por precio
    if (filters.priceRange) {
      filtered = filtered.filter(
        (p) =>
          p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
      );
    }

    // Filtros por tipo de propiedad
    if (filters.propertyType && filters.propertyType !== '') {
      filtered = filtered.filter(
        (p) => p.propertyType.toLowerCase() === filters.propertyType.toLowerCase()
      );
    }

    // Filtros por habitaciones
    if (filters.bedrooms && filters.bedrooms !== '') {
      filtered = filtered.filter(
        (p) => p.bedrooms >= parseInt(filters.bedrooms)
      );
    }

    // Filtros por area
    if (filters.area && filters.area !== '') {
      filtered = filtered.filter(
        (p) => p.area >= filters.area
      );
    }

    // Ordenamiento
    if (filters.sortBy) {
      filtered.sort((a, b) => {
        switch (filters.sortBy) {
          case 'price-asc':
            return a.price - b.price;
          case 'price-desc':
            return b.price - a.price;
          case 'date-asc':
            return new Date(a.dateAdded) - new Date(b.dateAdded);
          case 'date-desc':
            return new Date(b.dateAdded) - new Date(a.dateAdded);
          default:
            return 0;
        }
      });
    }

    return {
      data: filtered.slice((page - 1) * 12, page * 12),
      total: filtered.length,
      page,
    };
  },

  getProperty: async (id) => {
    await delay(500);
    return mockProperties.find((p) => p.id === id);
  },

  getLocations: async () => {
    await delay(300);
    return mockLocations;
  },

  getPropertyTypes: async () => {
    await delay(300);
    return propertyTypes;
  },
};
