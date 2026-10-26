ましろLINE Phase 3.2.16 PWA

PWAフォルダ一式をGitHub Pagesへ上書きしてください。
Safari確認URL: https://sabatubo-coder.github.io/mashiro-line/?v=3216

生成画像はPushイベントのgeneratedImageIdからBackendへ認証付き取得し、端末IndexedDBへキャッシュします。
取得失敗時は同イベントに設定された既存固定画像へフォールバックします。
