import React from 'react';
import { Container, Row, Tab, Nav } from 'react-bootstrap';
import ChangePassword from '../components/ChangePassword';
import ChangeUsername from '../components/ChangeUsername';

/** The page where the user can actually change their password/username based on inputted email */
const ForgotChange = () => (
  <div className="box" style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/images/changePic.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh', margin: '0px' }}>
    <Row>
      <Container
        fluid
        className="d-flex align-items-center justify-content-center"
        style={{
          color: 'white',
          textAlign: 'center',
          height: '100px',
          padding: 0,
        }}
      >
        <div>
          <h1>Account Recovery</h1>
        </div>
      </Container>
      <Container className="d-inline-flex justify-content-center" style={{ marginTop: '30px' }}>
        <Tab.Container defaultActiveKey="password">
          <div>
            <Row style={{ paddingBottom: '20px' }}>
              <Nav variant="tabs" className="justify-content-center">
                <Nav.Item>
                  <Nav.Link eventKey="password">Change Password</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="username">Change Username</Nav.Link>
                </Nav.Item>
              </Nav>
            </Row>
            <Row>
              <Tab.Content>
                <Tab.Pane eventKey="password">
                  <ChangePassword />
                </Tab.Pane>
                <Tab.Pane eventKey="username">
                  <ChangeUsername />
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </div>
        </Tab.Container>
      </Container>
    </Row>
  </div>
);

export default ForgotChange;
