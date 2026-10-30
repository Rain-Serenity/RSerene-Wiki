---
author: Chosen_1st ,  Korvahet
---
# Basic Settings
::: tip Tips
The CirnoArk server is operated by Korvahet.
:::

## Basic Server Configuration
- **The server core is Leaf (Paper-based), the game version is 26.3, and ViaVersion / ViaBackwards keep clients from 1.8 ~ 26.3 compatible.**
- **Max online players is 20, difficulty is hard, view distance is 12, simulation distance is 10, and the spawn protection radius is 16 blocks.**
- **The server address is `CirnoArk.RSerene.com`, and you can also pick "CirnoArk" from the RSerene main control panel; see the [FAQ](/en-us/cirnoark/faq.html) for how to join.**

## Core Gameplay Systems

### Slimefun Industry (Slimefun)
The core of the server. You start from raw minerals and gradually unlock your own machines and gear.

- **There are 38 research levels** in total, and they act as the progress ruler for the entire industry line:

| Stage | Research Level |
|---|---|
| 起步 | 小鸡、牛牛君、蜘蛛、村民、开拓者 |
| 学生 | 童生、实习生、不合格生、学生 |
| 学徒 | 笨拙学徒、学徒、熟练学徒、法师学徒、杰出法师 |
| 魔术师 | 年轻魔术师、笨拙魔术师、普通魔术师、魔术师、熟练魔术师、特技魔术师、惯用魔术师、杰出魔术师 |
| 巫师 | 笨拙巫师、巫师、普通巫师、特技巫师、杰出巫师、卓越巫师 |
| 大师 | 年轻大师、笨拙大师、实习大师、合格大师、大师、特技大师、杰出大师、卓越大师、精通大师、天选之子 |

- **You get a starter guide on your first join**, and the guide also collects vanilla recipes, so you can look things up at any time.
- **Unlocking research levels costs nothing** — just follow the recipes and quests step by step.
- **Radiation is enabled**: entering a high-radiation area builds up radiation over time, with the first 15 seconds as a grace period; too much radiation deals damage and can even set you on fire.
- **Armor effects are enabled**: wearing Slimefun armor keeps refreshing its effects (refresh interval about 10 seconds).
- **Item networks hold up to 200 items**, with a visual interface.
- **Chests can be opened while their owner is offline** (public backpack-style facilities).

### Tool & Armor Workshop (SlimeTinker)
Tools and armor have to be crafted in a workshop instead of being crafted directly.

- Available workstations: crafting table, furnace, tool table, armor table, repair table, modification table, exchange station.
- Assemble tools at the crafting table, modify stats at the tool table, make armor at the armor table, repair and enchant at the repair table, and do advanced modifications at the modification table.
- Exact recipes and material ratios follow the in-game recipe book (**the recipe values live inside the plugin; the server config has no copy of them**).

### Alchemy, Imbuements & Evolutions (AlchimiaVitae)
On top of regular industry, alchemy and evolutions give you a second growth line.

- **9 imbuements** can be applied to gear: devastating crit, phantom crit, auto-aim, power, volatile, healing, auto-seed, totem battery, knockback.
- **5 evolutions** turn basic materials into higher-grade ones: reinforced alloy ingot, hardened metal, steel ingot, Damascus steel ingot, compressed carbon.
- The **"Kind Brewing" potion** grants five buffs — resistance, haste, regeneration, speed and jump boost — for 6000 ticks (300 seconds).

### ClayTech & Interstellar Exploration (ClayTech)
The server's signature gameplay: leave the Overworld and go mine on other planets.

- **All four celestial bodies are open**: Overworld, Moon, Mars, Asteroid Belt.
- **Interstellar travel requires no permission** — any player can board a rocket and go.
- **Rocket**: hold it and take off, with a 10 second countdown (move the item in your hand during the countdown to cancel); you cannot launch without enough fuel, and rockets do not stack.
- **Spacesuit**: tracks fuel, oxygen and protection level; running low on oxygen triggers a warning and can even stop you from moving, and the suit only works when the full set is worn.
- **Oxygen Distributor**: refills a spacesuit's oxygen, and the distributor itself needs at least 4 oxygen.
- **Planetary base**: you can set up a base on a planet, and each base has its own marker; you can only remove your own base.
- **Outer space limits**: you cannot teleport in outer space, and you cannot teleport into outer space.
- **Planet info**: every celestial body shows its distance (in km), required fuel, whether it is habitable, gravity and hazard level.

