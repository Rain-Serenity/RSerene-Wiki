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
| Enchanted Golden Apple | 200.00 | Deepslate Coal Ore   | 360.00 | Deepslate Emerald Ore | 680.00 |
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
| Zombified Piglin | 100                                  | 400                              |
| Blaze            | 80                                   | 320                              |
| Magma Cube       | 80                                   | 320                              |
| Slime            | 100                                  | 400                              |
| Ghast            | 20                                   | 80                               |
| Witch            | 60                                   | 240                              |
| Wither Skeleton  | 80                                   | 320                              |
| Enderman         | 60                                   | 240                              |
| Drowned          | 80                                   | 320                              |
| Guardian         | 80                                   | 320                              |
| Zombie           | 120                                  | 480                              |
| Skeleton         | 120                                  | 480                              |
| Creeper          | 100                                  | 400                              |
| Spider           | 100                                  | 400                              |
| Endermite        | 20                                   | 80                               |
| Pig              | 120                                  | 480                              |
| Cow              | 120                                  | 480                              |
| Sheep            | 120                                  | 480                              |
| Chicken          | 150                                  | 600                              |
| Rabbit           | 80                                   | 320                              |
| Horse            | 30                                   | 120                              |
| Wolf             | 30                                   | 120                              |
| Cat              | 30                                   | 120                              |
| Ocelot           | 10                                   | 40                               |
| Parrot           | 10                                   | 40                               |
| Villager         | 100                                  | 200                              |
| Iron Golem       | 60                                   | 240                              |
| Dropped Item     | 300                                  | 1200                             |
| Experience Orb   | 300                                  | 1200                             |
| Armor Stand      | 120                                  | 480                              |
| Item Frame       | 120                                  | 480                              |
| Glow Item Frame  | 120                                  | 480                              |
| Boat             | 60                                   | 240                              |
| Minecart         | 60                                   | 240                              |
| TNT              | 60                                   | 240                              |
| Arrow            | 120                                  | 480                              |
| Snowball         | 120                                  | 480                              |
| Firework Rocket  | 60                                   | 240                              |
| Ender Pearl      | 20                                   | 80                               |
| Falling Block    | 60                                   | 240                              |