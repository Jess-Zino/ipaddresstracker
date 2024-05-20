import { MapContainer, TileLayer, Marker} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import MapUpdater from './MapUpdater';
import marker from './images/icon-location.svg'
const Map = ({ location }) => {
  return (
    <MapContainer
      center={location}
      zoom={13}
      style={{ height: '100vh', width: '100%', zIndex: -1 }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={location}>
      <img src={marker} alt="You're Here" />
      </Marker>
      <MapUpdater location={location} />
    </MapContainer>
  );
};

export default Map;

Map.propTypes = {
  location: PropTypes.array.isRequired,
};
