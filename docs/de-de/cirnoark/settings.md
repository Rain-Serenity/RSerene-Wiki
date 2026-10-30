---
author: Chosen_1st ,  Korvahet
---
# Grundeinstellungen
::: tip Hinweis
Der CirnoArk-Server wird von Korvahet betrieben.
:::

## Grundkonfiguration des Servers
- **Der Server-Core ist Leaf (Paper-Familie), die Spielversion ist 26.3, und ViaVersion / ViaBackwards sorgen dafür, dass Clients von 1.8 ~ 26.3 kompatibel sind.**
- **Maximal 20 Spieler online, Schwierigkeitsgrad Schwierig, Sichtweite 12, Simulationsdistanz 10, Spawn-Schutzzone mit 16 Blöcken Radius.**
- **Die Serveradresse ist `CirnoArk.RSerene.com`; du kannst auch „CirnoArk" aus der Serverliste des RSerene-Masters wählen — wie du beitrittst, steht in den [häufigen Fragen](/de-de/cirnoark/faq.html).**

## Kernsystems des Gameplays

### Slimefun-Industrie (Slimefun)
Die Kernmechanik des Servers. Du startest bei rohen Erzen und schaltest nach und nach eigene Maschinen und Ausrüstung frei.

- **Insgesamt 38 Forschungsstufen**, sie sind dein Fortschrittsmaßstab durch die gesamte Industrielinie:

| 阶段 | 研究等级 |
|---|---|
| 起步 | 小鸡、牛牛君、蜘蛛、村民、开拓者 |
| 学生 | 童生、实习生、不合格生、学生 |
| 学徒 | 笨拙学徒、学徒、熟练学徒、法师学徒、杰出法师 |
| 魔术师 | 年轻魔术师、笨拙魔术师、普通魔术师、魔术师、熟练魔术师、特技魔术师、惯用魔术师、杰出魔术师 |
| 巫师 | 笨拙巫师、巫师、普通巫师、特技巫师、杰出巫师、卓越巫师 |
| 大师 | 年轻大师、笨拙大师、实习大师、合格大师、大师、特技大师、杰出大师、卓越大师、精通大师、天选之子 |

- **Beim ersten Betreten bekommst du den Einsteigerguide**, der auch die Originalrezepte enthält – du kannst jederzeit nachschlagen.
- **Forschungen kosten kein Geld**, du schaltest sie einfach Schritt für Schritt über Rezepte und Aufgaben frei.
- **Strahlungsmechanik aktiv**: In Zonen mit hoher Strahlung sammelt sich dauerhaft Strahlung an, die ersten 15 Sekunden sind Kulisse; zu hohe Strahlung verursacht Schaden und kann dich sogar in Brand setzen.
- **Rüstungseffekt aktiv**: Das Tragen von Slimefun-Rüstung erneuert den Effekt dauerhaft (Auffrischung etwa alle 10 Sekunden).
- **Item-Netzwerke (networks) fassen maximal 200 Items**, dazu gibt es eine visuelle Oberfläche.
- **Rucksäcke lassen sich auch öffnen, wenn der Besitzer offline ist** (Einrichtungen mit öffentlichen Rucksäcken).

### Werkzeug- und Rüstungswerkstatt (SlimeTinker)
Werkzeuge und Rüstungen werden in der Werkstatt verarbeitet, nicht einfach direkt zusammengebraut.

- Verfügbare Arbeitsplätze: Werkbank, Schmelzofen, Werkzeugtisch, Rüstungstisch, Reparaturbank, Umbautisch, Tauschstation.
- Werkzeuge auf der Werkbank zusammensetzen, auf dem Werkzeugtisch Attribute ändern, auf dem Rüstungstisch Rüstung herstellen, auf der Reparaturbank reparieren und verzaubern, auf dem Umbautisch weiterentwickeln.
- Genaue Rezepte und Materialverhältnisse stehen im Rezeptbuch im Spiel (**Die Rezeptwerte stehen im Plugin selbst, in der Serverkonfiguration gibt es keine Kopie**).

### Alchemie, Injektionen und Evolutionen (AlchimiaVitae)
Neben der klassischen Industrie bieten Alchemie und Evolutionen eine zweite Wachstumslinie.

