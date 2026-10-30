---
author: Chosen_1st
---
# 指令列表
::: tip 提示
完美算数工坊服务器由 Chosen_1st 运营。
:::

## 普通玩家已开放的指令

以下指令已对所有玩家开放，可直接使用。

### 传送与位置
| 指令 | 说明 |
|---|---|
| `/back` | 回到上一次离开的位置 |
| `/dback` | 回到上一次死亡的位置 |
| `/home` | 传送到自己的家 |
| `/homes` | 查看自己所有家的列表 |
| `/sethome <名称>` | 在当前位置设置一个家（默认名为 Home） |
| `/removehome <名称>` | 删除一个家 |
| `/spawn` | 回到主城 / 出生点 |
| `/tpa <玩家>` | 请求传送到对方那里（请求 60 秒内有效，3 秒读条） |
| `/tpahere <玩家>` | 请求对方传送到你这里 |
| `/tpaccept` | 接受传送请求 |
| `/tpdeny` | 拒绝传送请求 |
| `/rtp` | 随机传送（冷却 10 分钟，落点在主世界 3200 ~ 32000 格范围） |

### 货币与商店
| 指令 | 说明 |
|---|---|
| `/balance` | 查看自己的余额 |
| `/money` | 查看自己的余额 |
| `/pay <玩家> <金额>` | 给别的玩家转账（手续费 3%） |
| `/baltop` | 查看财富排行榜 |
| `/sell` | 出售背包中的物品（按售价表折算） |
| `/worth` | 查询手上物品的价值 |
| `/worthlist` | 打开完整的物品售价表 |

### 聊天与信息
| 指令 | 说明 |
|---|---|
| `/msg <玩家> <内容>` | 私聊其他玩家 |
| `/ping` | 查看自己的延迟 |
| `/playtime` | 查看自己的在线时长 |
| `/playtimetop` | 查看在线时长排行榜 |
| `/shout <内容>` | 喊话，全服可见（冷却 3 秒） |

**聊天小技巧**：
- `@玩家名` —— 提及某个玩家（冷却 30 秒）。
- `@all` —— 呼叫全体成员（冷却 5 分钟，需要额外权限）。
- `[inv]` —— 在聊天里展示自己的背包。
- `[ender]` —— 在聊天里展示自己的末影箱。
- `[item]` —— 在聊天里展示自己手上的物品。

### 粘液科技与玩法
| 指令 | 说明 |
|---|---|
| `/sf` | 粘液科技主指令，包含指南、配方查询、研究进度等子命令 |
| `/sf guide` | 打开新手指南（第一次进服会自动收到一份） |
| `/sfcalc calc <物品> [数量]` | 配方计算器：算出做某个物品（或做 N 个）需要哪些材料 |
| `/sfcalc calc <物品> [数量]` | 也可用简写 `/sfc calc <物品> [数量]` |

::: tip 提示
`/sfcalc` 只查询配方、不消耗材料，是准备工业流水线时最省事的办法。
:::

## 需要额外权限的指令

| 指令 | 说明 | 权限节点 |
|---|---|---|
| `/res` | 领地管理（创建、设置、删除） | `residence.create` 等 |
| `/res padd <玩家> <旗标>` | 给玩家授予领地权限 | 领地主 |
| `/rc` | 领地频道 | 当前已关闭 |
| `/cmi` | CMI 管理总指令 | `cmi.command` |
| `/cmi money give/take/set <玩家> <金额>` | 调整玩家余额 | `cmi.command.money`（管理） |
| `/cmi setworth <物品> <价格>` | 修改物品售价 | `cmi.command.setworth` |
| `/cmi tp <玩家> <坐标>` | 直接传送 | `cmi.command.tp` |
| `/cmi afk auto` | 挂机 | `cmi.command.afk.auto` |
| `/lp` | 权限组管理 | `luckperms.*`（管理） |
| `/co` / `/core` / `/coreprotect` | 区块回滚与查询 | `coreprotect.*`（管理） |
| `/grim` | 反作弊记录与豁免 | `grim.*`（管理） |
| `/ban` `/tempban` `/ipban` | 封禁 | `litebans.ban` / `litebans.tempban` / `litebans.ipban` |
| `/mute` `/tempmute` | 禁言 | `litebans.mute` / `litebans.tempmute` |
| `/warn` `/unwarn` | 警告 | `litebans.warn` / `litebans.unwarn` |
| `/kick` | 踢出玩家 | `litebans.kick` |
| `/unban` `/unmute` | 解封 / 解禁 | `litebans.unban` / `litebans.unmute` |
| `/mctop` | 技能排行榜 | `mcmmo.commands.mctop` |
| `/mcrank <玩家>` | 查询玩家技能排名 | `mcmmo.commands.mcrank` |
| `/mmoinfo` | 技能说明 | `mcmmo.commands.mmoinfo` |
| `/xprate` | 查看或调整经验倍率 | `mcmmo.commands.xprate` |
| `/claytech` | 粘土科技指令 | `claytech.basic` |
| `/ie` / `/ix` / `/infinityexpansion` | 无穷扩展指令 | `infinityexpansion.*` |
| `/cc` / `/compressioncraft` | 压缩指令 | — |
| `/te` / `/transcendence` | 末地传说指令 | `te.command.*` |
| `/SmallSpace` | 小空间指令 | `SmallSpace.admin` |
| `/nps add <玩家>` | 把玩家加入"幻夜不扰梦"名单 | 管理 |
| `/nps remove <玩家>` | 把玩家移出名单 | 管理 |

## 当前未开放的指令

以下指令在服务器上**存在但对玩家不可用**，看到别人用也不必奇怪：

| 指令 | 说明 |
|---|---|
| `/tp` | 直接传送，未开放给玩家（请使用 `/tpa`） |
| `/warp`、`/setwarp` | 传送点系统，目前没有任何传送点，且未开放 |
| `/kit` | 礼包系统，当前没有配置任何礼包 |
| `/heal`、`/feed` | 治疗与饱食，未开放 |
| `/fly`、`/effect`、`/enchant`、`/give`、`/gamerule` | 创造与作弊类指令，未开放 |
| `/nick` | 修改昵称，未开放 |
| `/rankup` | 段位系统，当前关闭 |
| `/tpaccept`、`/tpdeny` | 权限已授予，但别名仍处于关闭状态；请直接用 `/tpa` 的按钮接受或拒绝 |

## 权限说明

- 权限由 **LuckPerms** 统一管理，目前服务器上只有一个 `default` 组，包含 30 条 `cmi.command.*` 指令权限，外加区块查询（`coreprotect.inspect`）和服务器状态查询。
- **`/residence.group.Default` 与 `/residence.group.Event` 分别对应两套领地额度**：默认组 8 块，活动组 12 块。
- 领地内的旗标（能否建造、破坏、开箱、PVP、爆炸等）由**领地主自行设置**，与指令权限是两套独立系统。
- 被封禁、被禁言时，管理类指令不可用。

## 常见问题速查
- **指令没反应？** 先确认拼写；`/tpa` 对方需要在线，且请求 60 秒内有效。
- **无法领取或使用某物品？** 部分物品受领地旗标保护（容器、破坏、交互），需要领地主给你权限。
- **想看某物品怎么做？** 用 `/sfcalc calc <物品>`，比逐条翻配方快得多。
