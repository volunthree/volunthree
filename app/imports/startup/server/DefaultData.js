import { Meteor } from 'meteor/meteor';
import { createUser } from '../../api/users/userMethods';

/** Import default data on startup of server. */

// When running app for first time, pass a settings file to set up a default user account.
if (Meteor.users.find().count() === 0) {
  if (Meteor.settings.defaultAccounts) {
    console.log('Creating the default user(s)');
    Meteor.settings.defaultAccounts.forEach(({ email, password, firstName, lastName, role }) => createUser(email, password, firstName, lastName, role));
  } else {
    console.log('Cannot initialize the database!  Please invoke meteor with a settings file.');
  }
}
