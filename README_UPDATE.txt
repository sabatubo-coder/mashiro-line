ましろLINE Phase 1.5 AI版 v1.5.3

変更点:
- Replit Autoscale の休止復帰対策として、送信前に /health へ軽いウォームアップを実施
- API通信のタイムアウトを25秒から45秒へ延長
- ネットワークエラー・429・5xx・タイムアウト時に一度だけ自動再試行
- AI返信待ち中は既存仕様どおり送信ボタンを無効化
- Service Worker キャッシュを v4 に更新

GitHub Pages の mashiro-line リポジトリへ全ファイルを上書きし、反映後に ?v=153 を付けたURLをSafariで一度開いてください。
