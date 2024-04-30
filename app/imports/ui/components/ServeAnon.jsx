import React from 'react';
import { Container, Row, Pagination, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { serviceRequests } from '../utilities/LocalVariables';
import ServiceCardAnon from './ServiceCardAnon';

const ServeAnon = () => (
  <Container fluid>
    <Container className="d-flex flex-wrap justify-content-center">
      <h1 className="mt-4">View and Accept User Requests</h1>
    </Container>
    <Container style={{ padding: 20 }} className="text-center">
      <h6>Sign in to view full request details as well as make your own!</h6>
      <Row fluid className=" justify-content-center" style={{ margin: '15px' }}>
        <Button style={{ maxWidth: '250px' }} variant="outline-dark" as={NavLink} to="/signin"> Click here to Log In! </Button>
      </Row>
      <Row className="justify-content-center">
        {serviceRequests.map((request) => (
          <ServiceCardAnon request={request} />
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
    </Container>
  </Container>

);

export default ServeAnon;
