---
author: Chosen_1st
---
# Command List
::: tip Tips
The CirnoArk server is operated by Chosen_1st.
:::

## Commands Open to All Players

The following commands are open to every player and can be used right away.

### Teleportation & Position
| Command | Description |
|---|---|
| `/back` | Return to where you left off last time |
| `/dback` | Return to where you died last time |
| `/home` | Teleport to your own home |
| `/homes` | List all of your homes |
| `/sethome &lt;name&gt;` | Set a home at your current position (default name: Home) |
| `/removehome &lt;name&gt;` | Delete a home |
| `/spawn` | Return to the main city / spawn point |
| `/tpa &lt;player&gt;` | Request a teleport to that player (request valid for 60 seconds, 3 second countdown) |
| `/tpahere &lt;player&gt;` | Ask that player to teleport to you |
| `/tpaccept` | Accept a teleport request |
| `/tpdeny` | Deny a teleport request |
| `/rtp` | Random teleport (10 minute cooldown, lands 3200 ~ 32000 blocks from the Overworld spawn) |

### Currency & Shop
| Command | Description |
|---|---|
| `/balance` | Check your own balance |
| `/money` | Check your own balance |
| `/pay &lt;player&gt; &lt;amount&gt;` | Transfer money to another player (3% fee) |
| `/baltop` | View the wealth leaderboard |
| `/sell` | Sell items from your inventory (valued by the price table) |
| `/worth` | Check the value of the item in your hand |
| `/worthlist` | Open the full item price table |

### Chat & Information
| Command | Description |
|---|---|
| `/msg &lt;player&gt; &lt;message&gt;` | Send a private message to another player |
| `/ping` | Check your own latency |
| `/playtime` | Check your own play time |
| `/playtimetop` | View the play time leaderboard |
| `/shout &lt;message&gt;` | Shout, visible to the whole server (3 second cooldown) |

**Chat tips**:
- `@playername` — mention a certain player (30 second cooldown).
- `@all` — call all members (5 minute cooldown, requires extra permission).
- `[inv]` — show your inventory in chat.
- `[ender]` — show your ender chest in chat.
- `[item]` — show the item in your hand in chat.

### Slimefun & Gameplay
| Command | Description |
|---|---|
| `/sf` | Main Slimefun command, with subcommands for the guide, recipe lookup, research progress and more |
| `/sf guide` | Open the starter guide (you automatically receive one on your first join) |
| `/sfcalc calc &lt;item&gt; [&lt;amount&gt;]` | Recipe calculator: works out which materials you need for an item (or for N of them) |
| `/sfcalc calc &lt;item&gt; [&lt;amount&gt;]` | The short form `/sfc calc &lt;item&gt; [&lt;amount&gt;]` works too |

::: tip Tips
`/sfcalc` only looks up recipes and never consumes materials, which makes it the easiest way to plan an industrial production line.
:::

## Commands Requiring Extra Permissions

| Command | Description | Permission Node |
|---|---|---|
| `/res` | Claim management (create, set, delete) | `residence.create` and similar |
| `/res padd &lt;player&gt; &lt;flag&gt;` | Grant a player permissions in your claim | Claim owner |
| `/rc` | Claim channel | Currently disabled |
| `/cmi` | Main CMI administration command | `cmi.command` |
| `/cmi money give/take/set &lt;player&gt; &lt;amount&gt;` | Adjust a player's balance | `cmi.command.money` (admin) |
| `/cmi setworth &lt;item&gt; &lt;price&gt;` | Change an item's price | `cmi.command.setworth` |
| `/cmi tp &lt;player&gt; &lt;coordinates&gt;` | Teleport directly | `cmi.command.tp` |
| `/cmi afk auto` | Go AFK | `cmi.command.afk.auto` |
| `/lp` | Permission group management | `luckperms.*` (admin) |
| `/co` / `/core` / `/coreprotect` | Chunk rollback and lookup | `coreprotect.*` (admin) |
| `/grim` | Anti-cheat records and exemptions | `grim.*` (admin) |
| `/ban` `/tempban` `/ipban` | Ban | `litebans.ban` / `litebans.tempban` / `litebans.ipban` |
| `/mute` `/tempmute` | Mute | `litebans.mute` / `litebans.tempmute` |
| `/warn` `/unwarn` | Warn | `litebans.warn` / `litebans.unwarn` |
| `/kick` | Kick a player | `litebans.kick` |
| `/unban` `/unmute` | Unban / unmute | `litebans.unban` / `litebans.unmute` |
| `/mctop` | Skill leaderboard | `mcmmo.commands.mctop` |
| `/mcrank &lt;player&gt;` | Look up a player's skill ranking | `mcmmo.commands.mcrank` |
| `/mmoinfo` | Skill descriptions | `mcmmo.commands.mmoinfo` |
| `/xprate` | View or adjust the experience rate | `mcmmo.commands.xprate` |
| `/claytech` | ClayTech commands | `claytech.basic` |
| `/ie` / `/ix` / `/infinityexpansion` | InfinityExpansion commands | `infinityexpansion.*` |
| `/cc` / `/compressioncraft` | CompressionCraft commands | — |
| `/te` / `/transcendence` | TranscEndence commands | `te.command.*` |
| `/SmallSpace` | SmallSpace commands | `SmallSpace.admin` |
| `/nps add &lt;player&gt;` | Add a player to the "No Phantom Sleep" list | Admin |
| `/nps remove &lt;player&gt;` | Remove a player from the list | Admin |

## Commands Currently Not Available

The following commands **do exist on the server but are not available to players**, so don't be surprised if you see someone else use them:

| Command | Description |
|---|---|
| `/tp` | Direct teleport, not open to players (please use `/tpa`) |
| `/warp`, `/setwarp` | Warp system — there are no warps set up at the moment, and it is not open |
| `/kit` | Kit system — no kits are configured right now |
| `/heal`, `/feed` | Heal and feed, not open |
| `/fly`, `/effect`, `/enchant`, `/give`, `/gamerule` | Creative and cheat commands, not open |
| `/nick` | Change nickname, not open |
| `/rankup` | Rank system, currently disabled |
| `/tpaccept`, `/tpdeny` | The permissions are granted, but the aliases are still disabled; please use the buttons on the `/tpa` request instead |

## Permission Notes

- Permissions are managed centrally by **LuckPerms**. The server currently has only a `default` group, containing 30 `cmi.command.*` command permissions, plus chunk lookup (`coreprotect.inspect`) and server status queries.
- **`/residence.group.Default` and `/residence.group.Event` map to two separate claim allowances**: 8 claims for the default group and 12 for the event group.
- The flags inside a claim (whether you can build, break, open containers, PVP, blow things up, and so on) are **set by the claim owner**, and are a separate system from command permissions.
- While banned or muted, administrative commands are unavailable.

## Quick FAQ
- **Is a command not working?** Check the spelling first; the other player must be online for `/tpa`, and the request is only valid for 60 seconds.
- **Can you not pick up or use an item?** Some items are protected by claim flags (containers, breaking, interaction), so the claim owner has to give you permission.
- **Want to know how to make something?** Use `/sfcalc calc &lt;item&gt;` — it is far faster than paging through recipes one by one.
