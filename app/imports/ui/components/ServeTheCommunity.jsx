import React from 'react';
import { Container, Row, Pagination } from 'react-bootstrap';
import { serviceRequests } from '../utilities/LocalVariables';
import ServiceCard from './ServiceCard';

const ServeTheCommunity = () => (
  <Container fluid>
    <Container className="d-flex flex-wrap justify-content-center">
      <h1 className="mt-4">View and Accept User Requests</h1>
    </Container>
    <Container style={{ padding: 20 }}>
      <Row>
        {serviceRequests.map((request) => (
          <ServiceCard request={request} />
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
