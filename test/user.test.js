const request = require('supertest');
const app = require('../Server');
const User = require('../models/User');

describe('User API Tests', () => {
  let testUser;

  beforeAll(async () => {
    testUser = await User.create({
      name: 'Test User',
      email: 'test@example.com',
      age: 25
    });
  });

  it('should return user data', async () => {
    const res = await request(app)
      .get(`/users/${testUser._id}`)
      .expect(200);
    

    expect(res.body).toEqual({
      user: {
        _id: testUser._id.toString(),
        name: 'Test User',
        email: 'test@example.com',
        age: 25,
        __v: 0
      }
    });
  });
});