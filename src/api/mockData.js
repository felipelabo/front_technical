export const mockProperties = [
  {
    id: 1,
    image: "https://placehold.co/600x400",
    price: 450000,
    location: "Calle Gran Vía 28, Madrid",
    bedrooms: 2,
    area: 85,
    propertyType: "Apartment",
    lat: 40.4197,
    lng: -3.7013,
    dateAdded: "2024-03-15",
    features: ["Parking", "Metro", "Balcony"],
  },
  {
    id: 2,
    image: "https://placehold.co/600x400",
    price: 750000,
    location: "Calle Serrano 43, Madrid",
    bedrooms: 3,
    area: 120,
    propertyType: "House",
    lat: 40.4279,
    lng: -3.6885,
    dateAdded: "2024-03-14",
    features: ["Garage", "Garden"],
  },
  {
    id: 3,
    image: "https://placehold.co/600x400",
    price: 350000,
    location: "Calle Princesa 15, Madrid",
    bedrooms: 1,
    area: 65,
    propertyType: "Apartment",
    lat: 40.4235,
    lng: -3.7172,
    dateAdded: "2024-03-13",
    features: ["Metro", "Balcony"],
  },
  {
    id: 4,
    image: "https://placehold.co/600x400",
    price: 1200000,
    location: "Paseo de la Castellana 89, Madrid",
    bedrooms: 4,
    area: 200,
    propertyType: "Penthouse",
    lat: 40.4389,
    lng: -3.6922,
    dateAdded: "2024-03-12",
    features: ["Rooftop", "Concierge", "Gym"],
  },
];

export const mockLocations = [
  {
    id: 1,
    name: "Salamanca",
    count: 8,
    // Polígono aproximado, sentido horario, varios vértices para mayor realismo
    coordinates: [
      [40.45610, -3.68650],
      [40.45320, -3.67580],
      [40.44800, -3.66750],
      [40.44200, -3.66540],
      [40.43540, -3.66680],
      [40.42890, -3.67120],
      [40.42430, -3.67900],
      [40.42480, -3.68850],
      [40.42870, -3.69560],
      [40.43530, -3.69930],
      [40.44320, -3.69840],
      [40.44950, -3.69300],
      [40.45500, -3.68900],
    ]
  },

  {
    id: 2,
    name: "Centro",
    count: 15,
    // Centro es el casco histórico: polígono aproximado con más vértices
    coordinates: [
      [40.42790, -3.70950],
      [40.42580, -3.70380],
      [40.42400, -3.69850],
      [40.42160, -3.69500],
      [40.41780, -3.69380],
      [40.41390, -3.69510],
      [40.41160, -3.69880],
      [40.40990, -3.70390],
      [40.40980, -3.70890],
      [40.41160, -3.71320],
      [40.41490, -3.71600],
      [40.41970, -3.71480],
      [40.42450, -3.71320],
      [40.42700, -3.71120],
    ]
  },

  {
    id: 3,
    name: "Chamberí",
    count: 12,
    // Chamberí al NW de Centro / N de Moncloa: polígono aproximado
    coordinates: [
      [40.46650, -3.72600],
      [40.46320, -3.71850],
      [40.45920, -3.71180],
      [40.45250, -3.70680],
      [40.44700, -3.70350],
      [40.44150, -3.70440],
      [40.43640, -3.70850],
      [40.43400, -3.71450],
      [40.43420, -3.72240],
      [40.43680, -3.72680],
      [40.44260, -3.72980],
      [40.44990, -3.73020],
      [40.45630, -3.73010],
      [40.46180, -3.72800],
    ]
  },

  {
    id: 4,
    name: "Retiro",
    count: 10,
    // Retiro incluye el parque (polígono que engloba parque y barrios adyacentes)
    coordinates: [
      [40.42280, -3.67220],
      [40.42120, -3.66640],
      [40.41800, -3.66080],
      [40.41380, -3.65680],
      [40.40920, -3.65750],
      [40.40530, -3.66270],
      [40.40400, -3.66950],
      [40.40450, -3.67680],
      [40.40760, -3.68220],
      [40.41250, -3.68450],
      [40.41760, -3.68410],
      [40.42160, -3.68020],
      [40.42330, -3.67600],
    ]
  },
];


export const propertyTypes = [
  "House",
  "Apartment",
  "Duplex",
  "Penthouse",
  "Villa",
];
