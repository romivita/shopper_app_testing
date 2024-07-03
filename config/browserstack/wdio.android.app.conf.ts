import { config as sharedConfig } from './wdio.shared.bs.conf.ts';

export const config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        ...sharedConfig.capabilities[0],
        'appium:app': process.env.ANDROID_APP,
        'bstack:options': {
          deviceName: 'Samsung Galaxy S10e',
          platformName: 'android',
          platformVersion: '9.0',
          projectName: process.env.BUILD_NAME + ' Android App',
          buildName: 'Suite: ' + process.env.BUILD_TAGS,
          idleTimeout: 180,
        },
      },
    ],
  },
};
