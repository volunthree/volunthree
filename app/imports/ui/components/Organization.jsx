import React from 'react';
import PropTypes from 'prop-types';
import { Button, Accordion } from 'react-bootstrap';

/** Renders a horizontal card of a Volunteer Organization */

const Organization = ({ org }) => (
  <Accordion.Item eventKey={org.organizationName}>
    <Accordion.Header>
      <img src={org.orgImage} alt="logo" style={{ marginRight: '10px', width: '50px', height: '50px' }} />
      <div>
        <h5>{org.organizationName}</h5>
        <p style={{ fontSize: '14px', margin: '0' }}>{org.organizationWebsite}</p>
      </div>
    </Accordion.Header>
    <Accordion.Body>
      <p>{org.organizationDescription}</p>
      <Button variant="primary" target="_blank">Visit Organization Page</Button>
    </Accordion.Body>
  </Accordion.Item>
);
Organization.propTypes = {
  org: PropTypes.shape({
    _id: PropTypes.number,
    organizationName: PropTypes.string,
    organizationDescription: PropTypes.string,
    organizationWebsite: PropTypes.string,
    orgImage: PropTypes.string,
  }).isRequired,
};

export default Organization;
