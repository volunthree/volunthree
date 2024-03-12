import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

/** Change Username form appears on Account Recovery page. Rendered by ForgotChange page. */
const ChangeUsername = () => (
  <Card style={{ width: '50rem' }}>
    <Card.Body>
      <Form style={{ paddingBottom: '20px' }}>
        <Form.Label>Enter New Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form>
      <Form style={{ paddingBottom: '20px' }}>
        <Form.Label>Re-enter Username</Form.Label>
        <Form.Control type="username" placeholder="Username" />
      </Form>
      <Button>Submit</Button>
    </Card.Body>
  </Card>
);

export default ChangeUsername;
