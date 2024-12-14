import { config as sharedConfig } from './wdio.shared.bs.conf.ts';

export const config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        ...sharedConfig.capabilities[0],
        'appium:app': process.env.IOS_APP_CUSTOM_ID,
        'bstack:options': {
          platformName: 'ios',
          platformVersion: '1[34]',
          deviceName: 'iPhone .*',
          projectName: process.env.BUILD_NAME + ' iOS App',
          buildName: 'Suite: ' + process.env.BUILD_TAGS,
          idleTimeout: 180,
        },
      },
    ],
    maxInstances: 2,
  },
};
