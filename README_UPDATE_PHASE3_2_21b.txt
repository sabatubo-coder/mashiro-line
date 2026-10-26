MashiroLine Phase 3.2.21b PWA 更新手順

1. この PWA フォルダ一式で GitHub Pages 側を上書きしてください。
2. Safari で https://sabatubo-coder.github.io/mashiro-line/?v=3221b を一度開いてください。
3. ホーム画面版「ましろLINE」を完全終了し、再起動してください。
4. Backend /health の version は phase3.2.21b-proactive-time-freshness-v1 を確認してください。

Phase 3.2.21b:
- 自発LINEの「直近話題の続き」に実時間の鮮度判定を追加
- 通常の直近話題は原則3時間以内
- 登校準備・忘れ物・出発前など時間依存の強い話題は原則90分以内
- 期限切れの終了済み会話を同じ結論・締め言葉で再開しない
- 3.2.15の継続イベントと「またあとで」の再開予定は例外
- グループ自律会話にも時間鮮度ルールを追加
