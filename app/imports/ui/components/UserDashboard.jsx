import React from 'react';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import 'odometer/themes/odometer-theme-default.css';
import { tempOpportunities, tempOrganizations, contactsList } from '../utilities/LocalVariables';

// TODO: Replace these by the most recent events following the current date.
const tempEvent1 = tempOpportunities[1];
const tempEvent2 = tempOpportunities[7];
const tempOrg = tempOrganizations[1];

const UserDashboard = () => (
  <div style={{ alignContent: 'center' }}>
    <Container
      fluid
      className="rounded-5"
      style={{
        display: 'flex',
        paddingTop: '30px',
        paddingBottom: '20px',
        margin: '15px',
        justifyContent: 'center',
        paddingLeft: '4rem',
        paddingRight: '4rem',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/dashboard1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        alignItems: 'center',
        color: 'white',
        height: '200px',
        textAlign: 'center',
        overflowY: 'auto',
        padding: 0,
      }}
    >
      <div>
        <h1>Welcome back Kenji!</h1>
        <h6> Today is a great day to Volunteer!</h6>
      </div>
    </Container>
    <hr className="my-5" />
    <Row>
      <Col>
        <h2 className="mb-4 text-center font-weight-bold"> Here are two upcoming commitments you might be interested in: </h2>
      </Col>
    </Row>
    <Row>
      <Row className="mt-3 d-flex justify-content-center align-items-center">
        <Col md={6}>
          <h3> {tempEvent1.name}</h3>
          <p style={{ fontWeight: 'bold' }}>{tempEvent1.organization}</p>
          <p>{tempEvent1.description}</p>
        </Col>
        <Col md={4}>
          <div style={{ overflow: 'hidden' }}>
            <Image src={tempEvent1.pictureURL} fluid />
          </div>
        </Col>
      </Row>
      <Row className="mt-3 d-flex justify-content-center align-items-center text-center">
        <h4> When: {tempEvent1.opportunityDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} | Where: {tempEvent1.location} </h4>
      </Row>
      <Row>
        <div className="text-center">
          <Button variant="success" style={{ marginLeft: 10, marginRight: 10 }} as={NavLink} to="/volunteer-opportunities/1"> Find out more about {tempEvent1.name}!</Button>
        </div>
      </Row>
    </Row>
    <Row className="mt-3 d-flex justify-content-center align-items-center">
      <Col md={4}>
        <Image src={tempEvent2.pictureURL} fluid />
      </Col>
      <Col md={6}>
        <h3> {tempEvent2.name}</h3>
        <p style={{ fontWeight: 'bold' }}>{tempEvent2.organization}</p>
        <p>{tempEvent2.description}</p>
      </Col>
    </Row>
    <Row className="mt-3 d-flex justify-content-center align-items-center text-center">
      <h4> When: {tempEvent2.opportunityDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })} | Where: {tempEvent2.location} </h4>
    </Row>
    <Row>
      <div className="text-center">
        <Button variant="success" style={{ marginLeft: 10, marginRight: 10 }} as={NavLink} to="/volunteer-opportunities/7"> Find out more about {tempEvent2.name}!</Button>
      </div>
    </Row>
    <hr className="my-5" />
    <Container>
      <Row>
        <Col>
          <h2 className="mb-4 text-center font-weight-bold"> Volunteer Organization of the Day: </h2>
        </Col>
      </Row>
    </Container>
    <Container fluid style={{ paddingTop: '20px', margin: '20px', justifyContent: 'center', paddingLeft: '5rem', paddingRight: '5rem' }}>
      <Row className="d-flex shadow align-items-center">
        <Col md={5} className="text-center">
          <Image src={tempOrg.orgImage} fluid />
        </Col>
        <Col md={6}>
          <div className="text-center">
            <h4>{tempOrg.organizationName}</h4>
            <p>{tempOrg.organizationDescription}</p>
            <div className="d-flex justify-content-center">
              <Image src={contactsList[0].image} roundedCircle style={{ width: '50px', height: '50px' }} />
              <p className="mt-2" style={{ paddingLeft: 10, fontWeight: 'bold', paddingBottom: 20 }}>Your friend John has helped this organization before.</p>
            </div>
            <div className="text-center">
              <Button variant="success" style={{ marginLeft: 10, marginRight: 10 }} as={NavLink} to=""> Find out more about {tempOrg.organizationName}!</Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
    <hr className="my-5" />
  </div>
);

export default UserDashboard;
