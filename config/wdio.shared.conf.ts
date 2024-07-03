import type { Options } from '@wdio/types';

export const config: Options.Testrunner = {
  runner: 'local',
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: './tsconfig.json',
      transpileOnly: true,
    },
  },

  specs: ['../../test/specs/**/*.ts'],

  suites: {
    login: ['../../test/specs/login.spec.ts'],
    catalog: ['../../test/specs/catalog.spec.ts'],
    cart: ['../../test/specs/cart.spec.ts'],
  },

  capabilities: [{
    'appium:automationName': 'Flutter',
  }],

  logLevel: 'debug',

  waitforTimeout: 90000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  framework: 'mocha',

  specFileRetries: 1,

  specFileRetriesDelay: 0,

  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 3 * 60 * 1000,
  },
};
