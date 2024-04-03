import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { PAGE_IDS } from '../utilities/PageIDs';

/** Returns the homepage to the Voluntree website. */
const IndividualsInNeedOfService = () => {
  const [key, setKey] = useState('howItWorks');
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
        <Tabs id="iinos-tabs" className="text-success" activeKey={key} onSelect={(k) => setKey(k)} style={{ justifyContent: 'space-evenly'}}>
          <Tab eventKey="howItWorks" title="How it Works">
            <div> How it works </div>
          </Tab>
          <Tab eventKey="serveCommunity" title="Serve The Community">
            <div> Serve the Community </div>
          </Tab>
          <Tab eventKey="makeRequest" title="Make a Request">
            <div> Make Request </div>
          </Tab>

        </Tabs>
      </Container>
    </Container>
  );
};

export default IndividualsInNeedOfService;
