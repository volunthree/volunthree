import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';

/** Change Password form appears on Account Recovery page. Rendered by ForgotChange page. */
const ChangePassword = () => (
  <Card style={{ width: '50rem' }}>
    <Card.Body>
      <Form style={{ paddingBottom: '20px' }}>
        <Form.Label>Enter New Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form>
      <Form style={{ paddingBottom: '20px' }}>
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form>
      <Button>Submit</Button>
    </Card.Body>
  </Card>
);

export default ChangePassword;
