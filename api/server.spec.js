const request = require('supertest');

const server = require('./server');

// testing endpoints
describe('server.js', () => {
  describe('GET /', () => {
    // returns correct http status code
    it('status code should be 200 OK', async () => {
      const res = await request(server).get('/');
      expect(res.status).toBe(200);
    });
    // returns correct data type
    it('res.type should be JSON', async () => {
      const res = await request(server).get('/');
      expect(res.type).toBe('application/json');
    });
    // returns correct data
    it("res.body should equal { api: 'up' }", async () => {
      const res = await request(server).get('/');
      expect(res.body).toEqual({ api: 'up' });
    });
  });
});
