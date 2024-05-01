import React from 'react';
import { Container, Form, Pagination, Accordion } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import { tempOrganizations } from '../utilities/LocalVariables';
import Organization from '../components/Organization';

const VolunteerOrganizations = () => (
  <Container fluid id={PAGE_IDS.VOLUNTEER_OPPORTUNITIES}>
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
        <h1>Volunteering Organizations</h1>
        <p>We host a variety of different volunteering organizations. See if there is one you would like to participate in!</p>
      </div>
    </Container>
    <Container style={{ padding: 20 }}>
      <Form>
        <Form.Control type="search" placeholder="Search for a Volunteering Opportunity..." />
      </Form>
    </Container>
    <Container style={{ padding: 20 }}>
      <Accordion>
        {tempOrganizations.map((org) => (
          <Organization org={org} />
        ))}
      </Accordion>
    </Container>
    <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
      <Pagination>
        <Pagination.First />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Ellipsis />
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </Container>
  </Container>
);

export default VolunteerOrganizations;
