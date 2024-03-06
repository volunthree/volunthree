import React from 'react';
import { Container, Col, Row, Nav } from 'react-bootstrap';

/** The Footer appears at the bottom of every page. Rendered by the App Layout component. */
const Footer = () => {
  const divStyle = { paddingTop: '20px' };
  return (
    <footer className="mt-auto bg-secondary text-white">
      <Container style={divStyle}>
        <Row>
          <Col xs={6}>
            Department of Information and Computer Sciences <br />
            University of Hawaii<br />
            Honolulu, HI 96822 <br />
            <Nav.Link href="https://github.com/volunthree">View GitHub Organization</Nav.Link>
          </Col>
          <Col xs={6}>
            <h5>Company</h5>
            <Nav.Link href="/contactus">Contact Us</Nav.Link>
            <Nav.Link href="/faq">Frequently Asked Questions</Nav.Link>
            <Nav.Link href="/ext">Privacy Policy</Nav.Link>
            <Nav.Link href="/ext">Terms of Use</Nav.Link>
          </Col>
        </Row>
        <div>Copyright © 2024</div>
      </Container>
    </footer>
  );
};

export default Footer;
