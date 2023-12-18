const request = require('supertest');
const app = require('../index');

describe('Pruebas de la aplicación', () => {
  it('Debe responder con ¡Hola, mundo!', async () => {
    const response = await request(app).get('/');
    expect(response.text).toBe('¡Hola, mundo!');
  });
});
