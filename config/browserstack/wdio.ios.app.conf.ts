import { config as sharedConfig } from './wdio.shared.bs.conf.ts';

export const config = {
  ...sharedConfig,
  ...{
    capabilities: [
      {
        ...sharedConfig.capabilities[0],
        'appium:app': process.env.IOS_APP,
        'bstack:options': {
          deviceName: 'iPhone 11 Pro Max',
          platformName: 'iOS',
          projectName: process.env.BUILD_NAME + ' iOS App',
          buildName: 'Suite: ' + process.env.BUILD_TAGS,
          idleTimeout: 180,
        },
      },
    ],
  },
};
