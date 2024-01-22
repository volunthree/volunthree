import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/** Returns the homepage to the Voluntree website. */
const Landing = () => (
  // Currently this section is a static image with the Voluntree Text above it.
  // TODO: Make this into a carousel later?
  <Container
    fluid
    id="landing-page"
    syle={{ padding: 0 }}
  >
    <Container
      fluid
      id="landing-image"
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/headerImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '350px',
        color: 'white',
        textAlign: 'center',
        overflowY: 'auto',
        padding: 0,
      }}
    >
      <div>
        <h1>The Voluntree</h1>
        <p>Volunteering Simplified. Impact Amplified.</p>
      </div>
    </Container>
    <Container fluid style={{ margin: '20px' }}>
      <Row
        className="align-items-center"
        style={{
          height: '400px',
          textAlign: 'center',
        }}
      >
        <Col md={5}>
          <img src="/images/landingImage2.png" alt="People Volunteering" style={{ maxWidth: '100%', height: 'auto' }} />
        </Col>
        <Col md={7}>
          <div style={{ marginLeft: '40px', marginRight: '40px' }}>
            <h2>What is Voluntree?</h2>
            <p>At The Voluntree, we believe in simplifying volunteering, fostering connections, and making an impact. Our platform empowers you to effortlessly discover, connect,
              and contribute to meaningful causes, all while connecting with like-minded individuals who share your passion. With The Voluntree, you can streamline your volunteer journey, expand your network,
              and amplify your impact, all in one place. Soon, you can join us in building a stronger, more connected community through the power of volunteering.
            </p>
            <Button variant="success" as={NavLink} to="/signin"> Discover More </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Landing;
