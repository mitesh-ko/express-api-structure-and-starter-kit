export default {
    /**
     * @param db {import('mongodb').Db}
     * @param client {import('mongodb').MongoClient}
     * @returns {Promise<void>}
     */
    async up(db, client) {
        // TODO write your migration here.
        // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
        // Example:
        await db.createCollection('users', {
            validator: {
                $jsonSchema: {
                    bsonType: 'object',
                    title: 'UserObject',
                    description: 'Schema for user registration',
                    required: ['name', 'email', 'password', 'profile'],
                    properties: {
                        name: {
                            bsonType: 'string',
                            description: 'User name must be a string and is required'
                        },
                        email: {
                            bsonType: 'string',
                            description: 'User email must be a valid email string and is required'
                        },
                        password: {
                            bsonType: 'string',
                            description: 'Password must be a string and is required'
                        },
                        profile: {
                            bsonType: 'array',
                            description: 'Profile must be an array of media objects and is required',
                            items: {
                                bsonType: 'object',
                                required: ['type', 'url'],
                                properties: {
                                    type: {
                                        bsonType: 'string',
                                        description: 'Type of the profile item (e.g., jpg, png)'
                                    },
                                    url: {
                                        bsonType: 'string',
                                        description: 'URL to the profile media item'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    },

    /**
     * @param db {import('mongodb').Db}
     * @param client {import('mongodb').MongoClient}
     * @returns {Promise<void>}
     */
    async down(db, client) {
        // TODO write the statements to rollback your migration (if possible)
        // Example:
        await db.collection('users').drop();
    }
};
