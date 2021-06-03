require('dotenv').config()
const baseURL = process.env.baseURL.replace(/\/$/, '')

const merge = require("lodash.merge")
const { config: commonConfig } = require("./codecept.common.conf.js");

const specificConfig = {
  helpers: {
    Playwright: {
      show: false,
      url: baseURL,
      browser: process.profile || 'chromium',
      host: '127.0.0.1',
      port: 4444,
      restart: false,
      smartWait: 5000,
      waitForTimeout: 10000,
      keepBrowserState: false,
      keepCookies: false,
      fullPageScreenshots: true,
      // waitForNavigation: "networkidle0",
      windowSize: '1920x1080',
      "defaultViewport": {
        "width": 1920,
        "height": 1080,
      },
      desiredCapabilities: {
        chromeOptions: {
          args: [
            "--disable-gpu",
            '--disable-infobars',
            "--no-sandbox",
            "--window-size=1020,1080",
          ]
        }
      }
    }
  }
}
exports.config = merge(commonConfig, specificConfig)
