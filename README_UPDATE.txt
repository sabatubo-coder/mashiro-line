ましろLINE Phase 2.4 通知・自発メッセージ強化 Ver.1 - PWA

1. Backendを先にPhase 2.4へ更新し、/healthでpush.databaseConfigured=trueを確認。
2. GitHub PagesのファイルをこのZIPの内容で上書き。
3. Commit後、数分待つ。
4. Safariで:
   https://sabatubo-coder.github.io/mashiro-line/?v=240
5. ホーム画面のましろLINEを完全終了→再起動。
6. 設定 > 通知 を開く。
7. 「通知を有効にする」を押し、iPhoneの通知許可で「許可」。
8. 「テスト通知」を押して通知が届くか確認。

重要:
iPhone/iPadではWeb Push通知は、ホーム画面に追加したWebアプリから有効化してください。
通常のSafariタブでは設定画面に案内を表示します。

通知ON時のみ、最近の会話・長期記憶・通知状態がユーザー自身のReplit Databaseへ同期されます。
アイコン画像は送信しません。
