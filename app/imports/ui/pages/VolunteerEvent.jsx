import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PAGE_IDS } from '../utilities/PageIDs';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const VolunteerEvent = () => (
  <Container
    fluid
    id={PAGE_IDS.LANDING}
    style={{ padding: 0 }}
  >
    <Container fluid style={{ padding: 20, margin: '50px' }}>
      <Row>
        <Col md={4} className="text-center shadow">
          <img src="/images/forgotTree.jpg" alt="Logo" style={{ padding: 20, maxWidth: '300px' }} />
          <div>
            <h1>
              ORGANIZATION
            </h1>
            <p>
              Website.org
            </p>
            <h3>
              Date posted:
            </h3>
            <p>
              January 1, 2024
            </p>
            <h3>
              Where:
            </h3>
            <p>
              Location
            </p>
            <h3>
              When:
            </h3>
            <p>
              Date
            </p>
            <h3>
              Skills:
            </h3>
            <p>
              Skills here
            </p>
            <Button variant="outline-secondary" as={NavLink} to="/volunteer-opportunities"> Back to Search </Button>
          </div>
        </Col>
        <Col md={6} style={{ padding: 50 }}>
          <div>
            <h1>
              NAME OF VOLUNTEERING EVENT
            </h1>
            <Row style={{ marginTop: 40 }}>
              <Col md={2}>
                <Button variant="outline-success" as={NavLink}> Volunteer </Button>
              </Col>
              <Col>
                <Button variant="outline-secondary" as={NavLink}> Share </Button>
              </Col>
            </Row>
            <div style={{ marginTop: 40 }}>
              This organization does a lot of things like lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Enim neque volutpat ac tincidunt. Vitae semper quis lectus nulla at volutpat diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Ipsum dolor sit amet consectetur adipiscing elit duis tristique.
              Arcu ac tortor dignissim convallis. Sed faucibus turpis in eu. Elit ullamcorper dignissim cras tincidunt lobortis. Cras adipiscing enim eu turpis egestas pretium aenean pharetra. Urna id volutpat lacus laoreet non curabitur.
              met facilisis magna etiam tempor orci eu lobortis. Leo duis ut diam quam nulla porttitor massa. Egestas sed tempus urna et pharetra pharetra.
              Dui sapien eget mi proin sed libero enim. Sit amet dictum sit amet justo donec enim. Massa sed elementum tempus egestas sed sed risus pretium.
            </div>
            <h1 style={{ marginTop: 40 }}>
              ABOUT ORGANIZATION
            </h1>
            <div style={{ marginTop: 40 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Enim neque volutpat ac tincidunt. Vitae semper quis lectus nulla at volutpat diam. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget egestas. Ipsum dolor sit amet consectetur adipiscing elit duis tristique.
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default VolunteerEvent;
