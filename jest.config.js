module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/src/setup-jest.ts'],
  testEnvironment: 'jsdom',
  collectCoverageFrom: ['src/app/**/*.ts', '!src/main.ts'],
  coverageDirectory: 'coverage',
  moduleFileExtensions: ['ts', 'html', 'js', 'json'],
};
