require('dotenv').config()
const baseURL = process.env.baseURL.replace(/\/$/, '')

const merge = require("lodash.merge")
const { config: commonConfig } = require("./codecept.common.conf.js");

const specificConfig = {
  helpers: {
    WebDriver: {
      url: baseURL,
      browser: 'internet explorer',
      timeouts: {
        "script": 60000,
        "page load": 5000
      },
      desiredCapabilities: {
        ieOptions: {
          "ie.browserCommandLineSwitches": "-private",
          "ie.usePerProcessProxy": true,
          "arch": "ia32"
        },
      },
      ie: {
        "arch": "ia32"
      },
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      smartWait: 5000,
      waitForTimeout: 5000,
      keepBrowserState: false,
      keepCookies: false,
      windowSize: '1920x1080',
    },
  },
  plugins: {
    wdio: {
      enabled: true,
      services: ['selenium-standalone'],
      seleniumArgs: {
        drivers: {
          chrome: {},
          firefox: {},
          // Use ia32 version of IEDriver as x64 version is not stable.
          ie: { arch: "ia32" }
        }
      },
      seleniumInstallArgs: {
        drivers: {
          chrome: {},
          firefox: {},
          ie: { arch: "ia32" },
        }
      }
    },
  }
}

exports.config = merge(commonConfig, specificConfig)
