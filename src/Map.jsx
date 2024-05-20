import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import L from 'leaflet';
import MapUpdater from './MapUpdater';
import marker from './images/icon-location.svg'
const Map = ({ location }) => {
  const customIcon = L.icon({
    iconUrl: './images/icon-location.svg', // Replace with the path to your custom icon
    iconSize: [38, 38], // size of the icon
    iconAnchor: [22, 38], 
    popupAnchor: [-3, -38]
  });
  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ height: '100vh', width: '100vw', zIndex: -1 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location} icon={customIcon} >
      <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
      <MapUpdater location={location} />
    </MapContainer>
  );
};

export default Map;

Map.propTypes = {
  location: PropTypes.array.isRequired,
};
