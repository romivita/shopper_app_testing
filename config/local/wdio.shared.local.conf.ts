import { config as baseConfig } from '../wdio.shared.conf.ts';

export const config: WebdriverIO.Config = {
  ...baseConfig,
  ...{
    port: 4723,
    services: [
      [
        'appium',
        {
          args: {
            relaxedSecurity: true,
            log: './logs/appium.log',
          },
        },
      ],
    ],

    maxInstances: 1,

    bail: 0
  },
};
