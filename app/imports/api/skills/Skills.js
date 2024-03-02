import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

/**
 * The SkillsCollection. It is a collection of skills that a non-profit can
 * ask of their volunteers. Volunteers can also list their skills on their
 *  user profile.
 */

class SkillCollection {
  constructor() {
    // The name of this collection.
    this.name = 'SkillCollection';
    // Define the Mongo collection.
    this.collection = new Mongo.Collection(this.name);
    // Define the structure of each document in the collection.
    this.schema = new SimpleSchema({
      firstName: String,
      lastName: String,
      technicalSkills: String,
      softSkills: String,
      interests: String,
      experience: String,
      languages: String,
      preferredRoles: String,

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
 * The singleton instance of the SkillCollection.
 * @type {SkillCollection}
 */
export const Skills = new SkillCollection();
