import React from 'react';
import { Row, Container, Col, Form, Dropdown, Pagination } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import Opportunity from '../components/Opportunity';
import { tempOpportunities } from '../utilities/LocalVariables';

const VolunteerOpportunities = () => (
  <Container fluid id={PAGE_IDS.VOLUNTEER_OPPORTUNITIES} style={{ padding: 0 }}>
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
        <h1>Volunteering Opportunities</h1>
        <p>View our vast collection of volunteering opportunities.</p>
      </div>
    </Container>
    <Container style={{ padding: 20 }}>
      <h6>Filter By:</h6>
      <Row style={{ padding: 10, alignContent: 'center' }}>
        <Col style={{ alignContent: 'center' }}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter by Organization
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {tempOpportunities.map((x) => (
                <Dropdown.Item>{x.organization}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col style={{ alignContent: 'center' }}>
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Filter by Location
            </Dropdown.Toggle>

            <Dropdown.Menu>
              {tempOpportunities.map((x) => (
                <Dropdown.Item>{x.location}</Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    </Container>
    <Container>
      <Form>
        <Form.Control type="search" placeholder="Search for a Volunteering Opportunity..." onSubmit={false} />
      </Form>
    </Container>
    <Container style={{ padding: 20 }}>
      <Row>
        {tempOpportunities.map((opp, index) => (
          <Col md={6} key={index}>
            <Opportunity opp={opp} />
          </Col>
        ))}
      </Row>
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

export default VolunteerOpportunities;
