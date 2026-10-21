ましろLINE Phase 1.5 AI版 GitHub Pages更新用

GitHubの sabatubo-coder/mashiro-line リポジトリへ、このフォルダ内の以下を上書きしてください。
- index.html
- config.js
- sw.js
- manifest.webmanifest
- icon-192.png
- icon-512.png
- apple-touch-icon.png

AIバックエンドURLは config.js に設定済みです。
初回送信時は APP_ACCESS_CODE の入力だけが求められます。
OPENAI_API_KEY はこのPWAには含まれていません。

既存会話履歴は同じlocalStorageキーを使用するため、通常は保持されます。
