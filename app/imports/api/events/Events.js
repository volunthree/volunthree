import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The EventCollection. It is a collection of events that a user can see.
 * Will be listed on the Volunteer Opportunities page and individual event cards
 */

class EventCollection {
  constructor() {
    // The name of this collection.
    this.name = 'EventCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      _id: Number,
      name: String,
      size: Number,
      location: String,
      organization: String,
      pictureURL: String,
      description: String,
      postedDate: String,
      skillsRequired: String,

    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.defaultPublicationName = `${this.name}.publication.default`; // For both customers and admins.
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

// @todo add crud methods for this schema.

/**
 * The singleton instance of the EventCollection.
 * @type {EventCollection}
 */
export const Events = new EventCollection();
