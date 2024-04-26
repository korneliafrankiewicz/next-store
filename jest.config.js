module.exports = {
    testEnvironment: 'jsdom',
    collectCoverage: true,
    transform: {
        '^.+\\.(ts|tsx)$': 'babel-jest',
      },
      setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
      moduleFileExtensions: ['js', 'jsx'],
      testEnvironment: 'node'
  };