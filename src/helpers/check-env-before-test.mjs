import {config} from 'dotenv';

config({path: '.env.test'});

if (process.env.APP_ENV !== 'development') {
    console.error('\n❌ Tests are blocked in PRODUCTION mode. Aborting...\n');
    process.exit(1);
}
