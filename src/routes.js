import RoutesV1 from '#routes/v1.routes'

export function applyRoutes(appInstance) {

    appInstance.use('/v1', RoutesV1, (req, res, next) => {
        // Middleware to handle any additional logic after the routes
        next();
    })
}

