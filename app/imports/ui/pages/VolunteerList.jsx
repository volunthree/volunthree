import React from 'react';
import { Row, Container, Col, Form } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import Opportunity from '../components/Opportunity';

const VolunteerList = () => {
  // Defines dummy data that will be used in the data mapping. Must be replaced by actual data later.
  const tempOpportunities = [
    {
      name: 'Opportunity 1',
      size: 50,
      location: 'New York',
      organization: 'Organization A',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Community Clean-Up Day',
      size: 20,
      location: 'City Park, Springfield',
      organization: 'Green Earth Initiative',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Food Drive at Local Shelter',
      size: 15,
      location: '123 Main Street, Anytown',
      organization: 'Helping Hands Foundation',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Tutoring Program for Underprivileged Youth',
      size: 10,
      location: 'Urban Youth Center, Downtown',
      organization: 'Brighter Futures Association',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Elderly Care and Companionship',
      size: 8,
      location: 'Sunny Days Retirement Home',
      organization: 'Caring Hearts Community',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Environmental Conservation Expedition',
      size: 12,
      location: 'National Forest, Mountainville',
      organization: 'Wilderness Preservation Society',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Animal Shelter Volunteer Day',
      size: 25,
      location: 'Sunset Animal Shelter, Riverdale',
      organization: 'Paws for Hope Rescue',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Habitat Restoration Project',
      size: 30,
      location: 'Local Wetlands Preserve, Willow Creek',
      organization: 'Nature Conservancy',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Homeless Outreach Program',
      size: 20,
      location: 'Downtown Homeless Shelter, Beacon City',
      organization: 'Hope in Humanity',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
    },
    {
      name: 'Community Garden Maintenance',
      size: 15,
      location: 'City Community Garden, Bloomington',
      organization: 'Green Thumb Coalition',
      pictureURL: '/images/aboutPlaceHolder1.jpg',
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
        <Row style={{ padding: 10, justifyContent: 'center' }}>
          <Col style={{ alignContent: 'center' }} md={3}> Filter 1 </Col>
          <Col style={{ alignContent: 'center' }} md={3}> Filter 2 </Col>
          <Col style={{ alignContent: 'center' }} md={3}> Filter 3 </Col>
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
    </Container>
  );
};

export default VolunteerList;
