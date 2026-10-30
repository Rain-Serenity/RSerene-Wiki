---
author: Chosen_1st ,  Korvahet
---
# Basic Settings

::: tip Tips
The CirnoArk server is operated by Korvahet.
:::

## Basic Server Information
- **Server address**: `CirnoArk.RSerene.com` (you can also run `/server CirnoArk` from another RSerene server to join).
- **Server core**: [Leaf](https://www.LeafMC.one/).
- **Client compatibility**: clients from 1.8 ~ 26.3 are all supported.
- **Recommended client version**: 26.3
- **Player count and difficulty**: max 20 players online, difficulty is hard.
- **View distance settings**: view distance 12, simulation distance 10.
- **Scheduled cleanup and restart**: ground drops are cleared automatically once an hour; scheduled restart every 72 hours.
- **Sleep mechanic**: night acceleration starts when 30% of players are in bed. Thanks to the original plugin [NoPhantomSleep](https://GitHub.com/Rain-Serenity/NoPhantomSleep), right-clicking a bed at night counts as having slept through the whole night, and no phantoms will spawn.
- **Inventory is not kept on death**: the server does not enable keeping your inventory on death.

## Core Gameplay: Slimefun and Industry

The core gameplay of the server: start from raw minerals and gradually unlock machines and gear.

### 1. Slimefun (Slimefun) Basics
- **38 research levels in total** — they are the yardstick of the whole industry line, unlocked step by step through recipes and tasks (they cost nothing). First-time players receive a starter guide on join, and the guide collects the vanilla recipes.
- **Research level stages**:
    - Getting started: Chick, Cow, Spider, Villager, Pioneer
    - Student: 童生、实习生、不合格生、学生
    - Apprentice: 笨拙学徒、学徒、熟练学徒、法师学徒、杰出法师
    - Magician: 年轻魔术师、笨拙魔术师、普通魔术师、魔术师、熟练魔术师、特技魔术师、惯用魔术师、杰出魔术师
    - Wizard: 笨拙巫师、巫师、普通巫师、特技巫师、杰出巫师、卓越巫师
    - Master: 年轻大师、笨拙大师、实习大师、合格大师、大师、特技大师、杰出大师、卓越大师、精通大师、天选之子
- **Survival mechanics**: radiation is enabled (entering a high-radiation area keeps building up your radiation value, with the first 15 seconds as a grace period; too much radiation deals damage and can even set you on fire); armor effects are enabled (wearing Slimefun armor keeps refreshing its effects, roughly every 10 seconds).
- **Logistics and storage**: item networks hold up to 200 items and come with a visual interface; backpacks can be opened while their owner is offline.

### 2. Tool & Armor Workshop (SlimeTinker)
Tools and armor have to be processed in a workshop instead of being crafted directly. Workstations included: crafting table (assembly), tool table (modify stats), armor table (crafting), repair table (repair / enchanting), modification table (advanced modification) and exchange station. Recipe numbers follow the in-game recipe book.

### 3. Alchemy, Imbuement & Evolution (AlchimiaVitae)
A second growth line running alongside regular industry.
- **9 imbuements**: devastating crit, phantom crit, auto-aim, power, volatile, healing, auto-seed, totem battery, knockback.
- **5 evolutions**: refine basic materials into reinforced alloy ingots, hardened metal, steel ingots, Damascus steel ingots and compressed carbon.
- **Kind Brewing**: provides five kinds of buffs — resistance, haste, regeneration, speed and jump boost (lasting 300 seconds).

### 4. ClayTech & Interstellar Exploration (ClayTech)
- **All four celestial bodies are open**: Overworld, Moon, Mars and the Asteroid Belt. Interstellar travel needs no permission, and every celestial body has metrics such as distance, fuel and habitability.
- **Rocket**: take off while holding it, with a 10 second countdown (moving the item in your hand cancels the launch); it needs enough fuel and rockets cannot be stacked.
- **Spacesuit**: it runs on fuel, oxygen and protection level, and only works when you wear the whole set; running low on oxygen gives you a warning and can even stop you from moving. Refill oxygen with an Oxygen Distributor (the distributor itself needs 4 oxygen).
- **Outer space limits**: you can set up a base on a planet (you can only remove your own base); any teleport is forbidden in outer space (and you cannot teleport into it either).

### 5. Rich Selection of Industry Add-ons
| Plugin                                    | What it Adds                                            |
|:------------------------------------------|:--------------------------------------------------------|
| InfinityExpansion (Infinite Expansion)    | More industrial items and late-game materials           |
| CompressionCraft (Compression)            | Compressed processing of ores and materials             |
| EcoPower (Eco Energy)                     | Recipes related to renewable energy                     |
| SimpleStorage (Simple Storage)            | Extra storage blocks and containers                     |
| PrivateStorage (Private Storage)          | Private safes (only the owner can open them by default) |
| ColoredEnderChests (Colored Ender Chests) | Ender chests distinguished by color                     |
| MiniBlocks (Mini Blocks)                  | Miniature decorative blocks                             |
| HardcoreSlimefun (Hardcore Slimefun)      | Tougher industrial processes                            |
| TranscEndence (End Legend)                | More End content                                        |
| HotbarPets (Hotbar Pets)                  | Pets you can keep in your inventory                     |
| SlimefunTimeit (Slime Timing)             | Mechanics tied to time                                  |
| SmallSpace (Small Space)                  | Provides a separate "Small Space" world                 |

## World and Survival Systems

### 1. RPG Skills (mcMMO)
19 trainable skills, with a level cap of **1000** (retro mode — the requirements are 10× those of standard mode). They include: Acrobatics, Alchemy, Archery, Axe Skill, Digging, Fishing, Herbalism, Mining, Repair, Disassembling, Smelting, Sword Skill, Taming, Unarmed, Woodcutting, Crossbow, Trident Skill, Mace Skill, Spear Skill.
- **Party system**: no party size limit, and the sharing range is 75 blocks. Party chat (level 1), teleport (level 2), alliances (level 5), item sharing (level 8) and experience sharing (level 10) unlock as the party levels up.
- **No death penalty**: dying does not cost you skill levels, and there is no life-steal penalty.
- **Skill triggers**: level-ups are announced in chat (with a milestone every 100 levels); some active abilities share a flat 240 second cooldown (60 seconds for blast mining), and triggering them also costs 1 durability.
- **Special ability**: you cannot break ordinary stone bare-handed, but you can once the Unarmed skill reaches a certain level.

### 2. Claims
| Item                       | Value               |
|:---------------------------|:--------------------|
| Max claims                 | 8 claims            |
| Max size per claim         | 512 × 512 × 256     |
| Height range               | -64 ~ 320           |
| Spacing between claims     | At least 8 blocks   |
| Selection tool / info tool | Wooden hoe / string |
| Price per block            | 0.05 coins          |

- **Flags and safety**: PVP is disabled inside claims by default, but **explosions are allowed by default**. Claim owners can toggle each flag one by one.
- **Trust system**: `/res padd` grants someone build, break, container and interaction permissions, but it **cannot** let them turn on PVP or set fires. Full trust requires `/res pset &lt;ID&gt; admin true`.
- **Disabled features**: flight, jump height, keep inventory / XP, backups, time and weather, healing and claim chat (these cannot be enabled even with claim admin permission).
- **Trading rules**: renting and selling claims is off, and deleting a claim does not refund any coins.

### 3. Teleportation and Homes
- **Commands**: `/back` (last location), `/dback` (death location), `/home`, `/homes`, `/sethome`, `/removehome`, `/spawn`, `/tpa`, `/tpahere`, `/rtp`.
- **Numeric limits**: up to 8 homes; a `/tpa` request stays valid for 60 seconds; `/rtp` has a 10 minute cooldown and lands somewhere between 3200 and 32000 blocks from spawn in the Overworld.
- **Invulnerability window**: 5 seconds of invulnerability after teleporting, but breaking or interacting with a block ends it early.

### 4. Economy
- **Currency**: the symbol is `￥`, new players start with a balance of 100, there is no upper limit, and decimals are supported.
- **Trading and fees**: `/pay` transfers charge a 3% fee, paid on top by the sender.
- **Global market**: open it with `/gmp market gui` (more commands in "Command List"); its tax rate is 5%.
- **System recycling**: open the menu with `/sell gui`, put in whatever the system shop buys, then close the menu and the items are sold automatically; repairs are free; scrapping a machine refunds part of its materials.
- **Items the system shop buys:**

| Item                | Price | Item                   | Price   |
|:--------------------|:------|:-----------------------|:--------|
| Raw Copper          | 0.60  | Emerald Ore            | 25.00   |
| Raw Iron            | 1.20  | Heart of the Sea       | 50.00   |
| Raw Gold            | 1.60  | Netherite Ingot        | 90.00   |
| Coal Ore            | 2.80  | Block of Diamond       | 108.00  |
| Block of Raw Copper | 5.40  | Enchanted Golden Apple | 200.00  |
| Block of Raw Iron   | 10.80 | Deepslate Coal Ore     | 360.00  |
| Diamond             | 12.00 | Deepslate Emerald Ore  | 680.00  |
| Block of Raw Gold   | 14.40 | Heavy Core             | 3200.00 |

::: tip Note
Sell prices are still being adjusted; feedback is welcome.
:::

### 5. Chat System
- **Basic limits**: single-channel chat, a 2 second cooldown between messages, and a maximum of 100 characters per message.
- **Quick showcase**: typing `[inv]`, `[ender]` or `[item]` instantly shows your inventory, your ender chest or the item in your hand.
- **Mute restrictions**: while muted, commands such as `/me`, `/tell` and `/msg` do not work at all.

## Core Plugins

- **Core base**: Slimefun
- **Slimefun add-ons**: SlimeTinker, AlchimiaVitae, ClayTech, InfinityExpansion, CompressionCraft, EcoPower, SimpleStorage, PrivateStorage, ColoredEnderChests, MiniBlocks, HardcoreSlimefun, TranscEndence, HotbarPets, SlimefunTimeit, SmallSpace, SFCalc, GuizhanLibPlugin, SlimeGlue.