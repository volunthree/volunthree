import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/* A simple static component to render some text for the landing page. */
const FAQ = () => (
  <Container id={PAGE_IDS.LANDING} className="py-3">
    <Row className="align-middle text-center">

      <Col xs={8} className="d-flex flex-column justify-content-center">
        <h1>FAQ</h1>
        <ol>

          <li><strong>How will we Amplify Impact? (volunteers)</strong>
            Our platform enhances the volunteer experience by addressing the core reasons individuals choose to
            volunteer
          </li>

          <li><strong>How will we Amplify Impact? (nonprofits)</strong>
            Our platform directly addresses the biggest challenge faced by volunteer managers: Volunteer Recruitment*
            Our platform also indirectly addresses many of the top goals for volunteer managers.
          </li>

        </ol>
      </Col>

    </Row>
  </Container>
);

export default FAQ;
