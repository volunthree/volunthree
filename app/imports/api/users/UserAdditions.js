import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The UserAdditionsCollection. It is the collection additional user fields, and it is linked by email.
 */

class UserAdditionsCollection {
  constructor() {
    // The name of this collection.
    this.name = 'UserAdditionsCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      email: String, // This is what links it to the user as email must be unique and cannot be changed.
      firstName: String,
      lastName: String,
      description: {
        type: String,
        defaultValue: '',
        required: false,
      },
      location: {
        type: String,
        defaultValue: '',
        required: false,
      },
      pictureURL: { // @todo, perhaps think of implementing picture upload instead of URL.
        type: String,
        defaultValue: '/images/Missing.png',
        required: false,
      },
    });
    // Attach the schema to the collection, so all attempts to insert a document are checked against schema.
    this.collection.attachSchema(this.schema);
    // Define names for publications and subscriptions
    this.defaultPublicationName = `${this.name}.publication.default`; // For both customers and admins.
    this.adminPublicationName = `${this.name}.publication.admin`;
  }
}

/**
 * The singleton instance of the UserAdditionsCollection.
 * @type {UserAdditionsCollection}
 */
export const UserAdditions = new UserAdditionsCollection();
