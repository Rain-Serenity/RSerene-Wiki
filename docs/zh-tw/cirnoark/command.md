---
author: Chosen_1st
---
# 指令列表
::: tip 提示
完美算術工坊伺服器由 Chosen_1st 營運。
:::

## 一般玩家已開放的指令

以下指令已對所有玩家開放，可直接使用。

### 傳送與位置
| 指令 | 說明 |
|---|---|
| `/back` | 回到上一次離開的位置 |
| `/dback` | 回到上一次死亡的位置 |
| `/home` | 傳送到自己的家 |
| `/homes` | 查看自己所有家的列表 |
| `/sethome <名稱>` | 在目前位置設置一個家（預設名稱為 Home） |
| `/removehome <名稱>` | 刪除一個家 |
| `/spawn` | 回到主城 / 出生點 |
| `/tpa <玩家>` | 請求傳送到對方那裡（請求 60 秒內有效，3 秒讀條） |
| `/tpahere <玩家>` | 請求對方傳送到你這裡 |
| `/tpaccept` | 接受傳送請求 |
| `/tpdeny` | 拒絕傳送請求 |
| `/rtp` | 隨機傳送（冷卻 10 分鐘，落點在主世界 3200 ~ 32000 格範圍） |

### 貨幣與商店
| 指令 | 說明 |
|---|---|
| `/balance` | 查看自己的餘額 |
| `/money` | 查看自己的餘額 |
| `/pay <玩家> <金額>` | 給其他玩家轉帳（手續費 3%） |
| `/baltop` | 查看財富排行榜 |
| `/sell` | 出售背包中的物品（按售價表換算） |
| `/worth` | 查詢手上物品的價值 |
| `/worthlist` | 開啟完整的物品售價表 |

### 聊天與資訊
| 指令 | 說明 |
|---|---|
| `/msg <玩家> <內容>` | 私聊其他玩家 |
| `/ping` | 查看自己的延遲 |
| `/playtime` | 查看自己的上線時長 |
| `/playtimetop` | 查看上線時長排行榜 |
| `/shout <內容>` | 喊話，全服可見（冷卻 3 秒） |

**聊天小技巧**：
- `@玩家名` —— 提及某個玩家（冷卻 30 秒）。
- `@all` —— 呼叫全體成員（冷卻 5 分鐘，需要額外權限）。
- `[inv]` —— 在聊天裡展示自己的背包。
- `[ender]` —— 在聊天裡展示自己的末影箱。
- `[item]` —— 在聊天裡展示自己手上的物品。

### 黏液科技與玩法
| 指令 | 說明 |
|---|---|
| `/sf` | 黏液科技主指令，包含指南、配方查詢、研究進度等子指令 |
| `/sf guide` | 打開新手指南（第一次進服會自動收到一份） |
| `/sfcalc calc <物品> [數量]` | 配方計算器：算出做某個物品（或做 N 個）需要哪些材料 |
| `/sfc calc <物品> [數量]` | 同上，`/sfcalc` 的簡寫 |

::: tip 提示
`/sfcalc` 只查詢配方、不消耗材料，是準備工業流水線時最省事的辦法。
:::

## 需要額外權限的指令

| 指令 | 說明 | 權限節點 |
|---|---|---|
| `/res` | 領地管理（創建、設置、刪除） | `residence.create` 等 |
| `/res padd <玩家> <旗標>` | 給玩家授予領地權限 | 領地主 |
| `/rc` | 領地頻道 | 目前已關閉 |
| `/cmi` | CMI 管理總指令 | `cmi.command` |
| `/cmi money give/take/set <玩家> <金額>` | 調整玩家餘額 | `cmi.command.money`（管理） |
| `/cmi setworth <物品> <價格>` | 修改物品售價 | `cmi.command.setworth` |
| `/cmi tp <玩家> <座標>` | 直接傳送 | `cmi.command.tp` |
| `/cmi afk auto` | 掛機 | `cmi.command.afk.auto` |
| `/lp` | 權限組管理 | `luckperms.*`（管理） |
| `/co` / `/core` / `/coreprotect` | 區塊回滾與查詢 | `coreprotect.*`（管理） |
| `/grim` | 反作弊記錄與豁免 | `grim.*`（管理） |
| `/ban` `/tempban` `/ipban` | 封禁 | `litebans.ban` / `litebans.tempban` / `litebans.ipban` |
| `/mute` `/tempmute` | 禁言 | `litebans.mute` / `litebans.tempmute` |
| `/warn` `/unwarn` | 警告 | `litebans.warn` / `litebans.unwarn` |
| `/kick` | 踢出玩家 | `litebans.kick` |
| `/unban` `/unmute` | 解封 / 解禁 | `litebans.unban` / `litebans.unmute` |
| `/mctop` | 技能排行榜 | `mcmmo.commands.mctop` |
| `/mcrank <玩家>` | 查詢玩家技能排名 | `mcmmo.commands.mcrank` |
| `/mmoinfo` | 技能說明 | `mcmmo.commands.mmoinfo` |
| `/xprate` | 查看或調整經驗倍率 | `mcmmo.commands.xprate` |
| `/claytech` | 黏土科技指令 | `claytech.basic` |
| `/ie` / `/ix` / `/infinityexpansion` | 無窮擴展指令 | `infinityexpansion.*` |
| `/cc` / `/compressioncraft` | 壓縮指令 | — |
| `/te` / `/transcendence` | 末地傳說指令 | `te.command.*` |
| `/SmallSpace` | 小空間指令 | `SmallSpace.admin` |
| `/nps add <玩家>` | 把玩家加入「幻夜不擾夢」名單 | 管理 |
| `/nps remove <玩家>` | 把玩家移出名單 | 管理 |

## 目前未開放的指令

以下指令在伺服器上**存在但對玩家不可用**，看到別人用也不必奇怪：

| 指令 | 說明 |
|---|---|
| `/tp` | 直接傳送，未開放給玩家（請使用 `/tpa`） |
| `/warp`、`/setwarp` | 傳送點系統，目前沒有任何傳送點，且未開放 |
| `/kit` | 禮包系統，目前沒有設定任何禮包 |
| `/heal`、`/feed` | 治療與飽食，未開放 |
| `/fly`、`/effect`、`/enchant`、`/give`、`/gamerule` | 創造與作弊類指令，未開放 |
| `/nick` | 修改暱稱，未開放 |
| `/rankup` | 段位系統，目前關閉 |
| `/tpaccept`、`/tpdeny` | 權限已授予，但別名仍處於關閉狀態；請直接用 `/tpa` 的按鈕接受或拒絕 |

## 權限說明
- 權限由 **LuckPerms** 統一管理，目前伺服器上只有一個 `default` 組，包含 30 條 `cmi.command.*` 指令權限，外加區塊查詢（`coreprotect.inspect`）和伺服器狀態查詢。
- **`/residence.group.Default` 與 `/residence.group.Event` 分別對應兩套領地額度**：預設組 8 塊，活動組 12 塊。
- 領地內的旗標（能否建造、破壞、開箱、PVP、爆炸等）由**領地主自行設定**，與指令權限是兩套獨立系統。
- 被封禁、被禁言時，管理類指令不可用。

## 常見問題速查
- **指令沒反應？** 先確認拼字；`/tpa` 對方需要在線，且請求 60 秒內有效。
- **無法領取或使用某物品？** 部分物品受領地旗標保護（容器、破壞、互動），需要領地主給你權限。
- **想看某物品怎麼做？** 用 `/sfcalc calc <物品>`，比逐條翻配方快得多。
