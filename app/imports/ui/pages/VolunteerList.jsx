import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const VolunteerList = () => {
  const tempEvents = [
    { id: 1, name: 'Temp', desc: 'Event' },
    { id: 2, name: 'Temp', desc: 'Event' },
    { id: 3, name: 'Temp', desc: 'Event' },
  ];
  return (
    <Container>
      <Col className="text-center">
        <h2>Volunteering Opportunities</h2>
      </Col>
      <Row>
        {tempEvents.map((opportunity) => (
          <Col md={7}>
            <Card>
              <Card.Body>
                <Card.Title>{opportunity.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VolunteerList;
