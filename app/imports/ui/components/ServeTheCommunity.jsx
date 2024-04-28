import React from 'react';
import { Container, Card, Button, Row, Col, Image, Pagination } from 'react-bootstrap';
import { serviceRequests } from '../utilities/LocalVariables';

const ServeTheCommunity = () => (
  <Container fluid>
    <Container className="d-flex flex-wrap justify-content-center">
      <h1 className="mt-4">View and Accept User Requests</h1>
    </Container>
    <Container style={{ padding: 20 }}>
      <Row>
        {serviceRequests.map((request, index) => (
          <Col key={index} md={15}>
            <Card style={{ width: '100%', marginBottom: '20px', textDecoration: 'none' }}>
              <div style={{ display: 'flex' }}>
                <div style={{ flex: '25%', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', paddingRight: 15 }}>
                  <Image src={request.image} alt={request.title} style={{ width: '240px', height: 'auto' }} />
                </div>
                <div style={{ flex: '75%' }}>
                  <Card.Body>
                    <Card.Title>{request.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Requested by: {request.userName}</Card.Subtitle>
                    <Card.Text><strong>Location: </strong> {request.location} <strong>| When: </strong> {request.timeOfRequest}</Card.Text>
                    <Card.Text>{request.description}</Card.Text>
                    <Card.Text>Skills: {request.skills}</Card.Text>
                    <div className="d-flex justify-content-center" style={{ width: '100%' }}>
                      <Button variant="primary" style={{ marginRight: 10 }}>Inquire More</Button>
                      <Button variant="success">Express Interest </Button>
                    </div>
                  </Card.Body>
                </div>

              </div>
            </Card>
          </Col>
        ))}
      </Row>
      <Container fluid style={{ display: 'flex', justifyContent: 'center' }}>
        <Pagination>
          <Pagination.First />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </Container>
      <hr className="my-5" />
      <Container className="d-flex flex-wrap justify-content-center">
        <h1 className="mt-4">Individuals In Need Of Service Map</h1>
      </Container>
    </Container>
  </Container>

);

export default ServeTheCommunity;
