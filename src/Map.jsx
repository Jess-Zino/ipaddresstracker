import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import PropTypes from 'prop-types';
import MapUpdater from './MapUpdater';

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
