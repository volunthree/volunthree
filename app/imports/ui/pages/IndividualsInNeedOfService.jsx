import React, { useState } from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';
import MakeARequest from '../components/MakeARequest';
import ServeTheCommunity from '../components/ServeTheCommunity';
import MapContainerIndividuals from '../components/MapContainerIndividuals';
import ServeAnon from '../components/ServeAnon';
import ServiceTutorial from '../components/ServiceTutorial';

/** Returns the homepage to the Voluntree website. */
const IndividualsInNeedOfService = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  const [key, setKey] = useState('tutorial');
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
          height: '250px',
          color: 'white',
          textAlign: 'center',
          overflowY: 'auto',
          padding: 0,
        }}
      >
        <div>
          <h1>Individuals In Need Of Service</h1>
          <p>Make Change in your Community!</p>
        </div>
      </Container>
      <Container fluid style={{ alignContent: 'center' }}>
        {currentUser === '' ? (
          <Tabs id="iinos-tabs" className="text-success" activeKey={key} onSelect={(k) => setKey(k)} style={{ justifyContent: 'space-evenly' }}>
            <Tab eventKey="tutorial" title="How it Works">
              <Container fluid>
                <ServiceTutorial />
              </Container>
            </Tab>
            <Tab eventKey="serveAnon" title="Serve The Community">
              <Container>
                <ServeAnon />
              </Container>
            </Tab>
          </Tabs>
        ) : (
          <Tabs id="iinos-tabs" className="text-success" activeKey={key} onSelect={(k) => setKey(k)} style={{ justifyContent: 'space-evenly' }}>
            <Tab eventKey="tutorial" title="How it Works">
              <Container fluid>
                <ServiceTutorial />
              </Container>
            </Tab>
            <Tab eventKey="serveCommunity" title="Serve The Community">
              <Container fluid>
                <ServeTheCommunity />
              </Container>
              <MapContainerIndividuals />
            </Tab>
            <Tab eventKey="makeRequest" title="Make a Request">
              <Container>
                <MakeARequest />
              </Container>
            </Tab>
          </Tabs>
        )}
      </Container>
    </Container>
  );
};

export default IndividualsInNeedOfService;
