ましろLINE Phase 3.1.2 旧グループ既読互換修正

更新後URL:
https://sabatubo-coder.github.io/mashiro-line/?v=312

修正:
- 旧 readByCharacter=true は常に全員既読として表示
- 新 readByCharacters が部分的でも既読数を減らさない
- グループを開いた際、旧既読5ログを新方式の全員既読状態へ安全に移行
- 新規メッセージの段階的既読は維持

確認:
- 過去ログが既読5のまま
- 新規送信は既読1→2→3→…と増える
