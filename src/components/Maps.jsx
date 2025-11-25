import { useEffect, useRef, memo } from 'react';
import { MapContainer, TileLayer, useMap, Marker, Popup, Polygon } from 'react-leaflet';
import Card from './Card';

const FitBounds = ({ properties }) => {
  const map = useMap();

  useEffect(() => {
    if (properties && properties.length > 0) {
      // Crear un array con todas las coordenadas
      const bounds = properties.map(property => [
        property.lat,
        property.lng
      ]);

      // Ajustar el mapa para que muestre todos los marcadores
      map.fitBounds(bounds, {
        padding: [50, 50], // Padding en píxeles
        maxZoom: 15 // Zoom máximo para evitar acercarse demasiado
      });
    }
  }, [properties, map]);

  return null;
};

const Maps = memo(function Maps({properties, locations}){

    return (
        <MapContainer 
            className='rounded-xl'
            center={[40.4168, -3.7038]} 
            style={{height:"100%"}}  
            zoom={13} 
            scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {/*<FitBounds properties={properties} />*/}
            {locations?.map((zone) => (
                <Polygon
                key={zone.id}
                positions={zone.coordinates}
                pathOptions={{ color: 'purple' }}
                />
            ))}
            {properties.map((property) => (
                <Marker key={property.id} position={[property.lat, property.lng]}>
                    <Popup>
                        <Card item={property} min={true}/>
                    </Popup>
                </Marker>
            ))}
        </MapContainer>
    );
});

export default Maps;