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
| Verzauberter Goldapfel | 200,00 | Tiefenkohleerz    | 420,00  | Tiefensmaragderz | 680,00 |
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
| Zombifizierter Piglin       | 120                                       | 480                             |
| Blaze                       | 100                                       | 400                             |
| Magmawürfel                 | 100                                       | 400                             |
| Schleim                     | 120                                       | 480                             |
| Ghast                       | 30                                        | 120                             |
| Hexe                        | 80                                        | 320                             |
| Witherskelett               | 100                                       | 400                             |
| Enderman                    | 80                                        | 320                             |
| Ertrunkener                 | 100                                       | 400                             |
| Guardian                    | 100                                       | 400                             |
| Zombie                      | 150                                       | 600                             |
| Skelett                     | 150                                       | 600                             |
| Creeper                     | 120                                       | 480                             |
| Spinne                      | 120                                       | 480                             |
| Endermite                   | 30                                        | 120                             |
| Schwein                     | 150                                       | 600                             |
| Kuh                         | 150                                       | 600                             |
| Schaf                       | 150                                       | 600                             |
| Huhn                        | 180                                       | 720                             |
| Hase                        | 100                                       | 400                             |
| Pferd                       | 40                                        | 160                             |
| Wolf                        | 40                                        | 160                             |
| Katze                       | 40                                        | 160                             |
| Ozelot                      | 15                                        | 60                              |
| Papagei                     | 15                                        | 60                              |
| Dorfbewohner                | 250                                       | 1000                            |
| Eisengolem                  | 80                                        | 320                             |
| Fallengelassener Gegenstand | 400                                       | 1600                            |
| Erfahrungskugel             | 400                                       | 1600                            |
| Rüstungsständer             | 150                                       | 600                             |
| Rahmen                      | 150                                       | 600                             |
| Leuchtender Rahmen          | 150                                       | 600                             |
| Boot                        | 80                                        | 320                             |
| Lore                        | 80                                        | 320                             |
| TNT                         | 80                                        | 320                             |
| Pfeil                       | 150                                       | 600                             |
| Schneeball                  | 150                                       | 600                             |
| Feuerwerksrakete            | 80                                        | 320                             |
| Enderperle                  | 30                                        | 120                             |
| Fallender Block             | 80                                        | 320                             |