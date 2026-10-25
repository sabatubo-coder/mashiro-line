ましろLINE Phase 3.2.5
トーク画面固定・予定時間整合性 Ver.1

更新URL:
https://sabatubo-coder.github.io/mashiro-line/?v=325

トーク画面:
- html/body全体のスクロールを固定
- chat-screen: auto / minmax(0,1fr) / auto / auto
- message-listだけ縦スクロール
- composerはスクロール領域外
- visualViewport height/offsetTopへ追従
- キーボード開閉・端末回転でも再同期
- safe-area-inset-bottom維持

確認:
1. 長いトークを上下スクロール
2. 入力欄が常に画面下部へ残る
3. 入力欄の下に巨大な空白が出ない
4. キーボード開閉後も崩れない
