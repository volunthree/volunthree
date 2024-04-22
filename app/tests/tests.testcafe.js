import {
  signOutPage,
  aboutUsPage,
  pricingPage,
  volunteerOpportunitiesPage,
  volunteerCalendarPage,
} from './simple.page';
import { landingPage } from './landing.page';
import { signInPage } from './signin.page';
import { signUpPage } from './signup.page';
import { navBar } from './navbar.component';

/* global fixture:false, test:false */

/** Credentials for one of the sample users defined in settings.development.json. Also a new, not yet registered sample user, Jane. */
const credentials = { firstName: 'John', lastName: 'Smith', username: 'john@foo.com', password: 'changeme' };
const newCredentials = { firstName: 'Jane', lastName: 'Doe', username: 'jane@foo.com', password: 'changeme' };

fixture('meteor-application-template-production localhost test with default db')
  .page('http://localhost:3000');

test('Test that landing page shows up', async () => {
  await landingPage.isDisplayed();
});

test('Test that signin and signout work', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that existing user pages show up', async () => {
  await navBar.gotoSignInPage();
  await signInPage.signin(credentials.username, credentials.password);
  await navBar.isLoggedIn(credentials.username);
  await navBar.gotoAboutUsPage();
  await aboutUsPage.isDisplayed();
  await navBar.gotoPricingPage();
  await pricingPage.isDisplayed();
  await navBar.gotoVolunteerOpportunitiesPage();
  await volunteerOpportunitiesPage.isDisplayed();
  await navBar.gotoVolunteerCalendarPage();
  await volunteerCalendarPage.isDisplayed();
  await navBar.logout();
  await signOutPage.isDisplayed();
});

test('Test that sign up and sign out work', async () => {
  await navBar.gotoSignUpPage();
  await signUpPage.isDisplayed();
  await signUpPage.signupUser(newCredentials.firstName, newCredentials.lastName, newCredentials.username, newCredentials.password);
  await navBar.isLoggedIn(newCredentials.username);
  await navBar.logout();
  await signOutPage.isDisplayed();
});
