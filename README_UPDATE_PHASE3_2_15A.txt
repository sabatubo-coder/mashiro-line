MashiroLine Phase 3.2.15a
引用返信精度・通常DM重複防止修復

更新手順
1. Backend/server.mjs で Replit の既存 server.mjs を上書き
2. Replit を再起動
3. /health を開き、version が次になっていることを確認
   phase3.2.15a-quote-precision-dm-duplicate-guard-v1
4. PWA フォルダ一式で GitHub Pages を上書き
5. Safari で次を一度開く
   https://sabatubo-coder.github.io/mashiro-line/?v=3215a
6. 正常表示を確認
7. ホーム画面版ましろLINEを完全終了し、再起動

主な修正
- 通常DMの引用先を原則ましろの過去発言だけに限定
- 「それ／あれ」だけでは引用を発動しない
- 明確な過去参照＋内容上の関連がある場合だけ引用
- 通常DMの完全一致返信を検出して再生成
- 通常DMの高類似返信も検出して再生成
- 明示的に「もう一度言って」と頼まれた場合は繰り返しを許可
- 3.2.15までの自発画像・スタンプ・リアクション・引用表示・日常イベント連続性を維持
