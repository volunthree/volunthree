import React from 'react';
import { Container, Form, Row, Button, Card } from 'react-bootstrap';

const Forgot = () => (
  <div className="box" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/forgotTree.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh', margin: '0px' }}>
    <Row>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          color: 'white',
          textAlign: 'center',
          height: '100px',
          padding: 0,
        }}
      >
        <div>
          <h1>Account Recovery</h1>
        </div>
      </Container>
      <Container className="d-inline-flex justify-content-center" style={{ marginTop: '30px' }}>
        <Card style={{ width: '50rem' }}>
          <Card.Body>
            <Card.Subtitle>Please enter the email address you used to create your account and we will send you a confirmation email.</Card.Subtitle>
            <Card.Text>Do not forget to check your junk folder.</Card.Text>
            <Form style={{ paddingBottom: '20px' }}>
              <Form.Label>Enter Account Email</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form>
            <Button>Submit</Button>
          </Card.Body>
        </Card>
      </Container>
    </Row>
  </div>
);

export default Forgot;
