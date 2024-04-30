import React from 'react';
import PropTypes from 'prop-types';
import { Card, Col } from 'react-bootstrap';
import { PersonCircle } from 'react-bootstrap-icons';

const ServiceCard = ({ request }) => (
  <Col md={8}>
    <Card style={{ width: '100%', marginBottom: '20px', textDecoration: 'none' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 15 }}>
          {/* Replace the image with a user icon */}
          <PersonCircle style={{ width: '150px', height: 'auto' }} />
        </div>
        <div style={{ flex: '75%' }}>
          <Card.Body>
            <Card.Title>{request.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Requested by: Anonymous</Card.Subtitle>
            <Card.Text><strong>Category: </strong> {request.category}</Card.Text>
            <Card.Text><strong>Location: </strong> {request.location}</Card.Text>
            <Card.Text><strong>Skills: </strong> {request.skills}</Card.Text>
          </Card.Body>
        </div>
      </div>
    </Card>
  </Col>
);

ServiceCard.propTypes = {
  request: PropTypes.shape({
    title: PropTypes.string,
    category: PropTypes.string,
    location: PropTypes.string,
    skills: PropTypes.string,
  }).isRequired,
};

export default ServiceCard;
