import React, { useEffect, useRef } from 'react';
import { Container, Row, Card, Col, Image } from 'react-bootstrap';
import { contactsList, currentUser } from '../utilities/LocalVariables';

/** Renders the chat logs between the two users */
const MessageLog = (parameters) => {

  const { selectedContact, currentMessageList } = parameters;

  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const filteredList = currentMessageList.filter(message => (message.sender === currentUser && message.receiver === selectedContact) || (message.sender === selectedContact && message.receiver === currentUser));
  const filteredInfo = contactsList.filter(contact => contact.email === selectedContact);

  useEffect(scrollToBottom, [filteredList]);

  return (
    <Row className="text-center">
      <h3>{filteredInfo[0].name}</h3>
      <Container>
        {filteredList.map((message) => (
          message.sender === currentUser ? (
            <Card key={message.id} className="my-3" style={{ textAlign: 'right' }}>
              <Card.Body>
                <Card.Text>{message.message}</Card.Text>
              </Card.Body>
            </Card>
          )
            : (
              <Card key={message.id} className="my-3" style={{ textAlign: 'left' }}>
                <Card.Body>
                  <Row>
                    <Col xs="auto">
                      <Image src={filteredInfo[0].image} alt="Profile" roundedCircle style={{ width: '50px', height: '50px' }} />
                    </Col>
                    <Col>
                      <Card.Title>{filteredInfo[0].name}</Card.Title>
                      <Card.Text>{message.message}</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )
        ))}
        <div ref={messagesEndRef} />
      </Container>
    </Row>
  );
};
export default MessageLog;
