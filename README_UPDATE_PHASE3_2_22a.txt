Phase 3.2.22a リアクション通知・バッジ既読同期修復

主な変更:
- キャラクターのリアクション単体Pushでも既読状態をBackendへ同期
- リアクション通知がホーム画面バッジだけに残る問題を修復
- 該当トークを開くと、そのトークで配信済みの未確認Pushをまとめて既読化
- 新しい吹き出しを作らないリアクションPushも対象
- すでに発生済みの取りこぼしリアクション通知も、該当トークを開くことで復旧可能
- 未来の予約返信はトークを開いても先に既読化しない
- リアクション到着時に該当トークを開いている場合は即座に既読同期
- Phase 3.2.22 の学校時間割・休み時間機能はそのまま維持

Backend health version:
phase3.2.22a-reaction-badge-seen-sync-v1

Safari cache bust:
https://sabatubo-coder.github.io/mashiro-line/?v=3222a
