//CodeceptJS実行サンプル
//以下コマンド実行で、このテスト単体実行できます
//JOPS_testSample.js を JOPS_test.js にリネーム
//npx codeceptjs run .\testScripts\sandbox\sample\JOPS_test.js --verbose
//テスト終わったらファイル名を戻しておく

Feature('サンプル用JOPSページ閲覧').retry(1);//不慮の失敗時のリトライ回数。この回数内で成功すれば合格。

const targetPage = 'https://www.jops.co.jp'


Scenario('JOPSホームページを開く', async ({ I }) => {
    //ページを開く
    I.amOnPage(targetPage)
    //ページ内文字列の存在を確認
    I.see('（株）日本オープンシステムズ')
    //スクリーンショットを取る（trueで全画面）
    I.capture('jopsMainpage.png', true)

    //クリック
    I.click('お問い合わせ')

    //    I.checkOption('東京事業所')
    //文字列入力(placeholderを根拠に特定することができる)
    I.fillField('姓', '杉山')
    //文字列入力(nameタグ指定する場合)
    I.fillField('inquiry', 'こんにちは')

    //文字列入力(nameタグ指定する場合)
    I.fillField('mail_address', 'ssugiya@jops.co.jp')
    //チェックボックスクリック
    I.click('上記の個人情報保護方針に同意する')

    I.capture('jopsContactPage.png', true)

    //ボタンクリック（ID指定する場合）
    I.click('#fresetBtn')
    //I.click('キャンセル')//こっちのほうが可読性高いけどね

}).tag('@jops').tag('sample');

