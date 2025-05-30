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
 *         application/json:
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
 *         application/json:
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
 *                 token:
 *                   type: string
 *                   example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *                 user:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: 64e72f3bb6dc7b001f2a8c12
 *                     name:
 *                       type: string
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       example: john@example.com
 *                     status:
 *                       type: string
 *                       example: active
 *       401:
 *         description: Invalid email or password
 */
router.post('/login', expressAsyncHandler(AuthController.login));

export default router;