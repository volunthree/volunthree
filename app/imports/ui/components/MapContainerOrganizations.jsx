import React, { useState } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import { Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const MapContainerOrganizations = ({ filteredOpp }) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const [showInfoWindow, setShowInfoWindow] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const handleMarkerClick = (marker, request) => {
    setActiveMarker(marker);
    setSelectedRequest(request);
    setShowInfoWindow(true);
  };

  const handleInfoWindowClose = () => {
    setShowInfoWindow(false);
    setActiveMarker(null);
  };

  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <Map
        google={window.google}
        zoom={11}
        initialCenter={{ lat: 21.4389, lng: -158.001 }} // Placeholder in Hawaii
      >
        {filteredOpp.map((request, index) => (
          <Marker
            key={index}
            position={{ lat: request.latitude, lng: request.longitude }}
            title={request.title}
            onClick={(props, marker) => handleMarkerClick(marker, request)}
          />
        ))}
        <InfoWindow
          marker={activeMarker}
          visible={showInfoWindow}
          onClose={handleInfoWindowClose}
        >
          <div>
            {selectedRequest && (
              <Card style={{ width: '18rem', margin: '10px' }}>
                <Card.Body>
                  <Card.Title>{selectedRequest.name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">When: {selectedRequest.opportunityDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}</Card.Subtitle>
                  <Card.Text>
                    <strong>Location:</strong> {selectedRequest.location}<br />
                    <strong>Description:</strong> {selectedRequest.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            )}
          </div>
        </InfoWindow>
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCBwLMpKug6S5uq-eQYKq1bCKWBVka1Ing',
})(MapContainerOrganizations);

MapContainerOrganizations.propTypes = {
  filteredOpp: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      userName: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
