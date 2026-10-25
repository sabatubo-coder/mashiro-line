ましろLINE Phase 3.2.12
画像会話コンテキスト・画像記憶 Ver.1

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
phase3.2.12-image-conversation-context-memory-v1

【2. GitHub Pages更新】
このPWAフォルダの中身を、GitHub Pages の mashiro-line 側へすべて上書きしてください。
assets/proactive を含むPWA一式をそのまま更新してください。

【3. PWA更新後、再起動前にSafariで開くURL】
https://sabatubo-coder.github.io/mashiro-line/?v=3212

Safariでページが正常に表示されたら、ホーム画面版を完全終了してから再起動してください。
Service Worker のキャッシュ名はPhase 3.2.12へ更新済みです。

【今回の確認ポイント（追々でOK）】
A. 個別トーク
- キャラが送った写真の直後に「これどこ？」「これ何？」と聞くと、その写真を前提に返答する
- 数時間後〜翌日に「さっきの写真」「昨日の写真」と言っても、最近の画像記憶から自然に参照できる
- キャラ自身が送った写真を不自然に忘れない

B. 捏造防止
- 写真だけから分からない具体的な店名・場所名などを勝手に断定しない
- 会話で場所等が判明した後は、その情報を使って自然に続けられる

C. グループ
- グループに送られた写真を参加者が共有情報として扱える
- 参加していないキャラクターへ情報が漏れない

D. 既存機能
- 3.2.11の自発画像送信が維持される
- 3.2.10aのスラング・絵文字・異常出力ガードが維持される
- 3.2.10の記憶・話題回収が維持される
- 3.2.9の横断オンライン・自発話題新鮮度が維持される

既存の会話履歴・記憶データを消す必要はありません。
