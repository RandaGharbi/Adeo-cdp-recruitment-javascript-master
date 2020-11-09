module.exports = {
  verbose: true,
  collectCoverageFrom: ['/app//*.js'],
  coverageThreshold: {
    global: {
      statements: 20,
      branches: 20,
      functions: 20,
      lines: 20,
    },
  },
};