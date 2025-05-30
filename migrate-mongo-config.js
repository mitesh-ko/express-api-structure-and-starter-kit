// In this file you can configure migrate-mongo

import {MONGO_DB_NAME} from '#src/constants';

const config = {
    mongodb: {
    // TODO Change (or review) the url to your MongoDB:
        url: 'mongodb://localhost:27017',

        // TODO Change this to your database name:
        databaseName: MONGO_DB_NAME,

        options: {
            // useNewUrlParser: true, // removes a deprecation warning when connecting
            // useUnifiedTopology: true, // removes a deprecating warning when connecting
            // connectTimeoutMS: 3600000, // increase connection timeout to 1 hour
            // socketTimeoutMS: 3600000, // increase socket timeout to 1 hour
        },
    },

    // The migrations dir, can be a relative or absolute path. Only edit this when really necessary.
    migrationsDir: './src/database/migrations',

    // The MongoDB collection where the applied changes are stored.
    changelogCollectionName: 'changelog',

    // The MongoDB collection where the lock will be created.
    lockCollectionName: 'changelog_lock',

    // The value in seconds for the TTL index that will be used for the lock. Value of 0 will disable the feature.
    lockTtl: 0,

    // The file extension to create migrations and search for in migration dir
    migrationFileExtension: '.js',

    // Enable the algorithm to create a checksum of the file contents
    useFileHash: false,

    // Don't change this, unless you know what you're doing
    moduleSystem: 'commonjs',
};

export default config;
