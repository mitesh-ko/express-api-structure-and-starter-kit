import UserModel from '#models/User.model';
import {failedResponse, successResponse} from '#src/utils/response.util';
import {loginValidation, registrationValidation} from '#src/app/auth/auth.validation';
import {validator} from '#src/utils/validation.util';

class AuthController {
    async register(req, res) {

        const values = await validator(res, registrationValidation, req.body);
        if (!values) return;

        // Setup complete logic for your business requirement
        // use service.js if needed
        try {
            const isUserExist = await UserModel.findOne({email: req.body.email})
            if (isUserExist) {
                return failedResponse(res, 'User already exists', 400);
            }

            let userObj = new UserModel({
                email: req.body.email,
            })
            const user = await userObj.save();
            return successResponse(res, 'User registered successfully', {user});

        } catch (error) {
            return failedResponse(res, 'Registration failed', 500, error);
        }
    }

    async login(req, res) {
        const values = await validator(res, loginValidation, req.body);
        if (!values) return;

        // Setup complete logic for your business requirement
        try {
            return successResponse(res, 'Login successful', {user: req.body});
        } catch (error) {
            return failedResponse(res, 'Login failed', 500, error);
        }
    }
}

export default new AuthController();