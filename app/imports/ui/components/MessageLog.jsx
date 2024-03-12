import React from 'react';
import { Container, Row, Card, Col, Image } from 'react-bootstrap';
import { contactsList, messageLog, currentUser } from '../utilities/LocalVariables';

const MessageLog = () => (
  <Container>
    {messageLog.map((message) => (
      message.sender === currentUser ? (
        <Card className="my-3" style={{ textAlign: 'right' }}>
          <Card.Body>
            <Card.Text>{message.message}</Card.Text>
          </Card.Body>
        </Card>
      )
        : (
          <Card className="my-3" style={{ textAlign: 'left' }}>
            <Card.Body>
              <Row>
                <Col xs="auto">
                  <Image src={contactsList[0].image} alt="Profile" roundedCircle style={{ width: '50px', height: '50px' }} />
                </Col>
                <Col>
                  <Card.Title>{contactsList[0].name}</Card.Title>
                  <Card.Text>{message.message}</Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )
    ))}
  </Container>
);
export default MessageLog;
