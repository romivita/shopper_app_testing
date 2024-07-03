import { config as sharedConfig } from './wdio.shared.bs.conf.ts';

export const config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        ...sharedConfig.capabilities[0],
        'platformName': 'ios',
        'appium:deviceName': 'iPhone 11 Pro Max',
        'appium:app': process.env.IOS_APP,
        'bstack:options': {
          projectName: process.env.BUILD_NAME + ' iOS App',
          buildName: 'Suite: ' + process.env.BUILD_TAGS,
          idleTimeout: 180,
        },
      },
    ],
  },
};
