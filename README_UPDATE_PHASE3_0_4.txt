ましろLINE Phase 3.0.4 診断タイムスタンプ競合修正

更新後URL:
https://sabatubo-coder.github.io/mashiro-line/?v=304

診断欄の変更:
- 「最後の判定状態」を追加
- Backend判定中は
  最後の判定状態: 実行中
  最後の判定終了: 実行中
  最後の判定結果: 実行中
  と表示

これにより、
開始時刻が今回・終了時刻が前回
という不可能な組み合わせを表示しません。

BackendもPhase 3.0.4へ更新してください。
