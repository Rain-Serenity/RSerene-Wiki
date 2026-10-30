---
author: Chosen_1st
---
# FAQ
::: tip Tips
The CirnoArk server is operated by Chosen_1st.
:::
::: tip Tips
Feel free to give feedback on any other questions!
:::

## I. Login & Joining
### Q1: Do I need a premium account?
A: No. The server **does not have premium authentication enabled**, so offline accounts can join directly as well.

### Q2: How do I get onto the server?
A: Just add the server in "Multiplayer → Add Server" using the address `CirnoArk.RSerene.com`; you can also pick **"CirnoArk"** from the server list in the RSerene main control panel (the English name shown in the panel is `CirnoArk`).

### Q3: Which game versions are supported?
A: The server itself runs on **26.3**, and cross-version plugins keep clients from **1.8 ~ 26.3** compatible. Clients that are too old will be rejected, so please upgrade to a supported version.

### Q4: Does it cost money?
A: No, playing is completely free (donations are entirely voluntary and never required).

### Q5: What should I do on my first join?
A: You automatically receive a **Slimefun starter guide** when you join. It collects the vanilla recipes and industrial steps, and you can open it with `Esc` at any time. New players are advised to work through the research levels in the guide first, and then slowly build out their industry line.

### Q6: Will my first playthrough of an industry server be a grind?
A: The early game is slow, but the server gives you two shortcuts: first, **unlocking research levels costs nothing**, you just follow the recipes step by step; second, the built-in **recipe calculator** `/sfcalc calc &lt;item&gt;` lets you work out your materials before setting up a production line, saving you from paging through recipes and counting items by hand.

## II. Gameplay & Mechanics
### Q1: How do I claim land?
A: Hold a **wooden hoe** and select the two diagonally opposite blocks, then run `/res create &lt;name&gt;`. Everyone gets **8 claims** by default, up to 12 during events; a single claim is at most **512 × 512 × 256** (Y from -64 ~ 320); each claim can also be split into 2 regions, and sub-regions can nest up to 3 levels deep.

### Q2: Will my claims merge into one another?
A: No. **Leave at least 8 blocks of space between all claims** (your own claims are exempt), so two plots never stick together into one big area.

### Q3: Can people fight in my claim? Will they blow it up?
A: The default is the opposite of what intuition suggests, so take note — **PVP is disabled inside claims by default, but explosions are allowed by default**. Claim owners can toggle build, break, containers, interaction, PVP, explosions, TNT and more one by one in the flags.

### Q4: I gave a friend permission — can he fight inside my claim?
A: No. **Trusting a player (`/res padd`) only grants permissions such as build, break, containers and interaction — it does not include PVP, explosions or TNT**. If you just want a friend to play with you, trust him instead of turning on PVP.

### Q5: How do I get to the Moon or Mars?
A: Use the rocket system from **ClayTech**. The flow is: prepare a rocket → hold it and take off (10 second countdown — moving the item in your hand during the countdown cancels it) → arrive at the target planet. You need to **wear a full spacesuit** to move around on a planet; the suit tracks fuel, oxygen and protection level, and you cannot act when the oxygen runs out. Interstellar travel **requires no permissions at all**, so every player can go.

### Q6: Can I build a base on every planet?
A: Yes. Setting up a base on a planet gives you a dedicated **planetary base marker**; you can only remove your own base. In outer space you **cannot teleport**, and you cannot teleport into outer space either.

### Q7: How do I look up how to make something?
A: Three ways — use `/sf guide` in game for the guide; look up recipes and research progress under the `/sf` main command; or use `/sfcalc calc &lt;item&gt; [&lt;amount&gt;]` to calculate materials directly (the short form `/sfc calc &lt;item&gt;` works too).

### Q8: How do research levels work?
A: Slimefun has **38 research levels** in total, climbing from 小鸡、牛牛君、蜘蛛、村民、开拓者 all the way up to 童生、学生、学徒、魔术师、巫师, and finally to 大师 and 天选之子. Research **costs nothing**, so you can keep pushing forward as soon as you unlock a recipe.

### Q9: How do I train skills, and what is the cap?
A: The server runs mcMMO with **19 skills** (Acrobatics, Alchemy, Archery, Axe Skill, Digging, Fishing, Herbalism, Mining, Repair, Disassembling, Smelting, Sword Skill, Taming, Unarmed, Woodcutting, Crossbow, Trident Skill, Mace Skill, Spear Skill), and the level cap is **1000**. Skill level-ups are announced in chat.

