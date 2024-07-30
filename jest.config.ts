import type { InitialOptionsTsJest } from 'ts-jest';

import nextJest from 'next/jest';
import { pathsToModuleNameMapper } from 'ts-jest';
import { configureNextJestPreview } from 'jest-preview';
import { jsWithTs as tsjPreset } from 'ts-jest/presets';

import { compilerOptions } from './tsconfig.base.json';

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig: InitialOptionsTsJest = {
  globals: {
    'ts-jest': {
      tsconfig: './tsconfig.spec.json',
      isolatedModules: true,
    },
  },
  testEnvironment: 'jsdom',
  // Add support for tsconfig.baseUrl
  moduleDirectories: ['node_modules', '<rootDir>/'],
  // Load all paths from tsconfig
  moduleNameMapper: {
    ...pathsToModuleNameMapper(compilerOptions.paths),
  },
  coverageDirectory: 'tests/.coverage',
  // Allow to run tests in groups
  runner: 'groups',
  // Add more setup options before each test is run
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  reporters: ['default', ['jest-junit', { outputDirectory: 'tests/.coverage' }]],
  transform: {
    ...tsjPreset.transform,
    '.+\\.(css|styl|less|sass|scss)$': '<rootDir>/node_modules/jest-css-modules-transform',
  },
};

export default configureNextJestPreview(createJestConfig(customJestConfig));
