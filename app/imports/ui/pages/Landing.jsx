import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PAGE_IDS } from '../utilities/PageIDs';

/** Returns the homepage to the Voluntree website. */
const Landing = () => (
  // Currently this section is a static image with the Voluntree Text above it.
  // TODO: Make this into a carousel later?
  <Container
    fluid
    id={PAGE_IDS.LANDING}
    style={{ padding: 0 }}
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
        <h1>TheVoluntree</h1>
        <p>Volunteering Simplified. Impact Amplified.</p>
      </div>
    </Container>
    <Container fluid style={{ paddingTop: '20px', margin: '20px', justifyContent: 'center', paddingLeft: '5rem', paddingRight: '5rem' }}>
      <Row className="d-flex shadow align-items-center">
        <Col xs={12} md={8} className="text-center" style={{ padding: '2.5rem' }}>
          <h2>Discover Volunteer Opportunities</h2>
          <p>
            Discover new opportunities to volunteer and make an impact. Search through our vast array of volunteering
            opportunities and organizations that you can participate in! Commit to a cause and connect with like-minded individuals.
          </p>
          <Row className="d-flex text-center">
            <Col style={{ maxWidth: 550 }}>
              <Button variant="outline-primary" as={NavLink} to="/volunteer-opportunities" style={{ paddingLeft: '5px' }}> Find Volunteering Opportunities </Button>
            </Col>
            <Col style={{ maxWidth: 650 }}>
              <Button variant="outline-primary" as={NavLink} to="/"> Look through Volunteering Organizations </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="d-flex align-content-center justify-content-center">
          <img src="/images/discover.png" alt="Search Info" style={{ maxHeight: 180 }} />
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
          <img src="/images/landingImage2.png" alt="People Volunteering" style={{ maxWidth: '95%', height: '100%' }} />
        </Col>
        <Col md={7}>
          <div style={{ marginLeft: '40px', marginRight: '40px' }}>
            <h2>What is The Voluntree?</h2>
            <p>At The Voluntree, we believe in simplifying volunteering, fostering connections, and making an impact. Our platform empowers you to effortlessly discover, connect,
              and contribute to meaningful causes, all while connecting with like-minded individuals who share your passion. With The Voluntree, you can streamline your volunteer journey, expand your network,
              and amplify your impact, all in one place. Soon, you can join us in building a stronger, more connected community through the power of volunteering.
            </p>
            <Button variant="success" as={NavLink} to="/aboutus"> Learn More about Voluntree </Button>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Landing;
