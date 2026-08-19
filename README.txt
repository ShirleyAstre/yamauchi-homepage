YAMAUCHI DEVICE REVIEW

■ 開き方
index.html をブラウザで開いてください。

■ ページ
index.html      TOP
mouse.html      マウス
mousepad.html   マウスパッド
keyboard.html   キーボード
keyswitch.html  キースイッチ
audio.html      イヤホン / ヘッドセット
monitor.html    モニター
other.html      その他
profile.html    プロフィール

■ レビュー追加
review-template.html をコピーして、製品ごとのHTMLを作成してください。
例: reviews/mouse/superlight2.html
カテゴリページ側から、そのHTMLへリンクを追加します。

※ reviews フォルダ配下に置く場合は、style.css や各ページへの相対パスを ../../style.css のように調整してください。
最初は管理しやすさ優先で、レビューHTMLをルート直下に置いても問題ありません。

■ 画像
images フォルダへ保存してください。WebP/JPEG推奨。


[v03]
- 背景の「YAMAUCHI Taro」を見える濃さに再調整
- コピーライトを「© YAMAUCHI」に変更


v04: TOP title changed to 「山内太郎のホームページ」, 「現在使用中」 changed to 「好きなデバイス」, and キースイッチ added.


【v05 変更点】
TOPページの「好きなデバイス」は、各カテゴリごとに1件〜複数件を縦に並べて表示できる構造に変更しました。
例：マウスだけ4件、モニターは1件、といったカテゴリごとに異なる件数で表示できます。


【レビューの並び順】
各カテゴリページのレビューには data-order という数字を持たせます。
小さい数字ほど上に表示されます。
例: 10 → 20 → 30
後から順番を変えたい場合は、レビュー本文を動かさず data-order の数字だけ変更すればOKです。
間に追加しやすいよう、10刻みを推奨しています。
例: 10と20の間に入れたい場合は15。

通常はYAMAUCHIさんが数字を触る必要はありません。順番変更の依頼をもらえれば最新版ZIP側で調整します。
