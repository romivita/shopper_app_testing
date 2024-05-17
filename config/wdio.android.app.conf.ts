import { config as baseConfig } from './wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
  ...baseConfig,

  capabilities: [
    {
      ...baseConfig.capabilities[0],
      platformName: 'Android',
      'appium:deviceName': 'Pixel 5 API 33',
      'appium:platformVersion': '13.0',
      'appium:app': 'apps/app-debug.apk',
    },
  ],
};
