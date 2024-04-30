import React from 'react';
import PropTypes from 'prop-types';
import { Button, Card, Col, Image } from 'react-bootstrap';

const ServiceCard = ({ request }) => (
  <Col md={15}>
    <Card style={{ width: '100%', marginBottom: '20px', textDecoration: 'none' }}>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 15 }}>
          <Image src={request.image} alt={request.title} style={{ width: '240px', height: 'auto' }} />
        </div>
        <div style={{ flex: '75%' }}>
          <Card.Body>
            <Card.Title>{request.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Requested by: {request.userName}</Card.Subtitle>
            <Card.Text><strong>Location: </strong> {request.location} <strong>| When: </strong> {request.timeOfRequest}</Card.Text>
            <Card.Text>{request.description}</Card.Text>
            <Card.Text>Skills: {request.skills}</Card.Text>
            <div className="d-flex justify-content-center" style={{ width: '100%' }}>
              <Button variant="primary" style={{ marginRight: 10 }}>Inquire More</Button>
              <Button variant="success">Express Interest </Button>
            </div>
          </Card.Body>
        </div>
      </div>
    </Card>
  </Col>
);

ServiceCard.propTypes = {
  request: PropTypes.shape({
    image: PropTypes.string,
    title: PropTypes.string,
    userName: PropTypes.string,
    location: PropTypes.string,
    timeOfRequest: PropTypes.string,
    skills: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

export default ServiceCard;
