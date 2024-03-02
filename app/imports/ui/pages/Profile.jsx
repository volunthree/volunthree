import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import BarChart from '../components/BarChart';

const Profile = () => (
  <Container fluid>
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
        <h1> My Profile </h1>
      </div>
    </Container>
    <Container>
      <Row className="mt-3 d-flex justify-content-center align-items-center">
        <Col md={3}>
          <Image src="/images/thispersondoesnotexist.jpg" roundedCircle fluid />
        </Col>
        <Col md={7}>
          <h1>Robert Jenkins</h1>
          <p style={{ textDecoration: 'underline', fontStyle: 'italic' }}>robjenkins@gmail.com</p>
          <p>Honolulu, Hawaii</p>
          <p>Robert Jenkins is an avid volunteer who dedicates his time to helping those in need. He has a passion for
            making a difference in his community and is actively involved in food drives and pet shelters. His
            compassionate nature and willingness to lend a hand have made him an invaluable asset to various charitable
            organizations.
            In his spare time, Robert enjoys spending time outdoors, hiking, and exploring nature trails. He believes
            in the importance of giving back to society and strives to make a positive impact wherever he goes.
          </p>
          <Button variant="primary" className="w-100"> EDIT PROFILE </Button>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col>
          <h2 className="mb-4 text-center font-weight-bold"> Skills </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Food Distribution</h5>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Animal Care</h5>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Fundraising</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Event Planning</h5>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Community Outreach</h5>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Public Speaking</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Team Coordination</h5>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body className="text-center">
              <h5>Social Media Management</h5>
            </Card.Body>
          </Card>
        </Col>
        <Button variant="primary" className="w-100"> ADD/EDIT Skills </Button>
      </Row>
      <hr className="my-5" />
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <h2>My Stats</h2>
        </Col>
        <Col md={6}>
          <BarChart />
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Profile;
