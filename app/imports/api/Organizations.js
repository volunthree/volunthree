import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The OrganizationCollection. It is the collection of non-profit or volunteer organizations.
 */

class OrganizationCollection {
  constructor() {
    // The name of this collection.
    this.name = 'OrganizationCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      orgName: String,
      owner: String,
      description: String,
      location: String,
      pictureURL: { // @todo, perhaps think of implementing picture upload instead of URL.
        type: String,
        defaultValue: '/images/Missing.png',
        required: false,
      },
      size: Number,
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
 * The singleton instance of the OrganizationCollection.
 * @type {OrganizationCollection}
 */
export const Organizations = new OrganizationCollection();
