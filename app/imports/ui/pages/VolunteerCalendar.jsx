import React, { useState } from 'react';
import { Dropdown, Col, Container, Row } from 'react-bootstrap';
import BigEventCalendar from '../components/BigEventCalendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { PAGE_IDS } from '../utilities/PageIDs';

const VolunteerCalendar = () => {
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const handleOrganizationSelect = (organization) => {
    setSelectedOrganization(organization);
  };

  const [selectedEventType, setSelectedEventType] = useState(null);

  const handleEventTypeSelect = (eventType) => {
    setSelectedEventType(eventType);
  };

  return (
    <Container id={PAGE_IDS.VOLUNTEER_CALENDAR} style={{ marginTop: '20px', marginBottom: '40px' }}>
      <Row>
        <Col>
          <h1>Volunteering Calendar</h1>
          <p>
            View all of the different volunteering opportunities that you can participate in. You can also filter
            the calendar events by the organization that is hosting the event.
          </p>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {selectedOrganization || 'Select Volunteering Organization'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleOrganizationSelect('View All Volunteer Events')}>View all Volunteering Events</Dropdown.Item>
              <Dropdown.Item onClick={() => handleOrganizationSelect('Volunteering Organization A')}>Volunteering Organization A</Dropdown.Item>
              <Dropdown.Item onClick={() => handleOrganizationSelect('Volunteering Organization B')}>Volunteering Organization B</Dropdown.Item>
              {/* Add more organizations as needed */}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              {selectedEventType || 'Select Event Type'}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={() => handleEventTypeSelect('View All Event Types')}>View all Event Types</Dropdown.Item>
              <Dropdown.Item onClick={() => handleEventTypeSelect('Event Type A')}>Event Type A</Dropdown.Item>
              <Dropdown.Item onClick={() => handleEventTypeSelect('Event Type B')}>Event Type B</Dropdown.Item>
              {/* Add more organizations as needed */}
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col>
          <BigEventCalendar />
        </Col>
      </Row>
    </Container>
  );
};

export default VolunteerCalendar;
