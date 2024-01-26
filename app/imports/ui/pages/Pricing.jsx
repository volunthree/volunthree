import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

/** Returns the Pricing page to the Voluntree website. */
const Pricing = () => (

  <Container
    fluid
    style={{ padding: 0 }}
  >
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/headerImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '250px',
        color: 'white',
        textAlign: 'center',
        overflowY: 'auto',
        padding: 0,
      }}
    >
      <div>
        <h1>Pricing</h1>
        <p>Contribute to a Non-Profit!</p>
      </div>
    </Container>
    <Container style={{ paddingTop: '25px' }}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col>
          <div>
            <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Make a Donation</h1>
            <p style={{ fontSize: '18px' }}>
              Find an organization that you would like to donate too!
              Millions of people across the Impact sector trust
              VolunTree. Join us in ensuring all of America’s
              communities are supported today, tomorrow, and for generations to come.
            </p>
          </div>
        </Col>
        <Col lg={5} style={{ paddingLeft: '30px' }}>
          <img src="/images/aboutPlaceHolder1.jpg" alt="Placeholder" />
        </Col>
      </Row>
      <Row style={{ paddingTop: '25px' }} className="d-flex align-items-center justify-content-center">
        <Col>
          <img src="/images/aboutPlaceHolder1.jpg" alt="Placeholder" />
        </Col>
        <Col style={{ paddingLeft: '30px' }}>
          <div>
            <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Become a Sponsor</h1>
            <p style={{ fontSize: '18px' }}>
              Regardless of who you are trying to activate into service or where you need to reach them, we have products, services,
              and partnership opportunities designed to magnify your impact—all powered by the immense value of our Open Network.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Pricing;
