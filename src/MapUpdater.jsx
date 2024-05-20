import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import PropTypes from 'prop-types';

const MapUpdater = ({ location }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(location);
  }, [location, map]);

  return null;
};

export default MapUpdater;
MapUpdater.propTypes = {
    location: PropTypes.array.isRequired,
  };