# Grundeinstellungen

## Grundkonfiguration des Servers
**Dieser Server verwendet den [Lophine](https://GitHub.com/LophineLabs/Lophine)-Core.**  
**Du kannst die [Serverkonfiguration](https://GitHub.com/Rain-Serenity/ServerConfig) einsehen, um die Servermerkmale zu erfahren.**  
::: warning Hinweis
Bitte gehe schonend mit dem Server um — halte die Maschine nicht zu dicht belegt und nutze `/tpsbar`, um den Status deiner Region zu prüfen!
:::

## Kein Item-Verlust beim Tod
**Wir haben „Kein Item-Verlust beim Tod“ aktiviert.**
<!--## Item-Verlust beim Tod
::: warning Hinweis
Anders als im Original werden die Drop-Items nach 3 Minuten neu generiert!
:::
**Bitte beachte, dass wir „Kein Item-Verlust beim Tod“ nicht aktiviert haben. Versuche möglichst nicht zu sterben; wenn du doch stirbst, musst du deine Ausrüstung schnell zurückholen!**-->

## Schlafsystem
**Wir nutzen einen Schlaf-Beschleunigungsmechanismus in Kombination mit einem eigenen Schlaf-System, das vom Plugin [NoPhantomSleep](https://GitHub.com/Rain-Serenity/NoPhantomSleep) umgesetzt wird.**  
**Konkrete Regel: Rechtsklick auf ein Bett in der Nacht gilt als Überstehen der gesamten Nacht — rund um dich spawnen keine Phantoms.**  
**Wenn 30 % der Spieler im Bett liegen, startet die Nachtbeschleunigung.**

## Sichtweiten-Einstellungen
**Die Sichtweite beträgt 16 Chunks, die Simulationsdistanz 12 Chunks.**
<!--## Entitäten-Spawn
**Wir haben die Sichtweite und die Berechnungsdistanz von Entitäten verringert, dafür aber die Spawn-Effizienz von Monstern in Chunks nahe dem Spieler deutlich erhöht.**-->

## Grundstücke
**Zum Erstellen von Grundstücken dient die Holzhacke; die maximale Größe beträgt 512×256×512 (X×Y×Z), die Höhe ist unbegrenzt (-64~320 möglich).**  
**Der Preis beträgt 0,05 Spielmünzen pro Block.**

## Zusätzliche JEI-Unterstützung
**Die Rezept-Synchronisierung ist auf diesem Server aktiviert — beim Betreten des Servers werden die Rezepte automatisch mit dir synchronisiert.**

## Verkaufbare Items
| Item               | Preis  | Item                | Preis  | Item           | Preis  |
|:-------------------|:-------|:--------------------|:-------|:---------------|:-------|
| Rohkupfer          | 0,60   | Roheisen            | 1,20    | Rohgold        | 1,60     |
| Kohleerz           | 2,80   | Rohkupferblock      | 5,40    | Roheisenblock  | 10,80     |
| Diamant            | 12,00  | Rohgoldblock        | 14,40   | Smaragderz     | 25,00    |
| Herz des Meeres    | 50,00  | Netheritbarren      | 90,00   | Diamantblock   | 108,00   |
| Verzauberter Goldapfel | 200,00 | Tiefenkohleerz    | 360,00  | Tiefensmaragderz | 680,00 |
| Schwerer Kern      | 3.200,00 |                    |         |                |          |
::: tip Hinweis
Die Verkaufspreise werden noch angepasst — Feedback ist willkommen.
:::

## Drosselungs-Einstellungen
### Maximale Tick-Verarbeitungen pro Tick (limit)
- **Bedeutung**: Wie oft diese Entity pro Tick innerhalb einer einzelnen Folia-Region maximal verarbeitet wird.
- **Auslöser**: Die Drosselung startet, wenn die Zahl der Entities in der Region limit übersteigt.
- **Wirkung**: Pro Tick werden nur limit Entities abgearbeitet; die Ticks der übrigen Entities werden übersprungen.
- **Beispiel**: limit = 100 bei tatsächlich 300 Entities in der Region → pro Tick werden nur 100 verarbeitet, jede Entity wird also durchschnittlich nur alle 3 Ticks verarbeitet.

### Maximale Existenzzahl (removal)
- **Bedeutung**: Die harte Obergrenze, wie viele dieser Entity in einer einzelnen Folia-Region existieren dürfen.
- **Auslöser**: Die Entfernung startet, wenn die Zahl der Entities in der Region removal übersteigt.
- **Wirkung**: Der Kern entfernt Entities beginnend mit den am frühesten gespawnten, bis die Zahl unter removal sinkt.
- **Zweck**: Verhindert, dass sich Entities unbegrenzt ansammeln, und vermeidet, dass Speicher oder Rechenlast einer Region explodieren.

### Konkrete Einstellungen
| Entity                      | Max. Tick-Verarbeitungen pro Tick (limit) | Maximale Existenzzahl (removal) |
|:----------------------------|:------------------------------------------|:--------------------------------|
| Zombifizierter Piglin       | 100                                       | 400                             |
| Blaze                       | 80                                        | 320                             |
| Magmawürfel                 | 80                                        | 320                             |
| Schleim                     | 100                                       | 400                             |
| Ghast                       | 20                                        | 80                              |
| Hexe                        | 60                                        | 240                             |
| Witherskelett               | 80                                        | 320                             |
| Enderman                    | 60                                        | 240                             |
| Ertrunkener                 | 80                                        | 320                             |
| Guardian                    | 80                                        | 320                             |
| Zombie                      | 120                                       | 480                             |
| Skelett                     | 120                                       | 480                             |
| Creeper                     | 100                                       | 400                             |
| Spinne                      | 100                                       | 400                             |
| Endermite                   | 20                                        | 80                              |
| Schwein                     | 120                                       | 480                             |
| Kuh                         | 120                                       | 480                             |
| Schaf                       | 120                                       | 480                             |
| Huhn                        | 150                                       | 600                             |
| Hase                        | 80                                        | 320                             |
| Pferd                       | 30                                        | 120                             |
| Wolf                        | 30                                        | 120                             |
| Katze                       | 30                                        | 120                             |
| Ozelot                      | 10                                        | 40                              |
| Papagei                     | 10                                        | 40                              |
| Dorfbewohner                | 200                                       | 800                             |
| Eisengolem                  | 60                                        | 240                             |
| Fallengelassener Gegenstand | 300                                       | 1200                            |
| Erfahrungskugel             | 300                                       | 1200                            |
| Rüstungsständer             | 120                                       | 480                             |
| Rahmen                      | 120                                       | 480                             |
| Leuchtender Rahmen          | 120                                       | 480                             |
| Boot                        | 60                                        | 240                             |
| Lore                        | 60                                        | 240                             |
| TNT                         | 60                                        | 240                             |
| Pfeil                       | 120                                       | 480                             |
| Schneeball                  | 120                                       | 480                             |
| Feuerwerksrakete            | 60                                        | 240                             |
| Enderperle                  | 20                                        | 80                              |
| Fallender Block             | 60                                        | 240                             |