require('dotenv').config()
const baseURL = process.env.baseURL.replace(/\/$/, '')

const merge = require("lodash.merge")
const { config: commonConfig } = require("./codecept.common.conf.js");

const specificConfig = {
    helpers: {
        Playwright: {
            show: true,
            url: baseURL,
            browser: process.profile || 'chromium',
            host: '127.0.0.1',
            port: 4444,
            restart: false,
            smartWait: 3000,
            waitForTimeout: 3000,
            keepBrowserState: false,
            keepCookies: false,
            fullPageScreenshots: true,
            // waitForNavigation: "networkidle0",
            windowSize: '1920x1080',
            chromium: {
                args: [
                    "--disable-gpu",
                    '--disable-infobars',
                    "--no-sandbox",
                    "--lang=ja-JP",
                ],
            },
            firefox: {
                args: ['--ignore-certificate-errors'],
            },
        }
    }
}
exports.config = merge(commonConfig, specificConfig)
