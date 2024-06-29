import { config as sharedConfig } from './wdio.shared.local.conf.ts';

export const config: WebdriverIO.Config = {
  ...sharedConfig,

  capabilities: [
    {
      ...sharedConfig.capabilities[0],
      platformName: 'Android',
      'appium:deviceName': 'Pixel 8 API 34',
      'appium:app': 'apps/android/app-debug.apk',
    },
  ],
};
