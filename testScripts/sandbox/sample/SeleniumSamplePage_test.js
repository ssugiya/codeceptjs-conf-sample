//CodeceptJS実行サンプル
//以下コマンド実行で、このテスト単体実行できます
//npx codeceptjs run .\testScripts\sandbox\sample\SeleniumSamplePage_test.js --steps


Feature('Seleniumサンプル用サイト').retry(2);//不慮の失敗時のリトライ回数。この回数内で成功すれば合格。

const targetPage = 'http://example.selenium.jp/reserveApp_Renewal/'

Scenario('予約登録', ({ I }) => {


    I.amOnPage(targetPage)
    I.see('予約フォーム')//,div.container > h1

    I.fillField('#guestname', 'すぎやま')
    I.selectOption('#reserve_term', '2')
    I.selectOption('#headcount', '3')

    I.click('#breakfast_off')
    I.click('#breakfast_on')

    I.click('#plan_a')
    I.click('#plan_b')

    I.fillField('#datePick', '2020/11/11')

    I.click('利用規約に同意して次へ')

}).tag('sample');

