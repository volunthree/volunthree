import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

/* A simple static component to render some text for the FAQ page. */
const FAQ = () => (
  <Container fluid style={{ padding: 0 }}>
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/headerImage.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100px',
        color: 'white',
        textAlign: 'center',
        overflowY: 'auto',
        padding: 0,
      }}
    >
      <div>
        <h1> Frequently Asked Questions </h1>
      </div>
    </Container>
    <Container style={{ marginTop: 20, marginBottom: 20, textAlign: 'center' }}>
      <div>
        <h5> View a list of our most frequently asked questions here at Voluntree:</h5>
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Q: What is Voluntrees mission?</Accordion.Header>
          <Accordion.Body>A: Our mission is to empower individuals to impact their communities by enhancing the volunteer experience. We aim to remove barriers for volunteers
            and philanthropists, providing an accessible platform that connects community needs with those eager to help.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Q: How does Voluntree facilitate volunteer engagement?</Accordion.Header>
          <Accordion.Body>A: Voluntrees platform is designed to streamline the process of finding and engaging in volunteer opportunities. We recognize the inherent desire to
            contribute and aim to make it easier for individuals ready to serve to connect with the avenues where they can make the most impact.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Q: How does Voluntree address the challenges faced by volunteers and organizers?</Accordion.Header>
          <Accordion.Body>A: Voluntree strives to remove the friction that both volunteers and organizers may face during setup. Our platform is user-friendly and engaging, designed
            to address the core reasons individuals choose to volunteer while also solving the problem of recruitment.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Q: How can I upgrade my membership plan on Voluntree?</Accordion.Header>
          <Accordion.Body>A: You can upgrade your membership plan on Voluntree by visiting your account settings and selecting the desired plan. Youll then be prompted to complete the
            upgrade process, which may include payment information if applicable.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Q: What sets Voluntree apart from other volunteering platforms?</Accordion.Header>
          <Accordion.Body>A: Voluntree not only provides a platform for finding and engaging in volunteer opportunities but also aims to socialize the volunteer experience by bringing
            volunteering into communities. We are dedicated to creating a platform that is both easy and engaging to use, fostering a sense of community and connection among volunteers
            and organizations.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>Q: How does Voluntree ensure accessibility for both volunteers and organizations?</Accordion.Header>
          <Accordion.Body>A: Voluntrees platform is accessible to both volunteers and organizations, providing a centralized hub where community needs are matched with individuals eager
            to help. Our user-friendly interface and streamlined process make it easy for volunteers to find opportunities and for organizers to connect with willing participants.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Q: What are the different pricing plans offered by Voluntree?</Accordion.Header>
          <Accordion.Body>A: Voluntree offers three pricing plans: Volunteer, Gardener, and Tree Hugger.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>Q: What features are included in the Volunteer plan?</Accordion.Header>
          <Accordion.Body>A: The Volunteer plan includes basic features such as access to volunteer opportunities, profile customization, and communication with organizers.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Q: What additional features does the Gardener plan offer compared to the Volunteer plan?</Accordion.Header>
          <Accordion.Body>A: The Gardener plan includes enhanced features such as priority access to exclusive volunteer opportunities, personalized recommendations, and volunteer badges.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Q: Can you tell me more about the benefits of the Tree Hugger plan?</Accordion.Header>
          <Accordion.Body>A: The Tree Hugger plan offers premium features such as VIP access to high-impact volunteering events, recognition as a top contributor, and invitations to special
            volunteer appreciation events.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  </Container>
);

export default FAQ;
