import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link, NavLink, useParams } from 'react-router-dom';
import { PAGE_IDS } from '../utilities/PageIDs';
import { tempOpportunities, tempOrganizations } from '../utilities/LocalVariables';

/* Renders a page describing an event from the database of Volunteering events. Allows the user to see info on both the event and organization */
const VolunteerEvent = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  // TODO: Fix the routing getting to this page from anywhere in the application such that it uses the id to access data.
  const opportunityID = useParams();
  const event = tempOpportunities.find(opp => opp._id === parseInt(opportunityID.id, 10));
  const organization = tempOrganizations.find(org => org.organizationName === event.organization);
  // TODO: Fix the above code. It works until the context of the page access is broken.
  return (
    <Container
      fluid
      id={PAGE_IDS.LANDING}
      style={{ padding: 0 }}
    >
      <Container fluid style={{ padding: 20, margin: '50px', alignContent: 'center' }}>
        <Row>
          <Col md={4} className="text-center shadow">
            <img src={organization.orgImage} alt="Logo" style={{ padding: 20, maxWidth: '200px' }} />
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
              <img src={event.pictureURL} alt="eventImage" style={{ padding: 3, maxWidth: '500px' }} />
              <h6>Join {event.size} other volunteers!</h6>
              <Row style={{ marginTop: 10 }}>
                {currentUser === '' ? (
                  <Col md={4}>
                    <Button variant="outline-success" as={NavLink} to="/signin"> Sign in to Volunteer </Button>
                  </Col>
                ) : (
                  <Col md={3}>
                    <Button variant="outline-success"> Volunteer </Button>
                  </Col>
                )}
                <Col style={{ display: 'flex', flexDirection: 'row' }}>
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
