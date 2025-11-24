import { useState, useEffect, useCallback } from "react";
import { numberWithCommas } from "../utils/numberWithCommas";
import { propertyApi } from "../api/propertyApi";
import { useFilters } from "../context/FilterContext";
import { MdClose } from "react-icons/md";

const AVAILABLE_FEATURES = [
  'Parking',
  'Metro',
  'Balcony',
  'Garage',
  'Garden',
  'Rooftop',
  'Concierge',
  'Gym',
];

const Filters = () => {

    const { updateFilter, updatePriceRange, filters } = useFilters();
    const [rangePrice, setRangePrice] = useState(filters.priceRange[1]);
    const [locations, setLocations] = useState([]);
    const [propertyTypes, setPropertyTypes] = useState([]);
    const [selectedFeatures, setSelectedFeatures] = useState([]);

    const handleChangePrice = (e) => {
        setRangePrice(e.target.value);
    }

    // Debounce effect - solo actualiza si el valor realmente cambió
    useEffect(() => {
        const newPrice = Number(rangePrice);
        if (newPrice === filters.priceRange[1]) return;
        
        const timer = setTimeout(() => {
            updatePriceRange(0, newPrice);
        }, 500);

        return () => clearTimeout(timer);
    }, [rangePrice, updatePriceRange, filters.priceRange]);

    // Actualizar features en el contexto - solo si hay cambios reales
    useEffect(() => {
        const currentFeatures = filters.features || [];
        const hasChanged = selectedFeatures.length !== currentFeatures.length ||
                          selectedFeatures.some(f => !currentFeatures.includes(f));
        
        if (hasChanged) {
            updateFilter('features', selectedFeatures);
        }
    }, [selectedFeatures, updateFilter]);

    // Fetch locations y property types al montar el componente
    useEffect(() => {
        const fetchLocationData = async () => {
            const locations = await propertyApi.getLocations();
            setLocations(locations);
        }

        const fetchPropertyTypes = async () => {
            const types = await propertyApi.getPropertyTypes();
            setPropertyTypes(types);
        }

        fetchLocationData();
        fetchPropertyTypes();
    }, []);

    // Manejo de cambios en selects e inputs
    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        updateFilter(name, value);
    }

    //Selección y deselección de features
    const toggleFeature = useCallback((feature) => {
        setSelectedFeatures((prev) =>
            prev.includes(feature)
                ? prev.filter((f) => f !== feature)
                : [...prev, feature]
        );
    }, []);

    // Remover feature específico
    const removeFeature = useCallback((feature) => {
        setSelectedFeatures((prev) => prev.filter((f) => f !== feature));
    }, []);

    return (
        <aside className="filters-panel flex flex-col gap-4">
          
            {/* Filtro de precio */}
            <div className="filter-section">
                <div className="flex justify-between">
                    <h3 className="mb-1 font-bold ">Price:</h3>
                    <span className="font-bold">{numberWithCommas(rangePrice)}€</span>
                </div>
                
                <input 
                    type="range" 
                    min="0" 
                    max="2000000" 
                    step="50000" 
                    value={rangePrice} 
                    onChange={handleChangePrice}
                />
                <div className="flex justify-between text-xs">
                <span>0€</span>
                <span>2.000.000€</span>
                </div>
            </div>

            {/* Filtro de tipo de propiedad */}
            <div className="filter-section">
                <h3 className="mb-1 font-bold text-start">Property Type</h3>
                <select 
                    className="border rounded-md p-2"
                    onChange={handleFilterChange}
                    name="propertyType"
                >
                <option value="">All Types</option>
                {propertyTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
                </select>
            </div>

            {/* Filtro de habitaciones */}
            <div className="filter-section">
                <h3 className="mb-1 font-bold text-start">Bedrooms</h3>
                <select 
                    className="border rounded-md p-2"
                    onChange={handleFilterChange}
                    name="bedrooms"
                >
                    <option value="">Any</option>
                    <option value="1">1+</option>
                    <option value="2">2+</option>
                    <option value="3">3+</option>
                    <option value="4">4+</option>
                    <option value="5">5+</option>
                </select>
            </div>

            {/* Filtro de área */}
            <div className="filter-section">
                <h3 className="mb-1 font-bold text-start">Area (m²)</h3>
                <input 
                    type="number"
                    placeholder="Area"
                    className="border rounded-md p-2 w-full"
                    onChange={handleFilterChange}
                    name="area"
                />
            </div>

            {/* Filtro de ubicación */}
            <div className="filter-section">
                <h3 className="mb-1 font-bold text-start">Location</h3>
                <select 
                    className="border rounded-md p-2"
                    onChange={handleFilterChange}
                    name="location"
                >
                <option value="">All Locations</option>
                {locations.map((loc, index) => (
                    <option key={index} value={loc.id}>{loc.name}</option>
                ))}
                </select>
            </div>

            {/* Filtro de features */}
            <div className="filter-section">
                <h3 className="mb-2 font-bold text-start">Features</h3>
                
                {/* Features seleccionadas (chips) */}
                {selectedFeatures.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                    {selectedFeatures.map((feature) => (
                    <span
                        key={feature}
                        className="inline-flex items-center gap-1 bg-blue-500 text-white px-2 py-1 rounded-full text-xs font-medium"
                    >
                        {feature}
                        <button
                        onClick={() => removeFeature(feature)}
                        className="hover:bg-blue-600 rounded-full p-0.5 transition-colors"
                        aria-label={`Remove ${feature} filter`}
                        >
                        <MdClose className="text-xs" />
                        </button>
                    </span>
                    ))}
                </div>
                )}

                {/* Botones de features disponibles */}
                <div className="flex flex-wrap gap-2">
                {AVAILABLE_FEATURES.map((feature) => (
                    <button
                    key={feature}
                    onClick={() => toggleFeature(feature)}
                    className={`px-2 py-1 rounded-full text-xs font-medium transition-all ${
                        selectedFeatures.includes(feature)
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    aria-pressed={selectedFeatures.includes(feature)}
                    >
                    {feature}
                    </button>
                ))}
                </div>
            </div>

        </aside>
    );
};

export default Filters;