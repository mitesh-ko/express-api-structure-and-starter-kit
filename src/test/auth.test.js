import request from 'supertest';
import app from '#root/server';
import {describe, it, expect} from '@jest/globals';

describe('POST /v1/login', () => {
    it('should login successfully with valid email and password', async () => {
        const loginData = {
            email: 'user@example.com',
            password: 'securePassword123',
        };

        const res = await request(app)
            .post('/v1/login')
            .send(loginData);

        expect(res.statusCode).toBe(200);
    });
});

