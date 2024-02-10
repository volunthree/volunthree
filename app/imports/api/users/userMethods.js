import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import { check } from 'fast-check';

/** Simple implentation of creating a user. */

/* eslint-disable no-console */

export const createUser = (email, password, role) => {
  console.log(`  Creating user ${email}.`);
  const userID = Accounts.createUser({
    username: email,
    email: email,
    password: password,
  });
  // @todo add part that adds a new userAdditions object and links it to the user
  if (role === 'SUPERADMIN') {
    Roles.createRole(role, { unlessExists: true });
    Roles.addUsersToRoles(userID, 'SUPERADMIN', Roles.GLOBAL_GROUP);
  }
};

// Checks whether an email is in an acceptable string format.
export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

/** API endpoint for client to create a user */
Meteor.methods({

  createNewUser(email, password, role) {
    check(email, String);
    check(password, String);
    check(role, String);

    if (!validateEmail(email)) {
      return 'Email not valid.';
    }

    if (password.length < 5) {
      return 'Password not long enough.';
    }

    createUser(email, password, role);
    return 'Account Created.';

  },

});
