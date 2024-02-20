import React from 'react';
import { Container, Row, Card } from 'react-bootstrap';

const MessageLog = () => {
  const placeHolderMessage = 'Hey friend';
  const placeHolderUser = 'Friend';

  return (
    <Container>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>{placeHolderUser}</Card.Title>
            <Card.Text>{placeHolderMessage}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>{placeHolderUser}</Card.Title>
            <Card.Text>{placeHolderMessage}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>{placeHolderUser}</Card.Title>
            <Card.Text>{placeHolderMessage}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>{placeHolderUser}</Card.Title>
            <Card.Text>{placeHolderMessage}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Title>{placeHolderUser}</Card.Title>
            <Card.Text>{placeHolderMessage}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
      <Row>
        <Card>
          <Card.Body>
            <Card.Text>I am going to find you.</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default MessageLog;
