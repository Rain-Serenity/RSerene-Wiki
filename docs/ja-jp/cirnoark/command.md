---
author: Chosen_1st
---
# コマンド一覧
::: tip ヒント
CirnoArk サーバーは Chosen_1st が運営しています。
:::

## 一般プレイヤーが使えるコマンド

以下のコマンドは全プレイヤーが利用でき、そのまま実行できます。

### テレポートと位置
| コマンド | 説明 |
|---|---|
| `/back` | 前回いた場所に戻る |
| `/dback` | 前回死亡した場所に戻る |
| `/home` | 自分の家へテレポート |
| `/homes` | 自分の家の一覧を表示 |
| `/sethome <名前>` | 現在の位置に家を設定（初期名は Home） |
| `/removehome <名前>` | 家を削除 |
| `/spawn` | 主城 / スポーン地点に戻る |
| `/tpa <プレイヤー>` | 相手にテレポートをリクエスト（60 秒間有効、3 秒のカウントダウン） |
| `/tpahere <プレイヤー>` | 相手にこちらへのテレポートをリクエスト |
| `/tpaccept` | テレポートを承認 |
| `/tpdeny` | テレポートを辞退 |
| `/rtp` | ランダムテレポート（クールダウン 10 分、着地点は主世界で 3200 ~ 32000 ブロックの範囲） |

### 通貨とショップ
| コマンド | 説明 |
|---|---|
| `/balance` | 自分の残高を確認 |
| `/money` | 自分の残高を確認 |
| `/pay <プレイヤー> <金額>` | 他のプレイヤーに送金（手数料 3%） |
| `/baltop` | 残高ランキングを表示 |
| `/sell` | バックパックのアイテムを売却（価格表換算） |
| `/worth` | 手持ちアイテムの価値を確認 |
| `/worthlist` | アイテムの価格表をすべて表示 |

### チャットと情報
| コマンド | 説明 |
|---|---|
| `/msg <プレイヤー> <内容>` | 他のプレイヤーとプライベートメッセージ |
| `/ping` | 自分のレイテンシを確認 |
| `/playtime` | 自分のプレイ時間を確認 |
| `/playtimetop` | プレイ時間ランキングを表示 |
| `/shout <内容>` | サーバー全体へシャウト（クールダウン 3 秒） |

**チャットの小技**：
- `@プレイヤー名` —— 特定のプレイヤーをメンション（クールダウン 30 秒）。
- `@all` —— 全員を呼ぶ（クールダウン 5 分、追加の権限が必要）。
- `[inv]` —— チャットで自分のバックパックを表示。
- `[ender]` —— チャットで自分のエンダーチェストを表示。
- `[item]` —— チャットで手元のアイテムを表示。

### Slimefun とゲームプレイ
| コマンド | 説明 |
|---|---|
| `/sf` | Slimefun のメインコマンド。ガイド、レシピ検索、研究進捗などのサブコマンド |
| `/sf guide` | 初心者ガイドを開く（初参加時に自動で配布されます） |
| `/sfcalc calc <アイテム> [数量]` | レシピ計算機：あるアイテム（または N 個）を作るのに必要な素材を計算 |
| `/sfcalc calc <アイテム> [数量]` | 略記でも `/sfc calc <アイテム> [数量]` が使えます |

::: tip ヒント
`/sfcalc` はレシピを検索するだけで素材を消費しません。工業ラインを組み立てるのに最も手軽な方法です。
:::

## 追加の権限が必要なコマンド

