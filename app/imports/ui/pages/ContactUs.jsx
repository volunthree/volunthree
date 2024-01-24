import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
/*
        <p>Sara Kenley, founder</p>
        <p>sarakenley@thevoluntree.com</p>
        <p>808-978-8290</p>
 */

const ContactUs = () => (
  <Container id={PAGE_IDS.LANDING} className="py-3">
    <Row className="align-middle text-center">
      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>Contact Us</h1>
        <div>
          <table>
            <tr>
              <td><Image roundedCircle src="/images/meteor-logo.png" width="150px" /></td>
              <td>
                Sara Kenley, founder
                <strong>Email:</strong> sarakenley@thevoluntree.com
                <strong>Phone number:</strong> 808-978-8290
              </td>
            </tr>
          </table>
        </div>
      </Col>
    </Row>
  </Container>
);

export default ContactUs;
