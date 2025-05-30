import RoutesV1 from '#routes/v1.routes'
import bodyParser from 'body-parser';

export function applyRoutes(appInstance) {

    // parse application/x-www-form-urlencoded
    appInstance.use(bodyParser.urlencoded())

    // parse application/json
    appInstance.use(bodyParser.json({limit: '10mb'}));

    appInstance.use('/v1', RoutesV1, (req, res, next) => {
        // Middleware to handle any additional logic after the routes
        next();
    })
}