### Other Industry Add-ons
| Plugin | What it Adds |
|---|---|
| InfinityExpansion (Infinite Expansion) | More industrial items and late-game materials |
| CompressionCraft (Compression) | Compressed processing of ores and materials |
| EcoPower (Eco Energy) | Recipes related to renewable energy |
| SimpleStorage (Simple Storage) | Extra storage blocks and containers |
| PrivateStorage (Private Storage) | Private safes (by default only the owner can open them) |
| ColoredEnderChests (Colored Ender Chests) | Ender chests sorted by color |
| MiniBlocks (Mini Blocks) | Mini-sized decorative blocks |
| HardcoreSlimefun (Hardcore Slimefun) | Harder industrial processes |
| TranscEndence (End Legend) | More End content |
| HotbarPets (Hotbar Pets) | Pets that fit in your hotbar |
| SlimefunTimeit (Slime Timing) | Mechanics tied to time |
| SmallSpace (Small Space) | Provides a separate "Small Space" world |
| SFCalc (Recipe Calculator) | `/sfcalc calc &lt;item&gt; [&lt;amount&gt;]` calculates materials directly |

### RPG Skills (mcMMO)
19 trainable skills, with a level cap of **1000** (retro mode — leveling requires 10× the XP of standard mode).

**Skill list**: Acrobatics, Alchemy, Archery, Axe Skill, Digging, Fishing, Herbalism, Mining, Repair, Disassembling, Smelting, Sword Skill, Taming, Unarmed, Woodcutting, Crossbow, Trident Skill, Mace Skill, Spear Skill.

- **Party members share experience**, there is no limit on party size, and the sharing range is 75 blocks; party chat unlocks at level 1, party teleport at level 2, alliances at level 5, item sharing at level 8, experience sharing at level 10.
- **You do not lose skill levels on death**, and there is no life-steal penalty either.
- **Skill level-ups are announced in chat**, with a milestone every 100 levels.
- **Some abilities have to be triggered manually**, and the cooldown is a flat 240 seconds (60 seconds for blast mining); triggering also costs 1 durability.
- **You cannot mine stone bare-handed**, but you can once the Unarmed skill reaches a certain level.

### Claims (Residence)
Select an area with a wooden hoe to claim land.

| Item | Value |
|---|---|
| Max claims | 8 by default (12 for the event group) |
| Max size per claim | 512 × 512 × 256 |
| Height range | -64 ~ 320 |
| Regions per claim | 2 |
| Sub-regions | Up to 3 levels of nesting, each up to 256 × 256 × 256 |
| Spacing between claims | Leave at least 8 blocks between all claims |
| Selection tool | Wooden hoe |
| Viewing claim info | Hold string |

- **PVP is disabled inside claims by default**, but **explosions are allowed by default**.
- Claim owners can toggle each permission individually (build, break, containers, interaction, PVP, explosions, TNT, and so on).
- **Trusted players (`/res padd`)** only get permissions such as build, break, containers and interaction — they **cannot** enable PVP or set fires in your home.
- **Flight, jump height, keep inventory/XP, backups, time and weather, healing, claim chat** — even admins cannot enable these inside a claim.
- The rent and lease system is currently off, and deleting a claim does not refund any coins.
- Claim chat (`/rc`) is currently off.

### Economy (CMI)
- **Currency symbol `￥`**, new players start with a balance of 100, there is no upper limit, and decimals are supported.
- **`/pay` charges a 3% fee**, paid by the sender on top of the amount.
- **Item price table** (`/worth`, `/worthlist`):

