import fileUpload from 'express-fileupload';
import {APP_URL, PORT} from '#src/constants';
import {applyCors} from '#src/config/cors.config';
import {applyRoutes} from '#src/routes';
import connectDB from '#src/config/db.config';
import express from 'express';
import {swaggerSpec, swaggerUi} from './swagger.js';
const app = express();

// Disable x-powered-by header
app.disable('x-powered-by');

// File upload middleware
app.use(
    fileUpload({
        createParentPath: true, // Automatically create directory paths
        limits: {fileSize: 5 * 1024 * 1024}, // 5 MB limit
        abortOnLimit: true, // Reject file if it exceeds the limit
    })
);

connectDB();
applyCors(app);
applyRoutes(app);

// update the documentation url
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
    operationsSorter: 'method', // or a function to define custom order
}));

app.listen(PORT, () => {
    console.log(APP_URL);
});