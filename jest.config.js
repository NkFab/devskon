module.exports = {
  testEnvironment: 'node',
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts|js)x?$',
  coveragePathIgnorePatterns: [
    'coverage',
    'node_modules',
    'middlewares',
    'server.js',
    'app.js',
    'database',
    'logger.js',
    'config'
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.js'],
  coverageThreshold: {
    global: {
      functions: 80,
      lines: 80,
      statements: -10
    }
  }
};
