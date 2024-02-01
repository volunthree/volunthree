import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
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

    <Container fluid className="d-flex vh-100" style={{ padding: '35px', backgroundColor: '#eefaca' }}>
      <Container
        className="d-flex flex-column border border-5 border-secondary"
        style={{
          minHeight: '100%',
          width: '100%',
          borderRadius: '20px',
          backgroundColor: 'white',
          padding: '10px',
          position: 'relative',
          overflow: 'auto'

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
        <Row>
          <Col>
            <p style={{ fontSize: '30px', marginLeft: '5px', marginBottom: '1px' }}>
              <span style={{ fontWeight: 'bold' }}> Volunteer Hours: </span> 30
            </p>
          </Col>
        </Row>
        <Row className="border border-5">
          <Col md={6}>
            <div className="justify-content-center" style={{ maxWidth: '100%' }}>
              <PieChart/>
            </div>
          </Col>
          <Col md={6}>
            <BarChart />
          </Col>
        </Row>


      </Container>
    </Container>
  </Container>
);
export default Report;
