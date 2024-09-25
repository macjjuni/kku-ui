/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  roots: ['<rootDir>/__tests__/'],
  preset: 'ts-jest',
  testPathIgnorePatterns: ['<rootDir>/node_modules/'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  transform: { '^.+\\.(ts|tsx)$': ['ts-jest'] },
  moduleNameMapper: {
    '\\.(css|scss)$': 'identity-obj-proxy',
    '@/(.*)$': '<rootDir>/src/$1', // @ <= alias path
    '^lodash-es$': 'lodash',
  },
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest-setup.ts'],
};
