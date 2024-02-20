import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import PieChart from '../components/PieChart';
import BarChart from '../components/BarChart';

/** Returns the Report page to the Voluntree website. */
const GroupInfo = () => (

  <Container
    fluid
    id="group-info-page"
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
        <h1> Group Info </h1>
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
              <span style={{ fontWeight: 'bold' }}> Creation Date: </span> February XX, 20XX
            </p>
          </Col>
          <Col md={1}>
            <a href="https://www.google.com"> Main Site </a>
          </Col>
          <Col md={1}>
            <a href="https://www.google.com"> Calendar </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontSize: '30px', marginLeft: '5px', marginBottom: '1px' }}>
              <span style={{ fontWeight: 'bold' }}> Preference: </span> Agriculture
            </p>
          </Col>
          <Col md={2}>
            <a href="https://www.google.com"> Contact Us </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <p style={{ fontSize: '30px', marginLeft: '5px', marginBottom: '1px' }}>
              <span style={{ fontWeight: 'bold' }}> Members: </span> XX
            </p>
          </Col>
        </Row>
        <Row className="pb-3">
          <Col>
            <h style={{ fontSize: '30px', marginLeft: '5px', marginBottom: '1px' }}>
              <span style={{ fontWeight: 'bold' }}> Objective: </span> We like agriculture.
            </h>
          </Col>
        </Row>

        <Container
          className="border border-3"
          style={{
            width: '95%',
            borderRadius: '20px',
            backgroundColor: '#f2faf9',
          }}
        >
          <Row className="p-3">
            <Col md={6}>
              <div className="pt-3 mx-auto" style={{ maxWidth: '75%' }}>
                <img src="/images/groupinfo/kanewai1.jpg" alt="Substitute Image" style={{ maxHeight: 300 }} />
              </div>
            </Col>
            <Col md={6}>
              <div className="pt-3 mx-auto" style={{ maxWidth: '75%' }}>
                <img src="/images/groupinfo/taro.jpg" alt="Taro Substitute" style={{ maxHeight: 300 }} />
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center pt-3 pb-4">
            <Col className="text-center">
              <Button> Join Now </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </Container>
  </Container>
);
export default GroupInfo;
