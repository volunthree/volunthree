import React from 'react';
import { Container, Form, Row, Col, Button, Card } from 'react-bootstrap';
import MessageLog from '../components/MessageLog.jsx';
import ContactsList from '../components/ContactsList.jsx';

/** DirectMessaging page where users can send messages with other users/organizations */
const DirectMessaging = () => (
  <Container fluid style={{ padding: 0 }}>
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/headerImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        overflowY: 'auto',
        padding: 0,
      }}
    >
      <div>
        <h1> Direct Messaging </h1>
      </div>
    </Container>
    <Card style={{ height: '600px', paddingTop: '50px' }}>
      <Container fluid className="d-flex flex-column" style={{ height: '500px' }}>
        <Row style={{ height: '500px' }}>
          <Col xs={3}>
            <Card style={{ height: '500px' }}>
              <div style={{ height: '90%' }}>
                <Container style={{ overflowY: 'scroll', height: '99%' }}>
                  <ContactsList />
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
                    <Row className="text-center">
                      <h3> John Doe </h3>
                    </Row>
                    <MessageLog />
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
      </Container>
    </Card>
  </Container>
);

export default DirectMessaging;
