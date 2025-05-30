import {successResponse} from '#src/utils/response.util';

class UserController {

    // complete these methods
    async listAll(req, res) {
        return successResponse(res, 'Users list', [
            {
                'id': '64e72f3bb6dc7b001f2a8c12',
                'name': 'John Doe',
                'email': 'john@example.com',
                'status': 'active'
            }
        ]);
    }
    async getById(req, res) {
        const id = req.params.id;
        return successResponse(res, 'User fetched successfully', {
            'id': id,
            'name': 'John Doe',
            'email': 'john@example.com',
            'status': 'active'
        });
    }
    async store(req, res) {
        return successResponse(res, 'User created successfully', {
            'id': '64e72f3bb6dc7b001f2a8c12',
            'name': 'John Doe',
            'email': 'john@example.com',
            'status': 'active'
        }, 201);
    }
    async update(req, res) {
        const id = req.params.id;

        return successResponse(res, 'User updated successfully', {
            'id': id,
            'name': 'John Doe',
            'email': 'john@example.com',
            'status': 'active'
        });
    }
    async delete(req, res) {
        return successResponse(res, 'User deleted successfully');
    }
}

export default new UserController();