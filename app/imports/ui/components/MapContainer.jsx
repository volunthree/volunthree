import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const MapContainer = () => (
  <div style={{ height: '100vh', width: '100%' }}>
    <Map
      google={window.google}
      zoom={11}
      initialCenter={{ lat: 21.4389, lng: -158.001 }} // Placeholder in Hawaii
    />
  </div>
);

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBwLMpKug6S5uq-eQYKq1bCKWBVka1Ing',
})(MapContainer);
