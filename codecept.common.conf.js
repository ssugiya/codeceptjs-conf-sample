require('dotenv').config()
const { setHeadlessWhen } = require('@codeceptjs/configure')

const baseURL = process.env.baseURL.replace(/\/$/, '')
const user1id = process.env.user1id
const user1Password = process.env.user1Password
const user2id = process.env.user2id
const user2Password = process.env.user2Password
const user3id = process.env.user3id
const user3Password = process.env.user3Password
const userMsAccount1id = process.env.userMsAccount1id
const userMsAccount1Password = process.env.userMsAccount1Password
const userMsAccount2id = process.env.userMsAccount2id
const userMsAccount2Password = process.env.userMsAccount2Password
const userMsAccount3id = process.env.userMsAccount3id
const userMsAccount3Password = process.env.userMsAccount3Password
const userGoogleAccount1id = process.env.userGoogleAccount1id
const userGoogleAccount1Password = process.env.userGoogleAccount1Password
const targetDomain = baseURL.match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1]

setHeadlessWhen(process.env.HEADLESS)
let config = {
  tests: './testScripts/**/*_test.js',
  output: './output',
  helpers: {
    //Playwright, appiumなどは個別に読み込む
    REST: {
      endpoint: baseURL.replace(/\/$/, '') + '/api',
      "defaultHeaders": {
        "Content-Type": "application/json"
      }
    },
    Mochawesome: {
      "uniqueScreenshotNames": true,
    },
    FileSystem: {},
  },
  include: {
    I: './steps_file.js',
    reservePage: './pages/reserve.js',
  },
  bootstrap: null,
  mocha: {
    reporterOptions: {
      "codeceptjs-cli-reporter": {
        stdout: "-",
        options: {
          verbose: true,
          steps: true,
        }
      },
      mochawesome: {
        stdout: "./output/console.log",
        options: {
          reportDir: `./output`,
          reportFilename: `${process.profile}\-${baseURL.replace(/\/$/, '').match(/^https?:\/{2,}(.*?)(?:\/|\?|#|$)/)[1]}`,
          reportTitle: `${targetDomain}:${process.profile}`,
          reportPageTitle: `${targetDomain}\:${process.profile}`,
          autoOpen: true,
          timestamp: 'yyyy/mm/dd HH:MM:ss',
          saveJson: false
        },
      },
    },
  },
  name: 'codeceptjs-conf-sample',
  plugins: {
    autoDelay: {
      enabled: true
    },
    pauseOnFail: {},
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      fullPageScreenshots: true,
      ignoreSteps: [/grab/, /wait/, /Cookie/, /Request/, /capture/, /say/, /scroll/, /addMochawesomeContext/, /screenshot/, /handleDownloads/, /waitForFile/, /seeInThisFile/]
    },
    retryFailedStep: {
      enabled: true,
      ignoreSteps: ['scroll*', /Cookie/]
    },
    autoLogin: {
      enabled: true,
      saveToFile: true,
      inject: 'login',
      users: {
        //ログイン手順はsteps_files.jsに記載
        user001: {
          restore: (I, cookie) => I.loginRestore(cookie),
          check: (I) => I.loginCheck(),
          login: (I) => I.loginAs(user1id, user1Password),
        },
        user002: {
          restore: (I, cookie) => I.loginRestore(cookie),
          check: (I) => I.loginCheck(),
          login: (I) => I.loginAs(user2id, user2Password),
        },
        user003: {
          restore: (I, cookie) => I.loginRestore(cookie),
          check: (I) => I.loginCheck(),
          login: (I) => I.loginAs(user3id, user3Password),
        },
        user_MsAccount_001: {
          restore: (I, cookie) => I.loginRestore(cookie),
          check: (I) => I.loginCheck(),
          login: (I) => I.loginMsAccountAs(userMsAccount1id, userMsAccount1Password),
        },
        user_MsAccount_002: {
          restore: (I, cookie) => I.loginRestore(cookie),
          check: (I) => I.loginCheck(),
          login: (I) => I.loginMsAccountAs(userMsAccount2id, userMsAccount2Password),
        },
        user_MsAccount_003: {
          restore: (I, cookie) => I.loginRestore(cookie),
          check: (I) => I.loginCheck(),
          login: (I) => I.loginMsAccountAs(userMsAccount3id, userMsAccount3Password),
        },
        user_GoogleAccount_001: {
          restore: (I, cookie) => I.loginRestore(cookie),
          check: (I) => I.loginCheck(),
          login: (I) => I.loginGoogleAccountAs(userGoogleAccount1id, userGoogleAccount1Password),
        },
      },
    },
  }
}

exports.config = config
