import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'node:fs/promises';
import allure from 'allure-commandline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const allureResultsDir = path.join(__dirname, './../test/reports/allure-results');
const allureReportDir = path.join(__dirname, './../test/reports/allure-report');

export const config: WebdriverIO.Config = {
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

  waitforTimeout: 1000,

  connectionRetryCount: 3,

  framework: 'mocha',

  specFileRetries: 1,

  specFileRetriesDelay: 0,

  reporters: [
    'spec',
    [
      'allure',
      {
        outputDir: allureResultsDir,
      },
    ],
  ],

  mochaOpts: {
    ui: 'bdd'
  },

  async onPrepare() {
    await fs.rm(allureResultsDir, { recursive: true, force: true });
    await fs.rm(allureReportDir, { recursive: true, force: true });
  },

  onComplete() {
    const generation = allure(['generate', allureResultsDir, '-o', allureReportDir]);
    return new Promise<void>((resolve, reject) => {
      const generationTimeout = setTimeout(
        () => reject(new Error('Could not generate Allure report')),
        5000,
      );

      generation.on('exit', (exitCode) => {
        clearTimeout(generationTimeout);

        if (exitCode !== 0) {
          return reject(new Error('Could not generate Allure report'));
        }

        console.log('Allure report successfully generated');
        resolve();
      });
    });
  },
};
