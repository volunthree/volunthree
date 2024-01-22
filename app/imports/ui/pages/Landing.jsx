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
    <Container fluid style={{ paddingTop: '20px', margin: '20px' }}>
      <Row
        className="d-flex align-items-stretch"
      >
        <Col md={4}>
          <div className="text-center p-4 shadow h-100 d-flex flex-column justify-content-between">
            <div>
              <img src="/images/discover.png" alt="Search Info" style={{ maxHeight: 128 }} />
              <h3>Discover</h3>
              <p>Discover new opportunities to volunteer and make an impact. Search through our vast array of volunteering opportunities that you can participate in!</p>
              <Button variant="outline-primary" as={NavLink} to="/"> Find Volunteering Opportunities </Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center p-4 shadow h-100 d-flex flex-column justify-content-between">
            <div>
              <img src="/images/commit.webp" alt="Commit Clipboard" style={{ maxHeight: 128 }} />
              <h3>Commit</h3>
              <p>Commit to a cause and connect with like-minded individuals. Find out organizations that are actively helping the causes that YOU care about!</p>
              <Button variant="outline-success" as={NavLink} to="/"> Look through Volunteering Organizations </Button>
            </div>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center p-4 shadow h-100 d-flex flex-column justify-content-between">
            <div>
              <img src="/images/change.png" alt="People Volunteering" style={{ maxHeight: 128 }} />
              <h3>Change</h3>
              <p>Change the world and your community! Voluntree creates a detailed report showing you your contributions to the community!</p>
              <Button variant="outline-dark" as={NavLink} to="/"> View Our Impact </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid style={{ padding: 20, margin: '20px' }}>
      <Row
        className="align-items-center"
        style={{
          height: '400px',
          textAlign: 'center',
        }}
      >
        <Col md={5}>
          <img src="/images/landingImage2.png" alt="People Volunteering" style={{ maxWidth: '100%', height: '90%' }} />
        </Col>
        <Col md={7}>
          <div style={{ marginLeft: '40px', marginRight: '40px' }}>
            <h2>What is Voluntree?</h2>
            <p>At The Voluntree, we believe in simplifying volunteering, fostering connections, and making an impact. Our platform empowers you to effortlessly discover, connect,
              and contribute to meaningful causes, all while connecting with like-minded individuals who share your passion. With The Voluntree, you can streamline your volunteer journey, expand your network,
              and amplify your impact, all in one place. Soon, you can join us in building a stronger, more connected community through the power of volunteering.
            </p>
            <Button variant="success" as={NavLink} to="/"> Learn More about Voluntree </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Landing;
