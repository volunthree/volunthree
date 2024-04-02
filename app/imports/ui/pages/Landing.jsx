import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

import DefaultLandingPage from '../components/DefaultLandingPage';
import UserDashboard from '../components/UserDashboard';

/** Returns the homepage to the Voluntree website. */
const Landing = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Container
      fluid
      id={PAGE_IDS.LANDING}
      style={{ padding: 0 }}
    >
      <Container
        fluid
        id="landing-image"
        className="d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/headerImage.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '350px',
          color: 'white',
          textAlign: 'center',
          overflowY: 'auto',
          padding: 0,
        }}
      >
        <div>
          <h1>TheVoluntree</h1>
          <p>Volunteering Simplified. Impact Amplified.</p>
        </div>
      </Container>
      <Container style={{ alignContent: 'center' }}>
        {currentUser === '' ? (
          <DefaultLandingPage />
        ) : (
          <UserDashboard />
        )}
      </Container>
    </Container>
  );
};

export default Landing;
