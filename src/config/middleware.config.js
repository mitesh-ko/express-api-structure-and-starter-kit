import bodyParser from 'body-parser';
import express from 'express';
import {publicPath} from '#src/utils/esm.utils';
import fileUpload from 'express-fileupload';

// Middleware required to run server functionalities
export default async function serverMiddleware(appInstance) {

    // File upload middleware
    appInstance.use(
        fileUpload({
            createParentPath: true, // Automatically create directory paths
            limits: {fileSize: 5 * 1024 * 1024}, // 5 MB limit
            abortOnLimit: true, // Reject file if it exceeds the limit
        })
    );

    // parse application/x-www-form-urlencoded
    appInstance.use(bodyParser.urlencoded())

    // parse application/json
    appInstance.use(bodyParser.json({limit: '10mb'}));

    // Serve static files from public
    appInstance.use(express.static(publicPath()));

}