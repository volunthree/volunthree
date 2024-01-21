import React from 'react';
import { Container } from 'react-bootstrap';

/** Returns the homepage to the Voluntree website. */
const Landing = () => (
  <Container
    fluid
    className="d-flex align-items-center justify-content-center"
    style={{
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/headerImage.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '350px',
      color: 'white',
      textAlign: 'center',
      overflowY: 'auto',
    }}
  >
    <div>
      <h1>The Voluntree</h1>
      <p>Volunteering Simplified. Impact Amplified.</p>
    </div>
  </Container>
);

export default Landing;
