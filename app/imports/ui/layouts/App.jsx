import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { Roles } from 'meteor/alanning:roles';
import { useTracker } from 'meteor/react-meteor-data';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import VolunteerOpportunities from '../pages/VolunteerOpportunities';
import AboutUs from '../pages/AboutUs';
import VolunteerEvent from '../pages/VolunteerEvent';
import Report from '../pages/Report';
import Pricing from '../pages/Pricing';
import VolunteerCalendar from '../pages/VolunteerCalendar';
import ForgotChange from '../pages/ForgotChange';
import Forgot from '../pages/Forgot';
import SignUp from '../pages/SignUp';
import DirectMessaging from '../pages/DirectMessaging';
import VolunteerOrganizations from '../pages/VolunteerOrganizations';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/report" element={<Report />} />
          <Route path="/home" element={<Landing />} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="/volunteer-opportunities" element={<VolunteerOpportunities />} />
          <Route path="/volunteer-organizations" element={<VolunteerOrganizations />} />
          <Route path="/volunteer-calendar" element={<VolunteerCalendar />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/volunteer" element={<VolunteerEvent />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/forgotchange" element={<ForgotChange />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/direct-messaging" element={<DirectMessaging />} />
          <Route path="/volunteer-event/:_id" element={<VolunteerEvent />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */

const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  console.log('ProtectedRoute', isLogged);
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */

/*
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), [ROLE.ADMIN]);
  console.log('AdminProtectedRoute', isLogged, isAdmin);
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

*/

export default App;
