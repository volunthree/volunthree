import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { tempOrganizations } from '../utilities/LocalVariables';
import Organization from '../components/Organization';

const AddOpportunity = () => {
  // TODO: Once finalized, ID field will be replaced dynamically
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [organization, setOrganization] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [date, setDate] = useState(null);
  const [skills, setSkills] = useState(''); // Change to list later
  // Size variable is based on committed users
  // PostedDate is based on the submission time.

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
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
          <h1> Add Opportunity </h1>
        </div>
      </Container>
      <Container style={{ padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', marginTop: '30px' }}>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Opportunity Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the name of the opportunity."
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Opportunity Organization</Form.Label>
            <Form.Select value={organization} onSelect={(e) => setOrganization(e.target)}>
              <option>Select the opportunity organization:</option>
              {tempOrganizations.map((org) => (
                <option> {org.organizationName} </option>
              ))}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Opportunity Image</Form.Label>
            <Form.Control
              type="text"
              placeholder="Select a picture that best fits the opportunity."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formLocation">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the location of the opportunity"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the opportunity Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formDate">
            <Form.Label>Opportunity Date</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter the opportunity date."
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formSkills">
            <Form.Label>Skills Required</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter useful opportunity skills"
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Add Opportunity!
          </Button>
        </Form>
      </Container>
    </Container>
  );
};

export default AddOpportunity;
