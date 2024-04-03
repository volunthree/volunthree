import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const DefaultLandingPage = () => (
  <div>
    <Container fluid style={{ paddingTop: '20px', margin: '20px', justifyContent: 'center', paddingLeft: '5rem', paddingRight: '5rem' }}>
      <Row className="d-flex shadow align-items-center">
        <Col xs={12} md={8} className="text-center" style={{ padding: '2.5rem' }}>
          <h2>Discover Volunteer Opportunities</h2>
          <p>
            Discover new opportunities to volunteer and make an impact. Search through our vast array of volunteering
            opportunities and organizations that you can participate in! Commit to a cause and connect with like-minded individuals.
          </p>
          <Row className="d-flex text-center">
            <Col style={{ maxWidth: 550 }}>
              <Button className="text-center" variant="outline-primary" as={NavLink} to="/volunteer-opportunities" style={{ paddingLeft: '5px' }}> Find Volunteering Opportunities </Button>
            </Col>
            <Col style={{ maxWidth: 650 }}>
              <Button variant="outline-primary" as={NavLink} to="/volunteer-organizations"> Look through Volunteering Organizations </Button>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={4} className="d-flex align-content-center justify-content-center">
          <img src="/images/discover.png" alt="Search Info" style={{ maxHeight: 180 }} />
        </Col>
      </Row>
    </Container>
    <Container fluid style={{ padding: 10, margin: '20px' }}>
      <Row
        className="align-items-center"
        style={{
          height: '400px',
          textAlign: 'center',
        }}
      >
        <Col md={5}>
          <Carousel fade>
            <Carousel.Item interval={3000}>
              <img src="/images/carousel1.png" alt="Group of People Planting Tree" style={{ maxWidth: '615px', maxHeight: '408px' }} />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/images/carousel2.jpg" alt="Volunteers at Shelter" style={{ maxWidth: '615px', maxHeight: '408px' }} />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img src="/images/carousel3.jpg" alt="Woman Delivering food to Man" style={{ maxWidth: '615px', maxHeight: '408px' }} />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={7}>
          <div style={{ marginLeft: '40px', marginRight: '40px' }}>
            <h2>What is The Voluntree?</h2>
            <p>At The Voluntree, we believe in simplifying volunteering, fostering connections, and making an impact. Our platform empowers you to effortlessly discover, connect,
              and contribute to meaningful causes, all while connecting with like-minded individuals who share your passion. With The Voluntree, you can streamline your volunteer journey, expand your network,
              and amplify your impact, all in one place. Soon, you can join us in building a stronger, more connected community through the power of volunteering.
            </p>
            <Button variant="success" as={NavLink} to="/aboutus"> Learn More about Voluntree </Button>
          </div>
        </Col>
      </Row>
    </Container>
    <Container fluid style={{ paddingTop: '20px', paddingRight: '5rem', paddingLeft: '5rem', paddingBottom: '30px' }}>
      <Row className="d-flex shadow align-items-center">
        <Row fluid className="text-center" style={{ margin: '15px' }}>
          <h1> Our Impact </h1>
          <p> Here are some statistics of the impact that we have had on the community through our various organizations and opportunities. </p>
        </Row>
        <Row>
          <Col className="text-center">
            <Odometer value={Math.floor(Math.random() * 1000)} format="d" style={{ fontSize: '3rem' }} />
            <h5 style={{ textDecoration: 'none' }}>Hours Served</h5>
          </Col>
          <Col className="text-center">
            <Odometer value={Math.floor(Math.random() * 1000)} format="d" style={{ fontSize: '3rem' }} />
            <h5>Persons Served</h5>
          </Col>
          <Col className="text-center">
            <Odometer value={Math.floor(Math.random() * 1000)} format="d" style={{ fontSize: '3rem' }} />
            <h5>Rides Shared</h5>
          </Col>
          <Col className="text-center">
            <Odometer value={Math.floor(Math.random() * 1000)} format="d" style={{ fontSize: '3rem' }} />
            <h5>Communities Changed</h5>
          </Col>
        </Row>
        <Row fluid className=" justify-content-center" style={{ margin: '15px' }}>
          <Button style={{ maxWidth: '250px' }} variant="outline-dark" as={NavLink} to="/signin"> Sign in to view your Impact! </Button>
        </Row>
      </Row>
    </Container>
  </div>
);

export default DefaultLandingPage;