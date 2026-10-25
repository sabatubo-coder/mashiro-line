ましろLINE Phase 3.2.7
未読バッジ同期強化・グループ意味重複ガード Ver.1

更新URL:
https://sabatubo-coder.github.io/mashiro-line/?v=327

【バッジ】
Service WorkerがbadgeRevisionを保存します。
古いPushが新しいPushより後に処理されても、
例えば最新5を古い3が上書きしません。

トークを読んだ時、seen APIから返る
サーバー側の最新未読数を即座にバッジへ反映します。
通常のpush sync時にもサーバー未読数で再同期します。

【グループ重複】
ブンジが
「家にあるもので済ませる。午後コーヒーを買う」
と話した後に、ほぼ同内容を再発言するケースはガード対象です。
