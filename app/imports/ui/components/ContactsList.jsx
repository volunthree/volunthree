import React, { useState } from 'react';
import { Container, Card, Row, Image, Col, Button, Form } from 'react-bootstrap';
import { contactsList } from '../utilities/LocalVariables';
import MessageLog from './MessageLog';

/** Renders the contact list of a user and allows for selection of chat logs (Also renders chat logs themselves) */
const ContactsList = () => {
  const [selectedContact, setSelectedContact] = useState('');

  function handleClick(correspondingContact) {
    setSelectedContact(correspondingContact);
  }

  return (
    <Row style={{ height: '500px' }}>
      <Col xs={3}>
        <Card style={{ height: '500px' }}>
          <div style={{ height: '90%' }}>
            <Container style={{ overflowY: 'scroll', height: '99%' }}>
              <Container style={{ marginTop: '20px', marginBottom: '20px' }}>
                <Row className="text-center">
                  <h3> My Friends </h3>
                </Row>
                {contactsList.map((contact) => (
                  <Row>
                    <Card className="mb-3" onClick={() => handleClick(contact.email)} style={{ textDecoration: 'none' }}>
                      <Card.Body>
                        <Row>
                          <Col md={4}>
                            <Image src={contact.image} alt="Friend's Profile Picture" rounded fluid/>
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
            </Container>
          </div>
          <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            <Container fluid>
              <Button>Add Friend</Button>
            </Container>
          </div>
        </Card>
      </Col>
      <Col>
        <Card style={{ height: '500px' }}>
          <Row style={{ height: '80%' }}>
            <div style={{ overflowY: 'scroll', height: '90%', width: '99%', marginTop: '5px' }}>
              <Container>
                <MessageLog selectedContact={selectedContact} setSelectedContact={setSelectedContact} />
              </Container>
            </div>
          </Row>
          <Row style={{ paddingTop: '20px' }}>
            <Form>
              <Row style={{ width: '100%' }}>
                <Col xs={10} style={{ marginLeft: '60px' }}>
                  <Form.Group>
                    <Form.Control placeholder="Type a message out here..." />
                  </Form.Group>
                </Col>
                <Col style={{ width: '100%' }}>
                  <Button type="submit">Send</Button>
                </Col>
              </Row>
            </Form>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default ContactsList;
