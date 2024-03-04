import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Odometer from 'react-odometerjs';
import BarChart from '../components/BarChart';
import { tempOpportunities } from '../utilities/LocalVariables';

const tempEvent = tempOpportunities[0];
const Profile = () => (
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
          <Button variant="primary" className="w-100" as={NavLink} to="/editprofile"> EDIT PROFILE </Button>
        </Col>
      </Row>
      <hr className="my-5" />
      <Row>
        <Col>
          <h2 className="mb-4 text-center font-weight-bold"> Recent Commitment </h2>
        </Col>
      </Row>
      <Row className="mt-3 d-flex justify-content-center align-items-center">
        <Col md={6}>
          <h3> {tempEvent.name}</h3>
          <p style={{ fontWeight: 'bold' }}>{tempEvent.organization}</p>
          <p>{tempEvent.description}</p>
        </Col>
        <Col md={4}>
          <Image src={tempEvent.pictureURL} fluid />
        </Col>
      </Row>
      <Row className="mt-3 d-flex justify-content-center align-items-center text-center">
        <h4> When: {tempEvent.opportunityDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} | Where: {tempEvent.location} </h4>
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
      <Row>
        <Col>
          <h2 className="mb-4 text-center font-weight-bold"> My Impact </h2>
        </Col>
      </Row>
      <Row className="d-flex justify-content-center">
        <Col md={4}>
          <Col className="text-center">
            <Odometer value={Math.floor(Math.random() * 1000)} format="d" style={{ fontSize: '3rem' }} />
            <h5>Opportunities Completed</h5>
            <Odometer value={Math.floor(Math.random() * 1000)} format="d" style={{ fontSize: '3rem' }} />
            <h5>Persons Helped</h5>
            <Odometer value={Math.floor(Math.random() * 1000)} format="d" style={{ fontSize: '3rem' }} />
            <h5>Total Hours Served</h5>
          </Col>
          <Button variant="primary" className="w-100" as={NavLink} to="/report"> View my Full Report! </Button>
        </Col>
        <Col md={6}>
          <BarChart />
        </Col>
      </Row>
      <hr className="my-5" />
    </Container>
  </Container>
);

export default Profile;
