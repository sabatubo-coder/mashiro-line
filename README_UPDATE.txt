ましろLINE Phase 1.7 自発メッセージ Ver.1 - PWA

更新手順:
1. GitHub の sabatubo-coder/mashiro-line に、このZIP内のファイルをすべて上書き。
2. Commit changes。
3. 2〜5分待つ。
4. Safariで次を一度開く:
   https://sabatubo-coder.github.io/mashiro-line/?v=170
5. ホーム画面のましろLINEを完全終了して再起動。

初回テスト:
- 更新後、ましろ側から何も送らず2〜5分ほどPWAを開いて待つ。
- 夏樹が「入力中…」になり、自発メッセージが1通来れば成功。
- ユーザーから先にメッセージを送った場合は、自発メッセージ候補は通常間隔へ延期される。

注意:
- Ver.1では、PWAを完全終了している間のPush通知はまだありません。
- アプリを閉じている間に送信候補時刻を過ぎた場合、次回起動/復帰時に判定します。
