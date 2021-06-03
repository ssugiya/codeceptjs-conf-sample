const merge = require("lodash.merge")
const { config: commonConfig } = require("./codecept.common.conf.js");
const { config: defaultConfig } = require("./codecept.playwright.conf.js");
exports.config = merge(commonConfig, defaultConfig)

