import {APP_URL, PORT} from '#src/constants';
import {applyCors} from '#src/config/cors.config';
import {applyRoutes} from '#src/routes';
import connectDB from '#src/config/db.config';
import express from 'express';
import {publicPath} from '#src/utils/esm.utils';
import serverMiddleware from '#src/config/middleware.config';
const app = express();

// Disable x-powered-by header
app.disable('x-powered-by');

serverMiddleware(app)
connectDB();
applyCors(app);
applyRoutes(app);

// Stoplight API documentation
app.get('/api-docs', (req, res) => {
    return res.sendFile(publicPath('api-docs', 'index.html'));
});

// Swagger API documentation
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
//     operationsSorter: 'method', // or a function to define custom order
// }));

app.listen(PORT, () => {
    console.log(APP_URL);
});