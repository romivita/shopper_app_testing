import { config as baseConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
  ...baseConfig,

  capabilities: [
    {
      ...baseConfig.capabilities[0],
      platformName: 'iOS',
      'appium:deviceName': 'iPhone 13 Pro',
      'appium:platformVersion': '15.5',
      'appium:app': 'apps/Runner.app',
    },
  ],
};
