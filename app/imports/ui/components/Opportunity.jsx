import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

/** Renders a horizontal card of a Volunteer Opportunity. */
// TODO: Change this into whatever the actual opportunity structure is definted as
const Opportunity = ({ opp }) => (
  <Card style={{ width: '100%', marginBottom: '20px', textDecoration: 'none' }} as={NavLink} to={`/volunteer-opportunities/${opp._id}`}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: '75%' }}>
        <Card.Body>
          <Card.Title>{opp.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{opp.organization}</Card.Subtitle>
          <Card.Text>{opp.location} | Size: {opp.size}</Card.Text>
        </Card.Body>
      </div>
      <div style={{ flex: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 15 }}>
        <Image src={opp.pictureURL} alt={opp.organization} style={{ width: '150px', height: 'auto' }} />
      </div>
    </div>
  </Card>
);

// Require an opportunity to be passed to this component.
Opportunity.propTypes = {
  opp: PropTypes.shape({
    name: PropTypes.string,
    size: PropTypes.number,
    location: PropTypes.string,
    organization: PropTypes.string,
    pictureURL: PropTypes.string,
    description: PropTypes.string,
    _id: PropTypes.number,
  }).isRequired,
};

export default Opportunity;
