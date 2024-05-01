import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The VolunteerCollection. It is the collection of event volunteers as a shared resource.
 */

class VolunteerCollection {
  constructor() {
    // The name of this collection.
    this.name = 'VolunteerCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      user: String,
      event: String,
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
 * The singleton instance of the VolunteerCollection.
 * @type {VolunteerCollection}
 */
export const Volunteers = new VolunteerCollection();
