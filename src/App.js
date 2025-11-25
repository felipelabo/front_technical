import "./App.css";
import { useEffect, useState, useCallback } from "react";
import {propertyApi} from "./api/propertyApi";
import Card from "./components/Card";
import Filters from "./components/Filters";
import SkeletonCard from "./components/skeleton/SkeletonCard";
import { useFilters } from "./context/FilterContext";
import Maps from "./components/Maps";
import SortSelector from "./components/SortSelector";
import ViewSelector from "./components/ViewSelector";
import SearchBar from "./components/SearchBar";
import useProperties from "./hooks/useProperties";
import { MdErrorOutline, MdOutlineSearchOff, MdNotificationsNone, MdKeyboardArrowDown } from "react-icons/md";
import { RiPokerDiamondsFill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";


const VIEW_MODES = {
  GRID: 'grid',
  MAP: 'map'
};

function App() {

  const [locations, setLocations] = useState([]);
  const [viewMode, setViewMode] = useState(VIEW_MODES.GRID);
  const { filters } = useFilters();
  
  // Usando custom hook para manejar properties con loading y error
  const { properties, isLoading, error, refetch } = useProperties(filters);

  const handleViewChange = useCallback((mode) => {
    setViewMode(mode);
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locations = await propertyApi.getLocations();
        setLocations(locations);
      } catch (err) {
        console.error('Error fetching locations:', err);
      }
    }

    fetchLocations();
  }, []);

  console.log('Rendered App with properties:', properties);
  return (
    <div className="App">
      <header className="header flex gap-2 flex-col sm:flex-row items-center px-6 py-4 bg-white">
        <h1 className="flex-1 text-2xl flex items-center justify-start gap-1 ">
          <RiPokerDiamondsFill className="text-blue-500 text-3xl"/>
          Property Explorer
        </h1>
        <SearchBar className={''} />
        <div className="flex-1 items-center hidden sm:flex justify-end gap-4 order-1 sm:order-3">
          <button 
            className="p-2 bg-white border border-gray-200 rounded-full transition-colors"
            aria-label="Notifications"
          >
            <MdNotificationsNone className="text-2xl text-blue-500" />
          </button>
          <button 
            className="flex items-center gap-1 p-2 bg-white border border-gray-200 rounded-full transition-colors"
            aria-label="User profile"
          >
            <FaUserCircle className="text-2xl text-gray-600" />
            <MdKeyboardArrowDown/>
          </button>
        </div>
      </header>

      <main className="main-content">

        {/* Panel de filtros */}
        <Filters />

        {/* Area de propiedades */}
        <section className="properties-view">

          {/* Barra de cambio de vista y ordenamiento */}
          <div className="view-toggle flex gap-4 flex-col md:flex-row justify-end items-center mb-4 min-h-12">
            {/*<ViewSelector handleViewChange={handleViewChange} viewMode={viewMode} variable={VIEW_MODES} />*/}          
            <SortSelector />
          </div>

          {/* Contenido de propiedades */}
          {viewMode === VIEW_MODES.MAP ? (
            <Maps properties={properties} locations={locations} />
          ) : (
            <div className="content-area">
              
              {isLoading ? (
                Array.from({ length: 6 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              ) : error ? (
                <div className="col-span-full flex flex-col items-center justify-center py-12">
                  <div className="text-red-500 text-center flex flex-col items-center">
                    <MdErrorOutline className="text-5xl"/>
                    <h3 className="text-lg font-semibold mb-2">Error loading properties</h3>
                    <button 
                      onClick={refetch}
                      className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors font-semibold"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              ) : properties.length === 0 ? (
                <div className="col-span-full flex flex-col items-center justify-center py-12">
                  <div className="text-gray-500 text-center flex flex-col items-center">
                    <MdOutlineSearchOff className="text-5xl" />
                    <h3 className="text-lg font-semibold mb-2">No properties found</h3>
                  </div>
                </div>
              ) : (
                properties.map((item) => (
                  <Card key={item.id} item={item} />
                ))
              )}
            </div>
          )}
        </section>

        <section className="properties-view map-content">
          <Maps properties={properties} locations={locations} />
        </section>
      </main>
    </div>
  );
}

export default App;
