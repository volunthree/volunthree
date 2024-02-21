import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';

const ContactsList = () => {
  const contactsList = ['Guy 1', 'Guy 2', 'Guy 3', 'Guy 4', 'Guy 5'];
  return (
    <Container>
      <Row><Card style={{ height: '100px' }}>{contactsList[0]}</Card></Row>
      <Row><Card style={{ height: '100px' }}>{contactsList[1]}</Card></Row>
      <Row><Card style={{ height: '100px' }}>{contactsList[2]}</Card></Row>
      <Row><Card style={{ height: '100px' }}>{contactsList[3]}</Card></Row>
      <Row><Card style={{ height: '100px' }}>{contactsList[4]}</Card></Row>
    </Container>
  );
};

export default ContactsList;
