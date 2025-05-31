import UserModel from '#models/User.model';
import {failedResponse, successResponse} from '#src/utils/response.util';
import {loginValidation, registrationValidation} from '#src/app/auth/auth.validation';
import {validator} from '#src/utils/validation.util';
import bcrypt from 'bcrypt';

class AuthController {
    async register(req, res) {

        const validData = await validator(res, registrationValidation, req.body);
        if (!validData) return;

        delete validData.confirmPassword;
        validData.password = await bcrypt.hash(validData.password, 10);

        // Setup complete logic for your business requirement
        try {
            const isUserExist = await UserModel.findOne({email: req.body.email})
            if (isUserExist) {
                return failedResponse(res, 'User already exists', 400);
            }

            let userObj = new UserModel(validData);
            const user = await userObj.save();
            return successResponse(res, 'User registered successfully', {user});

        } catch (error) {
            return failedResponse(res, 'Registration failed', 500, error);
        }
    }

    async login(req, res) {
        const validData = await validator(res, loginValidation, req.body);
        if (!validData) return;

        // Setup complete logic for your business requirement
        try {
            return successResponse(res, 'logged in successfully', {
                token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
            });
        } catch (error) {
            return failedResponse(res, 'Login failed', 500, error);
        }
    }
}

export default new AuthController();