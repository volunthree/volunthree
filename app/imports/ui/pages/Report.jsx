import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { Printer, Share } from 'react-bootstrap-icons';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

// Temporary graph variables until Users are Implemented
const barLabels = ['May 23', 'June 23', 'July 23', 'August 23', 'September 23', 'October 23', 'November 23', 'December 23', 'January 24', 'February 24', 'March 24', 'April 24'];
const barData = [25, 10, 35, 18, 42, 7, 31, 14, 29, 12, 19, 3];
const barLabel = "Kenji's Monthly Volunteer Hours";
const barXLabel = 'Month Of Volunteering';
const barYLabel = 'Total Hours';
const pieLabels = ['Green Earth Initiative', 'Helping Hands Foundation', 'Brighter Futures Association', 'Paws for Hope Rescue'];
const pieData = [18, 27, 33, 22];
const pieLabel = 'Contributions to Organizations';

/** Returns the Report page to the Voluntree website. */
const Report = () => (
  <Container
    fluid
    id="report-page"
    style={{ padding: 0 }}
  >
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
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1> Kenji's Report </h1>
      </div>
    </Container>
    <Container className="printable-report" style={{ borderRadius: '10px', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', marginBottom: 20, paddingBottom: 20 }}>
      <Row className="mt-3 d-flex justify-content-center align-items-right" style={{ paddingTop: 20, paddingBottom: 20, marginTop: 20, marginBottom: 20 }}>
        <Col md={3}>
          <Image src="/images/userImages/robJenkins.jpg" roundedCircle fluid style={{ width: '200px' }} />
        </Col>
        <Col md={7}>
          <h1>Kenji Sanehira</h1>
          <p><strong>Email: </strong> kenjisan@hawaii.edu </p>
          <p><strong>Address: </strong>32-1479 Testing St., Honolulu, HI, 96789</p>
          <p><strong>Phone: </strong>(808) 432-4493 </p>
          <p><strong>Skills </strong>Food Distribution, Animal Care, Fundraising, Event Planning, Community Outreach, Public Speaking, Team Coordination, Social Media Management</p>
        </Col>
      </Row>
      <hr />
      <h1 className="text-center"> User Impact </h1>
      <Row className="d-flex align-items-center justify-content-evenly">
        <Col md={3} className="text-center">
          <h1>15</h1>
          <h5>Opportunities Completed</h5>
        </Col>
        <Col md={3} className="text-center">
          <h1>34</h1>
          <h5>Persons Helped</h5>
        </Col>
        <Col md={3} className="text-center">
          <h1>295</h1>
          <h5>Total Hours Served</h5>
        </Col>
      </Row>
      <hr />
      <Row className="d-flex align-items-center justify-content-evenly">
        <Col md={6} className="text-center">
          <h3>Hours Served Over Time</h3>
          <BarChart labels={barLabels} data={barData} label={barLabel} xAxisTitle={barXLabel} yAxisTitle={barYLabel} />
        </Col>
        <Col md={6} className="text-center">
          <h3>Contribution To Organizations</h3>
          <PieChart labels={pieLabels} data={pieData} label={pieLabel} style={{ height: '400px' }} />
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-center mt-3">
        <Col xs="auto">
          <Button variant="primary">
            <Printer className="me-2" />
            Print Report
          </Button>
        </Col>
        <Col xs="auto">
          <Button variant="secondary">
            <Share className="me-2" />
            Share Report
          </Button>
        </Col>
      </Row>
    </Container>
  </Container>
);
export default Report;
