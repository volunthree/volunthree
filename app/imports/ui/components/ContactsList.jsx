import React, { useState } from 'react';
import { Container, Card, Row, Image, Col, Button, Form } from 'react-bootstrap';
import { contactsList, messageLog, currentUser } from '../utilities/LocalVariables';
import MessageLog from './MessageLog';

/** Renders the contact list of a user and allows for selection of chat logs (Also renders chat logs themselves) */
const ContactsList = () => {
  const [selectedContact, setSelectedContact] = useState(contactsList[0].email);
  const [formInput, setFormInput] = useState('');
  const [currentMessageList, setCurrentMessageList] = useState(messageLog);

  function handleClick(correspondingContact) {
    setSelectedContact(correspondingContact);
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    const newMessage = {
      id: currentMessageList[currentMessageList.length - 1].id + 1,
      sender: currentUser,
      receiver: selectedContact,
      message: formInput,
    };
    const newArray = [...currentMessageList];
    newArray.push(newMessage);
    setCurrentMessageList(newArray);
    setFormInput('');
  };

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
                  <Row key={contact.id}>
                    <Card className="mb-3" onClick={() => handleClick(contact.email)} style={{ textDecoration: 'none' }}>
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
                <MessageLog selectedContact={selectedContact} currentMessageList={currentMessageList} />
              </Container>
            </div>
          </Row>
          <Row style={{ paddingTop: '20px' }}>
            <Form onSubmit={onFormSubmit}>
              <Row style={{ width: '100%' }}>
                <Col xs={10} style={{ marginLeft: '60px' }}>
                  <Form.Group>
                    <Form.Control type="text" placeholder="Type a message out here..." onChange={(e) => setFormInput(e.target.value)} value={formInput} />
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
