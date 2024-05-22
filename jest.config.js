/** @type {import('jest').Config} */
const config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // setupFiles: ['./test/env-setup.ts'],
  setupFilesAfterEnv: ['./test/test-setup.ts'],
  // node_modules is default.
  // testPathIgnorePatterns: ['/node_modules/', '/cypress/'],
  modulePathIgnorePatterns: ['/dist/'],
};
export default config;