### Q10: Do I lose skill levels when I die?
A: **No.** The server has hardcore mode's level loss and life-steal penalties turned off, so feel free to take risks.

### Q11: Can we level up together as a party?
A: Yes. There is **no limit on party size**, and the experience sharing range is **75 blocks**; party features unlock by level: chat at level 1, teleport at level 2, alliances at level 5, item sharing at level 8, experience sharing at level 10.

### Q12: How do I earn money? How do I sell things?
A: Use `/sell` to sell items from your inventory, valued by the price table; `/worth` checks the value of the item in your hand and `/worthlist` shows the full price table. Players can transfer money to each other with `/pay &lt;player&gt; &lt;amount&gt;`, with a **3% fee** paid on top by the sender. New players start with a balance of **￥100**.

### Q13: Is AFK convenient?
A: Standing still for **10 minutes** puts you into AFK automatically (you need the `cmi.command.afk.auto` permission). Staying in AFK for another **5 minutes** gets you kicked from the server, with the notice that you have been AFK for more than 15 minutes.

### Q14: Does the server restart? Will I lose my stuff?
A: The server **restarts on a fixed schedule every 72 hours** (a countdown is broadcast in game before the restart), and **ground drops are cleared automatically once an hour**. Claims and items are logged by CoreProtect, so they can be rolled back.

### Q15: What if my claim was blown up by accident or my items were stolen?
A: You can roll it back with CoreProtect — the server keeps **7 days** of block and container records (including items taken from and placed in chests, furnaces and other containers). If you spot anything odd, contact an admin as soon as possible, **after 7 days a rollback is no longer possible**.

### Q16: Does the server have anti-cheat?
A: Yes. The server runs GrimAC anti-cheat, covering movement simulation, knockback, reach, auto-click, NoFall, Baritone and many other checks, and violations get you kicked straight away. **Never use any client modification, hack or flight hack**, including but not limited to speed, auto-attack and auto-fishing scripts.

### Q17: How high can enchantments go?
A: The server caps enchantment levels. The common ones are: Efficiency 5, Damage 5, Protection 4, Silk Touch 1, Fortune 3, Mending 1, Infinity 1, Fire Aspect 2, Sharpness 5, Smite 5, Bane of Arthropods 5. Enchantments above the cap cannot be crafted normally.

### Q18: Can we see each other's inventories?
A: Ender chests are private. Typing `[inv]`, `[ender]` or `[item]` in chat lets you **actively show** your inventory, ender chest and the item in your hand to everyone.

## III. Rules & Moderation
### Q1: What are the server rules?
A: Players must follow these 14 rules:

1. No griefing others' builds (No Griefing)
2. No spamming (No Spamming)
3. No advertising (No Advertising)
4. No cursing, no persistent profanity (No Cursing)
5. No trolling, no harassing players (No Trolling / Flaming)
6. No using banned items (No Banned Items)
7. No asking for OP, ranks or items (No Asking for OP, Ranks, or Items)
8. Respect all players (Respect all Players)
9. Obey the staff (Obey Staff)
10. No racist or sexist remarks
11. No mods or hacks (No Mods / Hacks)
12. No all-caps messages (No Full Caps Messages)
13. No building near spawn (No Builds Near Spawn)
14. No 1×1 mob farms (No 1x1 Towers)

The full terms are in the [Server Rules](/en-us/about/rules.html). Breaking the rules can lead to a warning, mute, temporary ban or permanent ban.

### Q2: What if I get banned or muted?
A: Bans and mutes are handled by LiteBans, and they support **alt-account linking** — a newly registered account that is linked to a banned account will be banned as well. The ban screen tells you to join the QQ group and contact an admin to appeal.

### Q3: Can I still use commands to talk while muted?
A: No. While muted, chat commands such as `/me`, `/tell`, `/msg` and `/reply` do not work at all.

### Q4: Are there any chat limits?
A: A **2 second cooldown** between messages, and a maximum of **100 characters** per message. `/shout` has a 3 second cooldown; `@someone` has a 30 second cooldown; `@all` has a 5 minute cooldown and requires extra permission.

## IV. Copyright & Community
### Q1: Can I redistribute or sell the plugins used by the server?
A: No. This server charges players no fees and does not sell or distribute any plugin or modpack content for money; the content is only for normal play by players of this server.

### Q2: Where do I report problems?
A: You can ask an online admin in game, or join the official QQ group: **902620497** and @Chosen_1st in the group. Official site: www.RSerene.com.
