import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { tempOpportunities, tempOrganizations } from '../utilities/LocalVariables';
import Opportunity from '../components/Opportunity';
import MapContainerOrganizations from '../components/MapContainerOrganizations';

/* Renders a page describing an event from the database of Volunteering events. Allows the user to see info on both the event and organization */
const VolunteerOrganization = () => {
  // TODO: Fix the routing getting to this page from anywhere in the application such that it uses the id to access data.
  const organizationID = useParams();
  const organization = tempOrganizations.find(org => org._id === parseInt(organizationID.id, 10));
  return (
    <Container fluid>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/headerImage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '250px',
          color: 'white',
          textAlign: 'center',
          overflowY: 'auto',
          padding: 0,
        }}
      >
        <div>
          <h1>Volunteering Organizations </h1>
        </div>
      </Container>
      <Row>
        <Col md={4} className="d-flex justify-content-end">
          <img src={organization.orgImage} alt="logo" style={{ marginRight: '30px', width: '200px', height: '200px' }} />
        </Col>
        <Col md={6} className="d-flex justify-content-center">
          <div style={{ marginTop: '30px' }}>
            <h1>{organization.organizationName}</h1>
            <h6>{organization.organizationWebsite}</h6>
            <p>{organization.organizationDescription}</p>
          </div>
        </Col>
      </Row>
      <hr className="my-5" />
      <Container>
        <h2>Associated Opportunities:</h2>
        {tempOpportunities.filter(opp => opp.organization === organization.organizationName).map((opp) => (
          <Opportunity opp={opp} />
        ))}
      </Container>
      <MapContainerOrganizations filteredOpp={tempOpportunities.filter(opp => opp.organization === organization.organizationName)} />
    </Container>
  );
};

export default VolunteerOrganization;
