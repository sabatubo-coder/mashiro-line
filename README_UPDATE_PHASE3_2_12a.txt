ましろLINE Phase 3.2.12a
トーク遷移・初期スクロール安定化

【いつもの更新順】
1. Replit の server.mjs を更新
2. /health を確認
3. GitHub PagesをこのPWAフォルダ一式で上書き
4. Safariで更新用URLを一度開く
5. ホーム画面版「ましろLINE」を完全終了
6. ホーム画面版を再起動

【1. Backend確認】
/health:
https://mashiro-line-backend-importzip--misomimizu.replit.app/health

version:
phase3.2.12a-talk-transition-initial-scroll-stability-v1

【2. GitHub Pages更新】
このPWAフォルダの中身を、GitHub Pages の mashiro-line 側へすべて上書きしてください。
assets フォルダを含むPWA一式をそのまま更新してください。

【3. PWA更新後、再起動前にSafariで開くURL】
https://sabatubo-coder.github.io/mashiro-line/?v=3212a

Safariでページが正常に表示されたら、ホーム画面版を完全終了してから再起動してください。
Service Worker のキャッシュ名はPhase 3.2.12aへ更新済みです。

【Phase 3.2.12a の修正内容】
■ トーク一覧→トーク画面
- iOS PWAで最初のタップが取りこぼされにくいよう、トーク一覧全体で安定したpointer/clickイベント委譲を使用
- 指を動かして一覧をスクロールした場合は誤ってトークを開かない
- pointerup後の合成clickを抑制し、二重遷移を防止

■ トーク画面を開いた直後
- 常時 scroll-behavior:smooth を廃止
- 初期位置合わせ中はメッセージ欄を一瞬だけ非表示
- 最新メッセージ位置へ即時配置してから表示
- 上から下へスクロールしていく様子を見せない

■ 画像読み込み時
- 画像の縦横サイズが分かる場合は表示前に領域を確保
- 3.2.11の内蔵自発画像は4:3領域を事前確保
- 画像読み込みによる高さ変化とスクロールずれを軽減

■ 新着受信時
- 最下部付近にいる場合のみ新着へ追従
- 過去ログを読んでいる最中は現在のスクロール位置を維持

【確認ポイント】
A. トーク一覧で夏樹・四季・グループ等を1回タップすると、その1回で開く
B. トークを開いた瞬間に最新メッセージ付近が表示され、最古→最新のスクロールアニメーションが見えない
C. 画像のある長いトークでも、開いた後に大きく位置が跳ねない
D. 過去メッセージまで上へスクロールした状態で新着が来ても最下部へ強制移動しない
E. 最下部にいる時の新着は従来通り自然に追従する

既存の会話履歴・記憶データを消す必要はありません。
