import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

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
        <h1> Name's Report </h1>
      </div>
    </Container>

    <Container fluid style={{ padding: '35px', backgroundColor: '#eefaca' }}>
      <Container
        className="d-flex flex-column border border-4 border-secondary pb-4"
        style={{
          minHeight: '100%',
          width: '100%',
          borderRadius: '20px',
          backgroundColor: 'white',
          padding: '10px',
        }}
      >
        <Row>
          <Col>
            <p style={{ fontSize: '30px', marginLeft: '5px', marginBottom: '1px' }}>
              <span style={{fontWeight: 'bold' }}> Student Status: </span> (Full/Part)-time
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontSize: '30px', marginLeft: '5px', marginBottom: '1px' }}>
              <span style={{ fontWeight: 'bold' }}> Preference: </span> Agriculture
            </p>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col>
            <h style={{ fontSize: '30px', marginLeft: '5px', marginBottom: '1px' }}>
              <span style={{ fontWeight: 'bold' }}> Volunteer Hours: </span> 30
            </h>
          </Col>
        </Row>

        <Container className="border border-3" style={{
          width: '95%',
          borderRadius: '20px',
          backgroundColor: '#f2faf9',
        }}
        >
          <Row className="pt-4 pb-2">
          <Col className="text-center" md={6}>
            <h style={{ fontWeight: 'bold', fontSize: '15px' }}> Work Preference in 20XX </h>
          </Col>
          <Col className ="text-center" md={6}>
            <h style={{ fontWeight: 'bold', fontSize: '15px' }}> Hours Worked in 20XX </h>
          </Col>
        </Row>
        <Row className="p-3">
          <Col md={6}>
            <div className="mx-auto" style={{ maxWidth: '75%' }}>
              <PieChart />
            </div>
          </Col>
          <Col md={6}>
            <div className="mx-auto">
              <BarChart />
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center pt-5 pb-4">
          <Col className="text-center">
            <Button> Print Report </Button>
          </Col>
        </Row>
        </Container>
      </Container>
    </Container>
  </Container>
);
export default Report;
