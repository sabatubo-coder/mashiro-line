ましろLINE Phase 3.2.8
Push配信診断・未読バッジ信頼性 Ver.1

更新URL:
https://sabatubo-coder.github.io/mashiro-line/?v=328

設定画面の通知診断に「直近Push配信ログ」を追加。

テスト方法:
1. アプリを閉じる
2. グループで2〜5通程度の自律会話が発生するまで待つ
3. 通知センターとアイコンバッジを確認
4. アプリを開く
5. 設定→通知診断を実行

ログの読み方:
- Pushサービス受理:
  BackendからApple/Web Pushサービスへの送信は成功
- 到着時刻済み・未送信:
  Backend側でまだPush送信されていない
- 再送待ち:
  Push送信が失敗して再試行予定
- 到着時刻前:
  scheduledReplyの予定時刻がまだ来ていない

Phase 3.2.6スクロール修正と3.2.7意味重複ガードは維持。
