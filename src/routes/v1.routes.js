import {Router} from 'express';
import auth from '#src/app/auth/auth.route';
import user from '#src/app/user/user.route';

const router = Router();

/**
 * @file v1.routes.js
 * @description This file defines the version 1 routes for the application.
 * It serves as a central point to manage all API routes under the /v1 path.
 */
router.use('/', auth);
router.use('/users', user);


export default router;
