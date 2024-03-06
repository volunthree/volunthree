import { Meteor } from 'meteor/meteor';

/** Functions and methods for events creation and validation */

export const createEvent = (name, size, location, organization, pictureURL, description, postedDate, skillsRequired) => {

  const eventID = Accounts.createEvent({
    organization: organization,
    name: name,
  });

  EventCollection.collection.insert({
    name: name,
    organization: organization,
    description: description,
  });
};
