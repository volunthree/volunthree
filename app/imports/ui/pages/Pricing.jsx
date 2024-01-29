import React from 'react';
import { Container, Row, Col, Button, Card, Form } from 'react-bootstrap';

/** Returns the Pricing page to the Voluntree website. */
const Pricing = () => (

  <Container
    fluid
    style={{ padding: 0 }}
  >
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
        <h1>Pricing</h1>
        <p>Contribute to a Non-Profit!</p>
      </div>
    </Container>
    <Container fluid style={{ height: '100px', padding: '20px', margin: '20px' }}>
      <div style={{ textAlign: 'center' }}>
        <h1> Voluntree Pricing Options </h1>
      </div>
    </Container>
    <Container fluid style={{ padding: '20px', margin: '20px' }}>
      <Row
        className="d-flex align-items-stretch"
      >
        <Col md={4}>
          <Card className="mb-4 pricing-card">
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Volunteer</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'center' }}>$0 / month</Card.Subtitle>
              <Card.Text>
                <h5>Features: </h5>
                <Form>
                  <Form.Check
                    type="checkbox"
                    label="Access to basic volunteering opportunities: This tier provides access to entry-level volunteer positions within the organization's network."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Volunteer training resources: Members at this level can access training materials and resources to enhance their volunteering skills and knowledge."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Access to premium volunteering opportunities: Members at this level gain access to more specialized or high-impact volunteer roles within the organization."
                    disabled
                  />
                  <Form.Check
                    type="checkbox"
                    disabled
                    label="Volunteer recognition program: Subscribers are enrolled in a volunteer recognition program that acknowledges and rewards their contributions, potentially including certificates, badges, or other forms of recognition."
                  />
                  <Form.Check
                    type="checkbox"
                    disabled
                    label="Exclusive volunteer events: Members at this tier gain invitations to exclusive volunteer appreciation events, networking opportunities, or special volunteer projects."
                  />
                  <Form.Check
                    type="checkbox"
                    disabled
                    label="Priority support: Subscribers receive priority assistance and support from the organization's staff for any inquiries, issues, or requests related to volunteering."
                  />
                </Form>
              </Card.Text>
              <div className="text-center">
                <Button variant="primary">Subscribe as Volunteer</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 pricing-card">
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Gardener</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'center' }}>$15 / month</Card.Subtitle>
              <Card.Text>
                <h5>Features: </h5>
                <Form>
                  <Form.Check
                    type="checkbox"
                    label="Access to basic volunteering opportunities: This tier provides access to entry-level volunteer positions within the organization's network."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Volunteer training resources: Members at this level can access training materials and resources to enhance their volunteering skills and knowledge."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Access to premium volunteering opportunities: Members at this level gain access to more specialized or high-impact volunteer roles within the organization."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Volunteer recognition program: Subscribers are enrolled in a volunteer recognition program that acknowledges and rewards their contributions, potentially including certificates, badges, or other forms of recognition."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    disabled
                    label="Exclusive volunteer events: Members at this tier gain invitations to exclusive volunteer appreciation events, networking opportunities, or special volunteer projects."
                  />
                  <Form.Check
                    type="checkbox"
                    disabled
                    label="Priority support: Subscribers receive priority assistance and support from the organization's staff for any inquiries, issues, or requests related to volunteering."
                  />
                </Form>
              </Card.Text>
              <div className="text-center">
                <Button variant="primary">Subscribe as Gardener</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4 pricing-card">
            <Card.Body>
              <Card.Title style={{ textAlign: 'center' }}>Tree Hugger</Card.Title>
              <Card.Subtitle className="mb-2 text-muted" style={{ textAlign: 'center' }}>$30 / month</Card.Subtitle>
              <Card.Text>
                <h5>Features: </h5>
                <Form>
                  <Form.Check
                    type="checkbox"
                    label="Access to basic volunteering opportunities: This tier provides access to entry-level volunteer positions within the organization's network."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Volunteer training resources: Members at this level can access training materials and resources to enhance their volunteering skills and knowledge."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Access to premium volunteering opportunities: Members at this level gain access to more specialized or high-impact volunteer roles within the organization."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Volunteer recognition program: Subscribers are enrolled in a volunteer recognition program that acknowledges and rewards their contributions, potentially including certificates, badges, or other forms of recognition."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Exclusive volunteer events: Members at this tier gain invitations to exclusive volunteer appreciation events, networking opportunities, or special volunteer projects."
                    checked
                  />
                  <Form.Check
                    type="checkbox"
                    label="Priority support: Subscribers receive priority assistance and support from the organization's staff for any inquiries, issues, or requests related to volunteering."
                    checked
                  />
                </Form>
              </Card.Text>
              <div className="text-center">
                <Button variant="primary">Subscribe as Tree Hugger</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Container>
);

export default Pricing;
