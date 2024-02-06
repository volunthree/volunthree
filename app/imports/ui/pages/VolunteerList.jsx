import React from 'react';
import { Row, Container, Col, Form, Dropdown, Pagination } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import Opportunity from '../components/Opportunity';

const VolunteerList = () => {
  // Defines dummy data that will be used in the data mapping. Must be replaced by actual data later.
  const tempOpportunities = [
    {
      name: 'Community Clean-Up Day',
      size: 20,
      location: 'City Park, Springfield',
      organization: 'Green Earth Initiative',
      pictureURL: '/images/opportunities/ccday.jpg',
    },
    {
      name: 'Food Drive at Local Shelter',
      size: 15,
      location: '123 Main Street, Anytown',
      organization: 'Helping Hands Foundation',
      pictureURL: '/images/opportunities/fooddrive.jpg',
    },
    {
      name: 'Tutoring Program for Underprivileged Youth',
      size: 10,
      location: 'Urban Youth Center, Downtown',
      organization: 'Brighter Futures Association',
      pictureURL: '/images/opportunities/tutoringprog.jpg',
    },
    {
      name: 'Elderly Care and Companionship',
      size: 8,
      location: 'Sunny Days Retirement Home',
      organization: 'Caring Hearts Community',
      pictureURL: '/images/opportunities/elderlycare.jpg',
    },
    {
      name: 'Environmental Conservation Expedition',
      size: 12,
      location: 'National Forest, Mountainville',
      organization: 'Wilderness Preservation Society',
      pictureURL: '/images/opportunities/enviromentalcons.jpg',
    },
    {
      name: 'Animal Shelter Volunteer Day',
      size: 25,
      location: 'Sunset Animal Shelter, Riverdale',
      organization: 'Paws for Hope Rescue',
      pictureURL: '/images/opportunities/animalvolun.jpg',
    },
    {
      name: 'Habitat Restoration Project',
      size: 30,
      location: 'Local Wetlands Preserve, Willow Creek',
      organization: 'Nature Conservancy',
      pictureURL: '/images/opportunities/habitatrestore.jpg',
    },
    {
      name: 'Homeless Outreach Program',
      size: 20,
      location: 'Downtown Homeless Shelter, Beacon City',
      organization: 'Hope in Humanity',
      pictureURL: '/images/opportunities/homelessoutreach.jpg',
    },
    {
      name: 'Community Garden Maintenance',
      size: 15,
      location: 'City Community Garden, Bloomington',
      organization: 'Green Thumb Coalition',
      pictureURL: '/images/opportunities/commgarden.jpg',
    },
  ];

  return (
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
};

export default VolunteerList;
