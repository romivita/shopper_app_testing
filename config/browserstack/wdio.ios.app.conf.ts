import { config as sharedConfig } from './wdio.shared.bs.conf.ts';

export const config = {
  ...sharedConfig,

  capabilities: [
    {
      ...sharedConfig.capabilities[0],
      'appium:app': 'apps/ios/Runner.app',
      'bstack:options': {
        deviceName: 'iPhone 11 Pro Max',
        platformName: 'iOS',
        platformVersion: '13.5',
        projectName: 'SAT iOS App',
        idleTimeout: 180,
      },
    },
  ],
};
