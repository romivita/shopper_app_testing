import { config as sharedConfig } from './wdio.shared.local.conf.ts';

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  capabilities: [
    {
      ...sharedConfig.capabilities[0],
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 15 Pro Max',
      'appium:platformVersion': '17.5',
      'appium:app': 'apps/ios/Runner.app',
    },
  ],
};
