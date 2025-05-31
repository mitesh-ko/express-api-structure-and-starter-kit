import cors from 'cors';
import {CORS_ORIGIN, CORS_METHODS, CORS_ALLOWED_HEADERS, CORS_ENABLED} from '#src/constants';


const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        if (CORS_ORIGIN.indexOf(origin) === -1) {
            const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    },
    credentials: true, // Allow credentials (cookies, etc.)
    methods: CORS_METHODS,
    allowedHeaders: CORS_ALLOWED_HEADERS,
};

export function applyCors(appInstance) {
    if(CORS_ENABLED) {
        appInstance.use(cors(corsOptions));
    }
}