- **9 Injektionen** lassen sich an Ausrüstung anbringen: Vernichtungskritisch, Phantomkritisch, Zielerfassung, Stärke, Flüchtigkeit, Heilung, automatisches Nachpflanzen, Totembatterie, Rückstoß.
- **5 Evolutionen** veredeln Basismaterialien zu Höherem: Verstärkter Legierungsbarren, gehärtetes Metall, Stahlbarren, Damaststahlbarren, komprimierte Kohle.
- **Der Trank „Barmherzige Brauung"** gewährt fünf Arten von Boni – Resistenz, Hast, Regeneration, Geschwindigkeit, Sprungboost – und hält 6000 Ticks (300 Sekunden).

### ClayTech und Weltraumerkundung (ClayTech)
Das Markenzeichen des Servers: Verlasse die Overworld und baue auf anderen Planeten ab.

- **Alle vier Himmelskörper sind offen**: Overworld, Mond, Mars, Asteroidengürtel.
- **Weltraumreisen brauchen keine Berechtigung**, jeder Spieler kann eine Rakete besteigen.
- **Rakete**: In der Hand halten und starten, mit 10 Sekunden Countdown (solange der Countdown läuft, bricht ein Item-Wechsel in der Hand ab); ohne genug Treibstoff startet sie nicht; Raketen stapeln sich nicht.
- **Raumanzug**: Drei Werte – Treibstoff, Sauerstoff und Schutzstufe; bei zu wenig Sauerstoff gibt es eine Warnung und du kannst dich nicht einmal bewegen; der Anzug wirkt nur, wenn du ihn vollständig trägst.
- **Sauerstoffverteiler**: Füllt den Sauerstoff im Raumanzug nach, der Verteiler selbst braucht mindestens 4 Sauerstoff.
- **Planetenbasis**: Auf einem Planeten kannst du eine Basis setzen, jede Basis bekommt einen eigenen Marker; du kannst nur deine eigene Basis abbauen.
- **Weltraum-Regeln**: Im Weltraum kannst du dich nicht teleportieren und auch nicht dorthin teleportiert werden.
- **Planeteninfo**: Jeder Himmelskörper zeigt Entfernung (in Kilometern), benötigten Treibstoff, Bewohnbarkeit, Gravitation und Gefahrenstufe an.

### Weitere Industrie-Erweiterungen
| Plugin | Inhalt |
|---|---|
| InfinityExpansion (Endlose Erweiterung) | Mehr Industrie-Items und spätere Materialien |
| CompressionCraft (Kompression) | Verdichtete Verarbeitung von Erzen und Materialien |
| EcoPower (Ökologische Energie) | Rezepte rund um erneuerbare Energien |
| SimpleStorage (Einfache Lagerung) | Zusätzliche Lagerblöcke und Container |
| PrivateStorage (Private Lagerung) | Private Tresorfächer (standardmäßig kann nur der Besitzer öffnen) |
| ColoredEnderChests (Farbige Endertruhen) | Endertruhen nach Farbe sortiert |
| MiniBlocks (Mini-Blöcke) | Dekorative Blöcke in Miniatur |
| HardcoreSlimefun (Hardcore-Slimefun) | Schwierigere Industrieprozesse |
| TranscEndence (End-Saga) | Mehr End-Inhalte |
| HotbarPets (Hotbar-Haustiere) | Haustiere für die Hotbar |
| SlimefunTimeit (Slime-Timer) | Mechaniken rund um die Zeit |
| SmallSpace (Kleinraum) | Stellt eine eigene „Kleinraum"-Welt bereit |
| SFCalc (Rezeptrechner) | `/sfcalc calc &lt;gegenstand&gt; [&lt;anzahl&gt;]` rechnet Materialien direkt aus |

### RPG-Skills (mcMMO)
19 trainierbare Skills, Levelmaximum **1000** (Retro-Modus, der benötigte Levelaufwand ist das Zehnfache des Standardmodus).

