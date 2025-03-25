module.exports = {
  preset: '@shelf/jest-mongodb',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['./test/setup.js'],
  testTimeout: 30000,
  globalTeardown: './test/teardown.js'
};