// server.test.js
const request = require('supertest');
const app = require('./server');

describe('Hello World API', () => {
  it('GET /hello should return Hello World message', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.body).toEqual({ message: 'Hello World!' });
  });

  it('GET /unknown should return 404', async () => {
    const response = await request(app).get('/unknown');
    expect(response.statusCode).toBe(404);
  });
});
