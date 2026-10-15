# Basic Settings

## Server Core Configuration
**This server uses the [Lophine](https://GitHub.com/LophineLabs/Lophine) core.**  
**You can check the [server configuration file](https://GitHub.com/Rain-Serenity/ServerConfig) to learn about the server features.**  
::: warning Note
Please be kind to the server. Do not make the machine too dense; use `/tpsbar` to check the status of your region!
:::

## No Item Drop on Death
**We have enabled keep inventory on death.**
<!--## Item Drop on Death
::: warning Note
Unlike vanilla, dropped items will despawn after 3 minutes!
:::
**Please note, we have not enabled keep inventory on death. Try to avoid dying, and if you do, quickly retrieve your items!**-->

## Sleep System
**We use a sleep acceleration mechanism combined with an original sleep system, implemented by the [NoPhantomSleep](https://GitHub.com/Rain-Serenity/NoPhantomSleep) plugin.**  
**Specific rules: right-clicking a bed at night counts as having passed the whole night, and no phantoms will spawn around you.**  
**When 30% of players are in bed, night acceleration starts.**

## View Distance
**View distance is 16 chunks and simulation distance is 12 chunks.**
<!--## Entity Spawning
**Although we've reduced the view distance and entity calculation range, we've significantly increased the mob spawn rate in chunks near players.**-->

## Land Claim
**The tool for creating claims is a wooden hoe, with a maximum range of 512×256×512 (X×Y×Z) and unlimited height (-64~320 is allowed).**  
**The price is 0.05 game coins per block.**

## Extra JEI Support
**Recipe sync is enabled on this server. Recipes are synced to you automatically when you join.**

## Sellable Items
| Item               | Price | Item                   | Price | Item                   | Price |
|:--------|:------|:-------|:-------|:------|:------|
| Raw Copper         | 0.60  | Raw Iron               | 1.20  | Raw Gold               | 1.60  |
| Coal Ore           | 2.80  | Raw Copper Block       | 5.40  | Raw Iron Block         | 10.80 |
| Diamond            | 12.00 | Raw Gold Block         | 14.40 | Emerald Ore            | 25.00 |
| Heart of the Sea   | 50.00 | Netherite Ingot        | 90.00 | Diamond Block          | 108.00 |
| Enchanted Golden Apple | 200.00 | Deepslate Coal Ore   | 420.00 | Deepslate Emerald Ore | 680.00 |
| Heavy Core         | 3200.00 |                      |       |                      |       |
::: tip Note
Selling prices are still being adjusted; feedback is welcome.
:::

## Throttling Settings
### Max Ticks Processed per Tick (limit)
- **Meaning**: The maximum number of times this entity can be processed per tick within a single Folia region.
- **Trigger**: Throttling starts when the number of entities in the region exceeds limit.
- **Effect**: Only limit entities have their tick processed each tick; the ticks of the remaining entities are skipped.
- **Example**: limit = 100 with 300 entities actually in the region → only 100 are processed per tick, so each entity is processed once every 3 ticks on average.

### Maximum Existing Count (removal)
- **Meaning**: The hard cap on how many of this entity may exist within a single Folia region.
- **Trigger**: Removal starts when the number of entities in the region exceeds removal.
- **Effect**: The core removes entities starting from the earliest spawned until the count drops below removal.
- **Purpose**: Prevents entities from piling up indefinitely, avoiding a memory or computation blow-up in the region.

### Specific Settings
| Entity           | Max Ticks Processed per Tick (limit) | Maximum Existing Count (removal) |
|:-----------------|:-------------------------------------|:---------------------------------|
| Zombified Piglin | 120                                  | 480                              |
| Blaze            | 100                                  | 400                              |
| Magma Cube       | 100                                  | 400                              |
| Slime            | 120                                  | 480                              |
| Ghast            | 30                                   | 120                              |
| Witch            | 80                                   | 320                              |
| Wither Skeleton  | 100                                  | 400                              |
| Enderman         | 80                                   | 320                              |
| Drowned          | 100                                  | 400                              |
| Guardian         | 100                                  | 400                              |
| Zombie           | 150                                  | 600                              |
| Skeleton         | 150                                  | 600                              |
| Creeper          | 120                                  | 480                              |
| Spider           | 120                                  | 480                              |
| Endermite        | 30                                   | 120                              |
| Pig              | 150                                  | 600                              |
| Cow              | 150                                  | 600                              |
| Sheep            | 150                                  | 600                              |
| Chicken          | 180                                  | 720                              |
| Rabbit           | 100                                  | 400                              |
| Horse            | 40                                   | 160                              |
| Wolf             | 40                                   | 160                              |
| Cat              | 40                                   | 160                              |
| Ocelot           | 15                                   | 60                               |
| Parrot           | 15                                   | 60                               |
| Villager         | 250                                  | 1000                             |
| Iron Golem       | 80                                   | 320                              |
| Dropped Item     | 400                                  | 1600                             |
| Experience Orb   | 400                                  | 1600                             |
| Armor Stand      | 150                                  | 600                              |
| Item Frame       | 150                                  | 600                              |
| Glow Item Frame  | 150                                  | 600                              |
| Boat             | 80                                   | 320                              |
| Minecart         | 80                                   | 320                              |
| TNT              | 80                                   | 320                              |
| Arrow            | 150                                  | 600                              |
| Snowball         | 150                                  | 600                              |
| Firework Rocket  | 80                                   | 320                              |
| Ender Pearl      | 30                                   | 120                              |
| Falling Block    | 80                                   | 320                              |