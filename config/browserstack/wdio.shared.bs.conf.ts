import { config as baseConfig } from '../wdio.shared.conf.ts';

export const config = {
  ...baseConfig,
  ...{
    user: process.env.BS_USERNAME,
    key: process.env.BS_ACCESS_KEY,
    hostname: 'hub.browserstack.com',
    services: [
      [
        'browserstack',
      ],
    ],

    specFileRetries: 0,

    capabilities: [
      {
        ...baseConfig.capabilities[0],
        'appium:appiumVersion': '2.4.1',
      },
    ],

    maxInstances: 1,
  },
};
