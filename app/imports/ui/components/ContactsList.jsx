import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';
import { contactsList } from '../utilities/LocalVariables';

const ContactsList = () => (
  <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
    <Row className="text-center">
      <h3> My Friends </h3>
    </Row>
    {contactsList.map((contact) => (
      <Row>
        <Card className="mb-3">
          <Card.Body>
            <div className="d-flex align-items-center">
              <img src={contact.image} alt="Profile" className="rounded-circle mr-3" style={{ width: '45px', height: '45px', marginRight: '5px', marginLeft: 0 }} />
              <div>
                <h5>{contact.name}</h5>
                <p className="mb-1" style={{ textDecoration: 'underline' }}>{contact.email}</p>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Row>
    ))}
  </Container>
);

export default ContactsList;