| コマンド | 説明 | 権限ノード |
|---|---|---|
| `/res` | 領地の管理（作成・設定・削除） | `residence.create` など |
| `/res padd <プレイヤー> <フラグ>` | プレイヤーに領地権限を付与 | 領地主 |
| `/rc` | 領地チャット | 現在無効 |
| `/cmi` | CMI の管理コマンド | `cmi.command` |
| `/cmi money give/take/set <プレイヤー> <金額>` | プレイヤーの残高を調整 | `cmi.command.money`（管理者） |
| `/cmi setworth <アイテム> <価格>` | アイテムの販売価格を変更 | `cmi.command.setworth` |
| `/cmi tp <プレイヤー> <座標>` | 直接テレポート | `cmi.command.tp` |
| `/cmi afk auto` | 自動 AFK | `cmi.command.afk.auto` |
| `/lp` | 権限グループの管理 | `luckperms.*`（管理者） |
| `/co` / `/core` / `/coreprotect` | チャンクのロールバックと照会 | `coreprotect.*`（管理者） |
| `/grim` | 反作弊の記録と免除 | `grim.*`（管理者） |
| `/ban` `/tempban` `/ipban` | BAN | `litebans.ban` / `litebans.tempban` / `litebans.ipban` |
| `/mute` `/tempmute` | ミュート | `litebans.mute` / `litebans.tempmute` |
| `/warn` `/unwarn` | 警告 | `litebans.warn` / `litebans.unwarn` |
| `/kick` | プレイヤーをキック | `litebans.kick` |
| `/unban` `/unmute` | BAN / ミュートの解除 | `litebans.unban` / `litebans.unmute` |
| `/mctop` | スキルランキング | `mcmmo.commands.mctop` |
| `/mcrank <プレイヤー>` | プレイヤーのスキル順位を確認 | `mcmmo.commands.mcrank` |
| `/mmoinfo` | スキルの説明 | `mcmmo.commands.mmoinfo` |
| `/xprate` | 経験値倍率の確認・調整 | `mcmmo.commands.xprate` |
| `/claytech` | ClayTech のコマンド | `claytech.basic` |
| `/ie` / `/ix` / `/infinityexpansion` | InfinityExpansion のコマンド | `infinityexpansion.*` |
| `/cc` / `/compressioncraft` | CompressionCraft のコマンド | — |
| `/te` / `/transcendence` | TranscEndence のコマンド | `te.command.*` |
| `/SmallSpace` | SmallSpace のコマンド | `SmallSpace.admin` |
| `/nps add <プレイヤー>` | プレイヤーを「NoPhantomSleep」名簿に追加 | 管理者 |
| `/nps remove <プレイヤー>` | プレイヤーを名簿から削除 | 管理者 |

## 現在開放されていないコマンド

以下のコマンドはサーバーには**存在しますが、プレイヤーには使えません**。他の人が使っていたって不思議がらなくて構いません：

| コマンド | 説明 |
|---|---|
| `/tp` | 直接テレポート。プレイヤーには未開放（`/tpa` を使ってください） |
| `/warp`、`/setwarp` | ワープシステム。現在ワープポイントは 1 つもなく、未開放 |
| `/kit` | キットシステム。現在は何も設定されていません |
| `/heal`、`/feed` | 回復と空腹の補充。未開放 |
| `/fly`、`/effect`、`/enchant`、`/give`、`/gamerule` | クリエイティブ・チート系。未開放 |
| `/nick` | ニックネームの変更。未開放 |
| `/rankup` | ランクシステム。現在無効 |
| `/tpaccept`、`/tpdeny` | 権限は付与されていますがエイリアスは無効のまま。`/tpa` のボタンで承認・辞退してください |

## 権限について

- 権限は **LuckPerms** で一元管理されており、現在サーバーには `default` グループが 1 つだけ存在します。`cmi.command.*` のコマンド権限 30 件に加え、ブロック照会（`coreprotect.inspect`）とサーバー状態の照会も含まれています。
- **`/residence.group.Default` と `/residence.group.Event` はそれぞれ 2 つの領地枠に対応**：デフォルトグループは 8 ブロック、イベントグループは 12 ブロック。
- 領地内のフラグ（建築・破壊・コンテナ・インタラクト・PVP・爆発などの可否）は**領地主が自分で設定**します。コマンド権限とは別の独立したシステムです。
- BAN・ミュート中は管理系コマンドを使えません。

## よくある質問の早見表
- **コマンドが反応しない？** まず綴りを確認してください。`/tpa` は相手オンラインが必須で、リクエストは 60 秒間有効です。
- **あるアイテムを受け取れない・使えない？** 一部のアイテムは領地フラグ（コンテナ・破壊・インタラクト）で保護されているため、領地主に権限を委譲する必要があります。
- **あるアイテムの作り方が知りたい？** `/sfcalc calc <アイテム>` を使えば、レシピを一つずつ調べるより早く分かります。
