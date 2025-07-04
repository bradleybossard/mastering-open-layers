import "ol/ol.css";
import './style.css';
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

// Create a map instance
const map = new Map({
  // HTML element where the map will be initialized
  target: document.getElementById('map'),

  // List of layers on the map
  layers: [
    // Create a tile layer. The source of the tiles will be OpenStreetMap
    new TileLayer({ source: new OSM() }),
  ],

  // Default map display parameters: center coordinates and zoom level
  view: new View({
    projection: 'EPSG:4326',
    center: [0, 0],
    center: [-122.61906834368548, 45.54754884458494],
    zoom: 19,
  }),
});