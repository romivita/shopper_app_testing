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

  specs: ['../test/specs/login.spec.ts'],

  capabilities: [
    {
      maxInstances: 1,
      'appium:automationName': 'Flutter',
    },
  ],

  logLevel: 'debug',

  bail: 0,

  waitforTimeout: 90000,

  connectionRetryTimeout: 120000,

  connectionRetryCount: 3,

  services: [
    [
      'appium',
      {
        args: {
          relaxedSecurity: true,
          log: './logs/appium.log',
        },
      },
    ],
  ],

  framework: 'mocha',

  specFileRetries: 1,

  specFileRetriesDelay: 0,

  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 3 * 60 * 1000,
  },
};
