import app from '../src/app';
import request from 'supertest';

describe('GET /api/entity/', () => {
    test('Should respond with a 200 status code', async () => {
        const response = await request(app).get('/api/entity/1').send();
        expect(response.status).toBe(200);
    })
})
