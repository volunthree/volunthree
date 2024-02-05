import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/** Returns the about us page to the Voluntree website. */
const AboutUs = () => (
  // TODO: Perhaps ask client what exactly she wants in her About Us Page
  // TODO: Find actual pictures to use
  <Container
    fluid
    id={PAGE_IDS.ABOUT_US}
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
        <h1>About Us</h1>
        <p>Streamlining The Volunteer Experience</p>
      </div>
    </Container>
    <Container style={{ paddingTop: '25px' }}>
      <Row className="d-flex align-items-center justify-content-center">
        <Col>
          <div>
            <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Our Mission</h1>
            <p style={{ fontSize: '18px' }}>
              Our mission is to empower individuals to impact their communities by enhancing the volunteer experience. We aim to remove barriers for volunteers and philanthropists, providing an accessible platform that connects community
              needs with those eager to help. Recognizing the inherent desire to contribute, our platform is designed to facilitate and streamline the process of finding and engaging in volunteer opportunities. We are dedicated to making it
              easier for those ready to serve to connect with the avenues where they can make the most impact.

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
            <h1 style={{ textAlign: 'center', paddingBottom: '10px' }}>Transforming Volunteer Engagement</h1>
            <p style={{ fontSize: '18px' }}>
              We strive to remove the friction that both volunteers and organizers may face during set up. So, we want to create
              a platform that is both easy and engaging to use. Not only that, we also want to socialize the volunteer experience, bringing volunteering
              into communities. Thus, to do this: we address the core reasons individuals choose to volunteer, and we address the problem of
              recruitment.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default AboutUs;
