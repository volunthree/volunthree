import React from 'react';
import { Container, Card, Row, Image, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { contactsList } from '../utilities/LocalVariables';

const ContactsList = () => (
  <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
    <Row className="text-center">
      <h3> My Friends </h3>
    </Row>
    {contactsList.map((contact) => (
      <Row>
        <Card className="mb-3" as={NavLink} to="/profile" style={{ textDecoration: 'none' }}>
          <Card.Body>
            <Row>
              <Col md={4}>
                <Image src={contact.image} alt="Friend's Profile Picture" rounded fluid />
              </Col>
              <Col md={6}>
                <Container fluid>
                  <h5>{contact.name}</h5>
                  <p className="mb-1"><small><u>{contact.email}</u></small></p>
                </Container>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Row>
    ))}
  </Container>
);

export default ContactsList;
