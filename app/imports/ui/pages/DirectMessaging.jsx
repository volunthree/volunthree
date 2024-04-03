import React from 'react';
import { Container, Card } from 'react-bootstrap';
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
        <ContactsList />
      </Container>
    </Card>
  </Container>
);

export default DirectMessaging;
