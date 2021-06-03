// in this file you can append custom step methods to 'I' object
require('dotenv').config()
const { addDays, format } = require(('date-fns'))

module.exports = () => {
  return actor({
    loginRestore(cookie) {
      this.haveRequestHeaders({ 'accept-language': 'ja,en-US;q=0.9,en;q=0.8' })
      this.setCookie(cookie)
    },
    loginCheck() {
      this.haveRequestHeaders({ 'accept-language': 'ja,en-US;q=0.9,en;q=0.8' })
      this.amOnPage('/')//変な古いクッキーでログイン失敗してもクッキーの残骸が残る
      this.waitForElementUntilSeatsLoad()
    },
    loginAs(username, password) {
      this.haveRequestHeaders({ 'accept-language': 'ja,en-US;q=0.9,en;q=0.8' })
      this.clearCookie()//ここでクッキー消すと古いクッキーの残骸を使わないので安定する
      this.amOnPage('/')
      this.fillField('メールアドレス', username)
      this.fillField('パスワード', password)
      this.click('ログイン')
      this.waitForElementUntilSeatsLoad()
    },
    capture(fileName, isfullpage) {
      const path = '../.capture/'//スクリーンショット保存場所
      this.scrollPageToTop()
      this.saveScreenshot(`${path}${process.profile}-${fileName}`, true)
    },
    waitForElementUntilSeatsLoad(time = 20) {//待ち時間を指定されなければデフォルト20秒。
      // this.waitForElement('//*[name()="svg"]', time)
    }
  })
}

