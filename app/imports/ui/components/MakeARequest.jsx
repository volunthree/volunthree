import { Button, Container, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const MakeARequest = () => {
  const [name, setName] = useState('');
  const [timeOfRequest, setTimeOfRequest] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container fluid style={{ marginTop: 20, marginBottom: 40, paddingTop: 20, paddingBottom: 20 }}>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
      >
        <div>
          <h1> In need of Assistance? </h1>
          <h6> Fill out the form below to invite volunteers to help you out!</h6>
        </div>
      </Container>
      <Container style={{ padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', marginTop: '30px' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Title your Service Request</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the title of the request."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formTime">
            <Form.Label>When do you need assistance?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a time for your request. (ex. Tuesday at 10:00 pm)"
              value={timeOfRequest}
              onChange={(e) => setTimeOfRequest(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Where do you need assistance?</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the location of the request. (ex. Honolulu)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Describe the request you are making.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your request description here."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Are there any skills required/requested? List them here!</Form.Label>
            <Form.Control
              type="text"
              placeholder="Please list any skills that this request may need here."
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit" as={NavLink} to="/volunteer-opportunities">
            Submit Your Request
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default MakeARequest;
