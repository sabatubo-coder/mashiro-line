ましろLINE Phase 3.2.6
スクロール安定化・未読バッジ同期 Ver.1

更新URL:
https://sabatubo-coder.github.io/mashiro-line/?v=326

スクロール:
- renderMessages()前に最下部状態と表示中メッセージのアンカーを保存
- 最下部にいた場合は再描画後も最下部を維持
- 過去ログ閲覧中は、見ていたメッセージの画面内位置を維持
- typing表示/非表示、既読更新、DM/グループ共通再描画に適用
- 非同期画像読み込み後も最下部なら再固定
- CSS overflow-anchorを無効化し、ブラウザ任せの自動アンカーと競合させない
- visualViewportのscroll監視を外し、resizeだけに限定

未読バッジ:
- トークを実際に開いた時だけseenとしてBackendへ同期
- PWAローカル未読数は従来どおり即時反映
- seen同期失敗時はローカルキューへ残して再送
