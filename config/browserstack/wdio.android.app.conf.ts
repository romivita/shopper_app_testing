import { config as sharedConfig } from './wdio.shared.bs.conf.ts';

export const config = {
  ...sharedConfig,

  capabilities: [
    {
      ...sharedConfig.capabilities[0],
      'appium:app': 'bs://cbfffcf944de868b7c94cd48f55b093b6dffe911',
      'bstack:options': {
        deviceName: 'Samsung Galaxy S10e',
        platformName: 'android',
        platformVersion: '9.0',
        projectName: 'SAT Android App',
        idleTimeout: 180,
      },
    },
  ],
};
