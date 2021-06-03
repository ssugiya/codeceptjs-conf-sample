require('dotenv').config()
const baseURL = process.env.baseURL.replace(/\/$/, '')

const merge = require("lodash.merge")
const { config: commonConfig } = require("./codecept.common.conf.js");

const specificConfig = {
    helpers: {
        WebDriver: {
            url: baseURL,
            browser: process.profile || 'chrome',
            host: '127.0.0.1',
            port: 4444,
            restart: false,
            smartWait: 5000,
            waitForTimeout: 5000,
            keepBrowserState: false,
            keepCookies: false,
            // windowSize: '1024x768',
            // windowSize: '1366x768',
            // windowSize: '1600x900',
            windowSize: '1920x1080',
            // windowSize: 'maximize',
            desiredCapabilities: {
                chromeOptions: { args: ["--disable-gpu", "--no-sandbox"] }
            }
        }
    },
    plugins: {
        wdio: {
            enabled: true,
            services: ['selenium-standalone']
        },
    }
}
exports.config = merge(commonConfig, specificConfig)
