import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'meteor/check';
import { UserAdditions } from './UserAdditions';

/** Functions and methods for user creation and validation. */

/* eslint-disable no-console */

/** Function to create a user. Does not fully validate the data, so this should only be used wrapped in a meteor method with additional security, or with default testing data that we specify. */
export const createUser = (email, password, firstName, lastName, role) => {

  const userID = Accounts.createUser({ // This will automatically verify unique email.
    username: email,
    email: email,
    password: password,
  });

  // Adds additional user info into the collection.
  UserAdditions.collection.insert({
    email: email,
    firstName: firstName,
    lastName: lastName,
  });

  if (role === 'SUPERADMIN') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'SUPERADMIN', Roles.GLOBAL_GROUP);
  }

  console.log(`  Creating user ${email}.`);

};

/** Checks whether an email is in an acceptable string format. */
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/** API endpoint for client to create a user. Validates email and password, and calls function to create a user. */
Meteor.methods({

  createNewUser({ email, password, firstName, lastName }) {

    check(email, String);
    check(password, String);
    check(firstName, String);
    check(lastName, String);

    if (!validateEmail(email)) {
      throw new Meteor.Error('createNewUser.emailNotValid', 'Email is not valid.');
    }

    if (password.length < 5) {
      throw new Meteor.Error('createNewUser.passTooShort', 'Password must be at least 5 characters.');
    }

    // Username/email required to be unique is already checked by meteor with this function call and will throw proper error.
    createUser(email, password, firstName, lastName, null);

  },

});