| Item | Price | Item | Price |
|---|---|---|---|
| Raw Copper | 0.60 | Emerald Ore | 25.00 |
| Raw Iron | 1.20 | Heart of the Sea | 50.00 |
| Raw Gold | 1.60 | Netherite Ingot | 90.00 |
| Coal Ore | 2.80 | Block of Diamond | 108.00 |
| Block of Raw Copper | 5.40 | Enchanted Golden Apple | 200.00 |
| Block of Raw Iron | 10.80 | Deepslate Coal Ore | 360.00 |
| Diamond | 12.00 | Deepslate Emerald Ore | 680.00 |
| Block of Raw Gold | 14.40 | Heavy Core | 3200.00 |

- Repairs are **free**; recycling a scrapped machine refunds part of its materials.
- You can issue bank drafts with paper money (up to 100 million) for large transactions.

### Teleportation & Homes (CMI)
- **Available commands**: `/back` (last position), `/dback` (death location), `/home`, `/homes`, `/sethome`, `/removehome`, `/spawn`, `/tpa`, `/tpahere`, `/rtp`.
- **Number of homes**: 1 by default; the player groups are Newbie 2, Advanced 3 and Vip 5, and this server has opened it up to 8 for regular players.
- **A `/tpa` request is valid for 60 seconds**, with a 3 second countdown before the teleport; **`/rtp` has a 10 minute cooldown**, landing within a radius of 3200 ~ 32000 blocks in the Overworld.
- **You get 5 seconds of invulnerability after teleporting**, but it ends early as soon as you break or interact with a block.
- **Sleeping skips the night**; **the server restarts on a fixed schedule every 72 hours**, and **ground drops are cleared automatically once an hour**.

### Chat (TrChat)
- **Single-channel chat, a 2 second cooldown between messages, and a maximum of 100 characters per message.**
- `/shout` shouts to the whole server (3 second cooldown), `@playername` mentions a player (30 second cooldown), `@all` calls all members (5 minute cooldown, requires permission).
- Typing `[inv]`, `[ender]` or `[item]` in chat shows your inventory, ender chest or the item in your hand.
- While muted, commands like `/me`, `/tell` and `/msg` do not work at all.

## Quick Reference

| Item | Value |
|---|---|
| Max online players | 20 |
| Game difficulty | Hard |
| View distance / simulation distance | 12 / 10 |
| Spawn protection | 16 blocks |
| Chat cooldown / length limit | 2 seconds / 100 characters |
| Shout cooldown | 3 seconds |
| Mention cooldown / all-members cooldown | 30 seconds / 5 minutes |
| Teleport invulnerability | 5 seconds |
| Teleport cooldown (`/rtp`) | 10 minutes |
| Auto-AFK trigger | 10 minutes of inactivity |
| Restart cycle | 72 hours |
| Ground drop cleanup | Every hour |
| Skill level cap | 1000 |
| Party size limit | Unlimited |
| Experience sharing range | 75 blocks |
| Number of research levels | 38 |
| Enchantment caps (excerpt) | Efficiency / Protection / Silk Touch caps below |

**Common enchantment level caps**: Efficiency 5, Damage 5, Protection 4, Silk Touch 1, Fortune 3, Mending 1, Infinity 1, Fire Aspect 2, Sharpness / Smite / Bane of Arthropods 5, Experience Sharing 3.

## Plugin List

| Category | Plugins |
|---|---|
| Slimefun | Slimefun |
| Slimefun add-ons | SlimeTinker, AlchimiaVitae, ClayTech, InfinityExpansion, CompressionCraft, EcoPower, SimpleStorage, PrivateStorage, ColoredEnderChests, MiniBlocks, HardcoreSlimefun, TranscEndence, HotbarPets, SlimefunTimeit, SmallSpace, SFCalc, GuizhanLibPlugin, SlimeGlue |

## Updates & Announcements
- Currently: CirnoArk is open.
- Changes (recipes, balance, values) are announced in the QQ group.

## Contact Us
- Official site: www.RSerene.com
- QQ group: 902620497
- Problem reports: @Chosen_1st in the group
