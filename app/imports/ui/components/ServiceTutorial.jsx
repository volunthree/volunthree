import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Button, Container, Row } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';

const ServiceTutorial = () => {
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  return (
    <Container fluid>
      <Container className="text-center">
        <h1 className="mt-4">Need Individual Service?</h1>
        <h3>Your community may be able to help!</h3>
      </Container>
      <Container className="justify-content-center">
        <Row className="align-items-center">
          <Col md={6} className="order-md-1">
            <h3>Fill out a Request Form!</h3>
            <p>When you are logged into TheVoluntree, you are given the opportunity to request your own individual service! Here you are able to specify important information about your request
              such as, the time, place, what exactly users will be doing, and any skills that may be necessary for the task at hand!
            </p>
          </Col>
          <Col md={5} className="order-md-2">
            <img src="/images/ServiceForm.PNG" alt="Step 1" className="img-fluid shadow-sm" style={{ width: '600px' }} />
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col md={5} className="order-md-1">
            <img src="/images/ServiceAnonCombined.png" alt="Step 2" className="img-fluid" />
          </Col>
          <Col md={6} className="order-md-2">
            <h3>View User Requests</h3>
            <p>Feeling like helping others out? Scroll through user requests that are made around your area and see if there is one you are interested in participating in! Users are able to express
              interest in these requests as well as discuss participation directly with the individual who made the request.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center" style={{paddingBottom: 20, marginBottom: 20}}>
          <Col md={6} className="order-md-1">
            <h3>Visualize User Requests</h3>
            <p> Worried about a long commute? User requests are also able to be seen on the Individuals In Need Of Service Map in order for users to see requests made around their general location.</p>
          </Col>
          <Col md={5} className="order-md-2">
            <img src="/images/ServiceMap.PNG" alt="Step 3" className="img-fluid shadow-sm" />
          </Col>
        </Row>
        {currentUser === '' ? (
          <div className="mt-4 text-center" style={{ paddingBottom: 10, marginBottom: 20 }}>
            <h5>Ready to get started? Log in to make your first request!</h5>
            <Button style={{ maxWidth: '250px' }} variant="outline-dark" as={NavLink} to="/signin"> Click here to Log In! </Button>
          </div>
        ) : (
          <div />
        )}
      </Container>
    </Container>

  );
};

export default ServiceTutorial;
