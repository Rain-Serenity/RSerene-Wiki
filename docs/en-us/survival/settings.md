# Basic Settings

## Basic Server Information
- **Server address**: `Play.RSerene.com` (you can also run `/server Survival` from another RSerene server to join).
- **Server core**: [Lophine](https://GitHub.com/LophineLabs/Lophine).
- **Client compatibility**: clients from 1.8 ~ 26.3 are all supported.
- **Recommended client version**: 26.3
- **Player count and difficulty**: max 40 players online, difficulty is hard.
- **View distance settings**: view distance 16, simulation distance 12.
- **Sleep mechanic**: night acceleration starts when 30% of players are in bed. Thanks to the original plugin [NoPhantomSleep](https://GitHub.com/Rain-Serenity/NoPhantomSleep), right-clicking a bed at night counts as having slept through the whole night, and no more phantoms will spawn.
- **Inventory is kept on death**: the server has keeping your inventory on death enabled.

## World and Survival Systems

### 1. Teleportation and Homes
- **Commands**: `/back` (last location), `/dback` (death location), `/home`, `/homes`, `/sethome`, `/removehome`, `/spawn`, `/tpa`, `/tpahere`, `/rtp`.
- **Numeric limits**: up to 8 homes; a `/tpa` request stays valid for 60 seconds; `/rtp` has a 10 minute cooldown and lands somewhere between 3200 and 32000 blocks from spawn in the Overworld.
- **Invulnerability window**: 5 seconds of invulnerability after teleporting, but breaking or interacting with a block ends it early.

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

### 3. Economy
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
Selling prices are still being adjusted; feedback is welcome.
:::

### 4. Chat System
- **Basic limits**: single-channel chat, a 2 second cooldown between messages, and a maximum of 100 characters per message.
- **Quick showcase**: typing `[inv]`, `[ender]` or `[item]` instantly shows your inventory, your ender chest or the item in your hand.
- **Mute restrictions**: while muted, commands such as `/me`, `/tell` and `/msg` do not work at all.

## Throttling Settings

### 1. Ticks Processed per Tick (limit)
- **Meaning**: the maximum number of times this entity is processed per tick inside a single Folia region.
- **Trigger**: throttling starts once the entity count in the region exceeds limit.
- **Throttling effect**: only limit entities have their tick processed per tick; the ticks of the remaining entities are skipped.
- **Example**: with limit = 100 and 300 entities actually in the region → only 100 are processed per tick, so each entity is processed once every 3 ticks on average.

### 2. Maximum Existing Count (removal)
- **Meaning**: the hard cap on how many of this entity may exist inside a single Folia region.
- **Trigger**: removal starts once the entity count in the region exceeds removal.
- **Removal effect**: the core removes entities starting from the earliest spawned one until the count drops below removal.
- **Purpose**: stops entities from piling up indefinitely, keeping the region from blowing up in memory or computation.

### 3. Specific Settings
| Entity           | Ticks Processed per Tick (limit) | Maximum Existing Count (removal) |
|------------------|----------------------------------|----------------------------------|
| Zombified Piglin | 100                              | 400                              |
| Blaze            | 80                               | 320                              |
| Magma Cube       | 80                               | 320                              |
| Slime            | 100                              | 400                              |
| Ghast            | 20                               | 80                               |
| Witch            | 60                               | 240                              |
| Wither Skeleton  | 80                               | 320                              |
| Enderman         | 60                               | 240                              |
| Drowned          | 80                               | 320                              |
| Guardian         | 80                               | 320                              |
| Zombie           | 120                              | 480                              |
| Skeleton         | 120                              | 480                              |
| Creeper          | 100                              | 400                              |
| Spider           | 100                              | 400                              |
| Endermite        | 20                               | 80                               |
| Pig              | 120                              | 480                              |
| Cow              | 120                              | 480                              |
| Sheep            | 120                              | 480                              |
| Chicken          | 150                              | 600                              |
| Rabbit           | 80                               | 320                              |
| Horse            | 30                               | 120                              |
| Wolf             | 30                               | 120                              |
| Cat              | 30                               | 120                              |
| Ocelot           | 10                               | 40                               |
| Parrot           | 10                               | 40                               |
| Villager         | 100                              | 200                              |
| Iron Golem       | 60                               | 240                              |
| Dropped Item     | 300                              | 1200                             |
| Experience Orb   | 300                              | 1200                             |
| Armor Stand      | 120                              | 480                              |
| Item Frame       | 120                              | 480                              |
| Glow Item Frame  | 120                              | 480                              |
| Boat             | 60                               | 240                              |
| Minecart         | 60                               | 240                              |
| TNT              | 60                               | 240                              |
| Arrow            | 120                              | 480                              |
| Snowball         | 120                              | 480                              |
| Firework Rocket  | 60                               | 240                              |
| Ender Pearl      | 20                               | 80                               |
| Falling Block    | 60                               | 240                              |