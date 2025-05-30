import mongoose from 'mongoose';
import {MONGO_URI} from '#src/constants';

export default async function connectDB() {

    if(MONGO_URI) {
        await mongoose.connect(MONGO_URI);

        const db = mongoose.connection;

        db.on('error', console.error.bind(console, 'connection error:'));
        db.once('open', function () {
            console.log('Connected to MongoDB database');
        });
    }
}
