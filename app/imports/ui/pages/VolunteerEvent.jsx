import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { PAGE_IDS } from '../utilities/PageIDs';
import { tempOpportunities, tempOrganizations } from '../utilities/LocalVariables';

/* Renders a table containing all of the Stuff documents. Use <StuffItem> to render each row. */
const VolunteerEvent = () => {
  // TODO: Fix the routing getting to this page from anywhere in the application such that it uses the id to access data.
  const opportunityID = useLocation().state.id;
  const event = tempOpportunities.find(opp => opp._id === opportunityID);
  const organization = tempOrganizations.find(org => org.organizationName === event.organization);
  // TODO: Fix the above code. It works until the context of the page access is broken.
  return (
    <Container
      fluid
      id={PAGE_IDS.LANDING}
      style={{ padding: 0 }}
    >
      <Container fluid style={{ padding: 20, margin: '50px' }}>
        <Row>
          <Col md={4} className="text-center shadow">
            <img src={event.pictureURL} alt="Logo" style={{ padding: 20, maxWidth: '350px' }} />
            <div style={{ marginBottom: 20 }}>
              <h1>
                {organization.organizationName}
              </h1>
              <p>
                <Link to={organization.organizationWebsite}>{organization.organizationWebsite}</Link>
              </p>
              <h3>
                Date posted:
              </h3>
              <p>
                {event.postedDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
              </p>
              <h3>
                Where:
              </h3>
              <p>
                {event.location}
              </p>
              <h3>
                When:
              </h3>
              <p>
                {event.opportunityDate.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' })}
              </p>
              <h3>
                Skills:
              </h3>
              <p>
                {event.skillsRequired}
              </p>
              <Button variant="outline-secondary" as={NavLink} to="/volunteer-opportunities"> Back to Search </Button>
            </div>
          </Col>
          <Col md={6} style={{ padding: 50 }}>
            <div>
              <h1>
                {event.name}
              </h1>
              <Row style={{ marginTop: 40 }}>
                <Col md={2}>
                  <Button variant="outline-success"> Volunteer </Button>
                </Col>
                <Col>
                  <Button variant="outline-secondary"> Share </Button>
                </Col>
              </Row>
              <div style={{ marginTop: 40 }}>
                {event.description}
              </div>
              <h1 style={{ marginTop: 40 }}>
                About {organization.organizationName}
              </h1>
              <div style={{ marginTop: 40 }}>
                {organization.organizationDescription}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default VolunteerEvent;