**Skill-Übersicht**: Acrobatics, Alchemy, Archery, Axe, Digging, Fishing, Herbalism, Mining, Repair, Disassembling, Smelting, Sword, Taming, Unarmed, Woodcutting, Crossbow, Trident, Mace, Spear.

- **In Gruppen teilst du Erfahrung**, die Gruppengröße ist unbegrenzt, der Teilungsradius beträgt 75 Blöcke; Gruppenchat wird mit Level 1 freigeschaltet, Gruppenteleport mit Level 2, Bündnisse mit Level 5, Item-Teilen mit Level 8, Erfahrungsteilung mit Level 10.
- **Beim Tod verlierst du kein Skill-Level**, es gibt auch keine Lifeleech-Strafe.
- **Skill-Level-Ups werden im Chat angekündigt**, alle 100 Level ein Meilenstein.
- **Manche Fähigkeiten musst du aktiv auslösen**, die Abklingzeit beträgt einheitlich 240 Sekunden (Sprengstoffabbau: 60 Sekunden); beim Auslösen verbrauchst du zusätzlich 1 Haltbarkeit.
- **Normale Blöcke kannst du nicht mit leeren Händen abbauen**, mit dem Skill Unarmed klappt das ab einem gewissen Level.

### Grundstücke (Residence)
Mit der Holzhacke markierst du dein Grundstück.

| Punkt | Wert |
|---|---|
| Maximale Anzahl Grundstücke | Standard 8 (Event-Gruppe 12) |
| Maximale Größe je Grundstück | 512 × 512 × 256 |
| Höhenbereich | -64 ~ 320 |
| Bereiche je Grundstück | 2 |
| Teilbereiche | Bis zu 3 Ebenen verschachtelt, je Ebene maximal 256 × 256 × 256 |
| Abstand zwischen Grundstücken | Zwischen allen Grundstücken mindestens 8 Blöcke |
| Auswahlwerkzeug | Holzhacke |
| Grundstücksinfo ansehen | Schnur in der Hand |

- **In Grundstücken ist PvP standardmäßig verboten**, **Explosionen sind aber standardmäßig erlaubt**.
- Der Grundstückseigentümer kann die Rechte einzeln umschalten (Bauen, Zerstören, Container, Interaktion, PvP, Explosion, TNT usw.).
- **Vertraute Spieler (`/res padd`)** erhalten nur Rechte wie Bauen, Zerstören, Container und Interaktion, **kein** PvP und keine Zündel-Rechte in deinem Grundstück.
- **Flug, Sprunghöhe, Erfahrung/Items behalten, Backups, Zeit & Wetter, Heilung, Grundstückschat** – diese Schalter lassen sich auch für Admins im Grundstück nicht aktivieren.
- Miete, Verkauf und Leasing sind derzeit deaktiviert, beim Löschen eines Grundstücks wird kein Gold erstattet.
- Der Grundstückschat (`/rc`) ist derzeit deaktiviert.

### Wirtschaft (CMI)
- **Währungssymbol `￥`**, neue Spieler starten mit 100, kein Limit, Dezimalwerte sind möglich.
- **`/pay` kostet 3 % Gebühren**, die der Zahlende zusätzlich trägt.
- **Itempreistabelle** (`/worth`, `/worthlist`):

| Item | Preis | Item | Preis |
|---|---|---|---|
| Rohkupfer | 0.60 | Smaragderz | 25.00 |
| Roheisen | 1.20 | Herz des Meeres | 50.00 |
| Rohgold | 1.60 | Netheritbarren | 90.00 |
| Kohleerz | 2.80 | Diamantblock | 108.00 |
| Rohkupferblock | 5.40 | Verzauberter Goldapfel | 200.00 |
| Roheisenblock | 10.80 | Tiefenschieferkohleerz | 360.00 |
| Diamant | 12.00 | Tiefenschiefer Smaragderz | 680.00 |
| Rohgoldblock | 14.40 | Heavy Core | 3200.00 |

- Reparaturen sind **kostenlos**; beim Recycling verschrotteter Maschinen wird ein Teil der Materialien zurückgegeben.
- Mit Banknoten kannst du Bankschecks ausstellen (bis zu 100 Millionen) für große Beträge.

