import {Router} from 'express';
import expressAsyncHandler from 'express-async-handler';
import  AuthController from '#src/app/auth/auth.controller';

const router = Router();

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user with email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - confirmPassword
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Pas$word123
 *               confirmPassword:
 *                 type: string
 *                 format: password
 *                 example: Pas$word123
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                   example: 64e72f3bb6dc7b001f2a8c12
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR...
 *       422:
 *          description: Validation error
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: string
 *                    example: failed
 *                  message:
 *                    type: string
 *                    example: Validation failed!
 *                  error:
 *                    type: array
 *                    items:
 *                      type: object
 *                      properties:
 *                        email:
 *                          type: string
 *                          example: email is not allowed to be empty
 *                        password:
 *                          type: string
 *                          example: password is not allowed to be empty
 *                        confirmPassword:
 *                          type: string
 *                          example: Passwords must match
 */
router.post('/register', expressAsyncHandler(AuthController.register));

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Login user
 *     description: Authenticate user using email and password.
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: john@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 example: Pas$word123
 *     responses:
 *       200:
 *         description: User authenticated successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: fulfilled
 *                 message:
 *                   type: string
 *                   example: logged in successfully
 *                 data:
 *                   type: object
 *                   properties:
 *                     token:
 *                       type: string
 *                       example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *       422:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: failed
 *                 message:
 *                   type: string
 *                   example: Validation failed!
 *                 error:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       email:
 *                         type: string
 *                         example: email is not allowed to be empty
 *                       password:
 *                         type: string
 *                         example: password is not allowed to be empty
 */
router.post('/login', expressAsyncHandler(AuthController.login));

export default router;