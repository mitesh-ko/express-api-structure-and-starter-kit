// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import yaml from 'js-yaml';
import * as fs from 'node:fs';
import {publicPath} from '#src/utils/esm.utils';
import {APP_VERSION} from '#src/constants';

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API Starter Kit',
            version: APP_VERSION,
            description: 'API documentation for Express API starter kit',
        },
        servers: [
            {
                url: 'http://localhost:4000/v1',
                description: 'HTTP API Starter Kit',
            },
            {
                url: 'https://sandbox.api.yourdomain.com/v1',
                description: 'Sandbox environment',
            },
            {
                url: 'https://api.yourdomain.com/v1',
                description: 'Production environment',
            }
        ],
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        security: {
            bearerAuth: []
        },
        tags: [
            {
                name: 'Auth',
                description: 'API endpoints for managing Authentication',
            },
            {
                name: 'Users',
                description: 'API endpoints for managing users',
            }
        ],
    },
    apis: ['./src/routes/*.js', './src/app/auth/auth.route.js', './src/app/user/user.route.js'],
};

export const swaggerSpec = swaggerJSDoc(options);

const yamlStr = yaml.dump(swaggerSpec);

fs.writeFileSync(publicPath('api-docs', 'openapi.yaml'), yamlStr, 'utf8');

export {swaggerUi};