### Teleportation und Zuhause (CMI)
- **Verfügbare Befehle**: `/back` (letzte Position), `/dback` (Todesort), `/home`, `/homes`, `/sethome`, `/removehome`, `/spawn`, `/tpa`, `/tpahere`, `/rtp`.
- **Anzahl der Zuhause**: Standard 1; die Spielergruppen Newbie bekommen 2, Advanced 3, Vip 5, normale Spieler haben bei uns bis zu 8.
- **Eine `/tpa`-Anfrage ist 60 Sekunden lang gültig**, vor dem Teleport läuft ein 3-Sekunden-Countdown; **`/rtp` hat 10 Minuten Abklingzeit**, der Zielpunkt liegt in der Overworld zwischen 3200 ~ 32000 Blöcken.
- **Nach dem Teleport bist du 5 Sekunden unverwundbar**, endet aber vorzeitig, sobald du Blöcke zerstörst oder mit Blöcken interagierst.
- **Schlafen überspringt die Nacht**; **alle 72 Stunden gibt es einen geplanten Neustart**, **stündlich werden die Drops auf dem Boden automatisch entfernt**.

### Chat (TrChat)
- **Nur ein Chat-Kanal, 2 Sekunden Abklingzeit zwischen Nachrichten, maximal 100 Zeichen pro Nachricht.**
- `/shout` rufen (3 Sekunden Abklingzeit), `@Spielername` erwähnen (30 Sekunden Abklingzeit), `@all` alle Mitglieder (5 Minuten Abklingzeit, benötigt Berechtigung).
- Mit `[inv]`, `[ender]` und `[item]` im Chat zeigst du direkt dein Inventar, deine Endertruhe oder das Item in deiner Hand.
- Während eines Mutes sind `/me`, `/tell`, `/msg` und ähnliche Befehle wirkungslos.

## Zahlen auf einen Blick

| Punkt | Wert |
|---|---|
| Maximale Spielerzahl | 20 |
| Schwierigkeitsgrad | Schwierig |
| Sichtweite / Simulationsdistanz | 12 / 10 |
| Spawn-Schutz | 16 Blöcke |
| Chat-Abklingzeit / Maximallänge | 2 Sekunden / 100 Zeichen |
| Shout-Abklingzeit | 3 Sekunden |
| Abklingzeit Erwähnen / alle | 30 Sekunden / 5 Minuten |
| Unverwundbarkeit nach Teleport | 5 Sekunden |
| Teleport-Abklingzeit (`/rtp`) | 10 Minuten |
| AFK-Auslöser | 10 Minuten ohne Bewegung |
| Neustartintervall | 72 Stunden |
| Boden-Drops werden entfernt | Stündlich |
| Maximales Skill-Level | 1000 |
| Maximale Gruppengröße | Unbegrenzt |
| Erfahrungsteilungsreichweite | 75 Blöcke |
| Anzahl der Forschungsstufen | 38 |
| Verzauberungslimits (Auszug) | Effizienz/Schutz/Silent Mining siehe unten |

**Häufige Verzauberungslimits**: Effizienz 5, Schaden 5, Schutz 4, Silent Mining 1, Glück 3, Mending 1, Unendlich 1, Feuer 2, Schärfe/Geister-/Spinnenkiller 5, Erfahrung 3.

## Plugin-Liste

| Kategorie | Plugins |
|---|---|
| Slimefun | Slimefun |
| Slimefun-Erweiterungen | SlimeTinker, AlchimiaVitae, ClayTech, InfinityExpansion, CompressionCraft, EcoPower, SimpleStorage, PrivateStorage, ColoredEnderChests, MiniBlocks, HardcoreSlimefun, TranscEndence, HotbarPets, SlimefunTimeit, SmallSpace, SFCalc, GuizhanLibPlugin, SlimeGlue |

## Updates & Ankündigungen
- Aktuell: CirnoArk ist geöffnet.
- Änderungen (Rezepte, Balance, Zahlen) werden in der Gruppe angekündigt.

## Kontakt
- Website: www.RSerene.com
- QQ-Gruppe: 902620497
- Probleme und Feedback: @Chosen_1st in der Gruppe
