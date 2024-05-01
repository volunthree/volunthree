import React, { useState } from 'react';
import { Button, Card, Container, Form, Image, Modal, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { PersonCircle } from 'react-bootstrap-icons';

const MakeARequest = () => {
  const [name, setName] = useState('');
  const [timeOfRequest, setTimeOfRequest] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [skills, setSkills] = useState('');
  const [category, setCategory] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
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
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formCategory">
                <Form.Label>What would you categorize this request as?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please put a category for your request here."
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formTime">
                <Form.Label>When do you need assistance?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter a time for your request. (ex. Tuesday at 10:00 pm)"
                  value={timeOfRequest}
                  onChange={(e) => setTimeOfRequest(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Where do you need assistance?</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter the location of the request. (ex. Honolulu)"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="formLocation">
                <Form.Label>Are there any skills required/requested? List them here!</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please list any skills that this request may need here."
                  value={skills}
                  onChange={(e) => setSkills(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Describe the request you are making.</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your request description here."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <div className="text-center">
            <Button variant="success" type="submit">
              Preview and Submit Request
            </Button>
          </div>
        </Form>
      </Container>
      <Modal show={showModal} onHide={handleCloseModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Request Preview</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Logged In User View:</h5>
          <Card style={{ width: '100%', marginBottom: '20px', textDecoration: 'none' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 15 }}>
                <Image src="/images/userImages/robJenkins.jpg" alt={name} style={{ width: '240px', height: 'auto' }} />
              </div>
              <div style={{ flex: '75%' }}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Requested by: Kenji Sanehira</Card.Subtitle>
                  <Card.Text><strong>Location: </strong> {location} <strong>| When: </strong> {timeOfRequest}</Card.Text>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>Skills: {skills}</Card.Text>
                  <div className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <Button variant="primary" style={{ marginRight: 10 }}>Inquire More</Button>
                    <Button variant="success">Express Interest </Button>
                  </div>
                </Card.Body>
              </div>
            </div>
          </Card>
          <h5 className="mt-4">Non-Logged In User View:</h5>
          <Card style={{ width: '100%', marginBottom: '20px', textDecoration: 'none' }}>
            <div style={{ display: 'flex' }}>
              <div style={{ flex: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 15 }}>
                <PersonCircle style={{ width: '150px', height: 'auto' }} />
              </div>
              <div style={{ flex: '75%' }}>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Requested by: Anonymous</Card.Subtitle>
                  <Card.Text><strong>Category: </strong> {category}</Card.Text>
                  <Card.Text><strong>Location: </strong> {location}</Card.Text>
                  <Card.Text><strong>Skills: </strong> {skills}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="success" as={NavLink} to="/volunteer-opportunities">
            Submit Your Request
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default MakeARequest;
