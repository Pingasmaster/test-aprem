// tests endpoint santé
const request = require('supertest');
const app = require('../server');

describe('endpoint /health', () => {
  // code 200
  test('retourne 200', async () => {
    const rep = await request(app).get('/health');
    expect(rep.status).toBe(200);
  });

  // corps json correct
  test('retourne statut ok', async () => {
    const rep = await request(app).get('/health');
    expect(rep.body.statut).toBe('ok');
  });
});
