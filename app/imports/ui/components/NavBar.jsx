import React from 'react';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { NavLink } from 'react-router-dom';
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { BoxArrowRight, PersonFill, PersonPlusFill } from 'react-bootstrap-icons';
import { COMPONENT_IDS } from '../utilities/ComponentIDs';

const NavBar = () => {
  // useTracker connects Meteor data to React components. https://guide.meteor.com/react.html#using-withTracker
  const { currentUser } = useTracker(() => ({
    currentUser: Meteor.user() ? Meteor.user().username : '',
  }), []);
  // TODO: Add links to the respective pages of the NavBar.
  return (
    <Navbar bg="success" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand id={COMPONENT_IDS.NAVBAR_LANDING_PAGE} as={NavLink} to="/">
          <img
            alt="Voluntree Logo"
            src="/images/The_Voluntree_Image.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{' '}
          TheVoluntree
        </Navbar.Brand>
        <Navbar.Toggle aria-controls={COMPONENT_IDS.NAVBAR_COLLAPSE} />
        <Navbar.Collapse id={COMPONENT_IDS.NAVBAR_COLLAPSE}>
          <Nav className="me-auto justify-content-start">
            <Nav.Link id={COMPONENT_IDS.NAVBAR_ABOUT_US} as={NavLink} to="/aboutus" key="about-us">About Us</Nav.Link>
            <NavDropdown title="Opportunities" id="volunteering-dropdown">
              <NavDropdown.Item as={NavLink} to="/volunteer-opportunities">Volunteering Opportunities</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/volunteer-organizations"> Volunteering Organizations </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link id={COMPONENT_IDS.NAVBAR_PRICING} as={NavLink} to="/pricing" key="pricing">Pricing</Nav.Link>
            <Nav.Link id={COMPONENT_IDS.NAVBAR_FAQ} as={NavLink} to="/faq" key="faq">FAQ</Nav.Link>
          </Nav>
          <Nav className="justify-content-end">
            {currentUser === '' ? (
              <NavDropdown id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN} title="Login">
                <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_IN} as={NavLink} to="/signin"><PersonFill />Sign in</NavDropdown.Item>
                <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_LOGIN_DROPDOWN_SIGN_UP} as={NavLink} to="/signup"><PersonPlusFill />Sign up</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <NavDropdown id={COMPONENT_IDS.NAVBAR_CURRENT_USER} title={currentUser}>
                <Nav.Link id={COMPONENT_IDS.NAVBAR_MY_PROFILE} as={NavLink} to="/profile/:_id" key="profile">View My Profile</Nav.Link>,
                <Nav.Link id={COMPONENT_IDS.NAVBAR_MY_REPORTS} as={NavLink} to="/reports/:_id" key="report">My Reports</Nav.Link>,
                <NavDropdown.Item id={COMPONENT_IDS.NAVBAR_SIGN_OUT} as={NavLink} to="/signout"><BoxArrowRight /> Sign out</NavDropdown.Item>
              </NavDropdown>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
