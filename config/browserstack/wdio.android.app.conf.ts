import { config as sharedConfig } from './wdio.shared.bs.conf.ts';

export const config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        ...sharedConfig.capabilities[0],
        'platformName': 'android',
        'appium:platformVersion': '9.0',
        'appium:deviceName': 'Samsung Galaxy S10e',
        'appium:app': process.env.ANDROID_APP,
        'bstack:options': {
          projectName: process.env.BUILD_NAME + ' Android App',
          buildName: 'Suite: ' + process.env.BUILD_TAGS,
          idleTimeout: 180,
        },
      },
    ],
  },
};
