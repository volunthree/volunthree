import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

const VolunteerList = () => {
  const tempEvents = [
    { id: 1, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 2, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 3, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 4, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 5, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 6, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 7, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 8, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },
    { id: 9, name: 'Temp', desc: 'Event', contact: 'john@foo.com' },

  ];
  return (
    <Container id={PAGE_IDS.VOLUNTEER_OPPORTUNITIES}>
      <Col className="text-center">
        <h2>Volunteering Opportunities</h2>
      </Col>
      <Row>
        {tempEvents.map((opportunity) => (
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>{opportunity.name}</Card.Title>
                <Card.Text>{opportunity.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default VolunteerList;
