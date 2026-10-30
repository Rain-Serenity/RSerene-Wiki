---
author: Chosen_1st ,  Korvahet
---
# Grundeinstellungen

::: tip Hinweis
Der CirnoArk-Server wird von Korvahet betrieben。
:::

## Server-Basisinformationen
- **Serveradresse**：`CirnoArk.RSerene.com`(du kannst auch von einem anderen RSerene-Server den Befehl `/server CirnoArk` ausführen)。
- **Server-Core**：[Leaf](https://www.LeafMC.one/)。
- **Client-Kompatibilität**：Kompatibel mit Clients von 1.8 ~ 26.3。
- **Empfohlene Client-Version**：26.3
- **Spielerzahl und Schwierigkeit**：Maximal 20 Spieler online, Schwierigkeitsgrad: Schwer。
- **Sichtweite**：Sichtweite 12, Simulationsdistanz 10。
- **Geplante Bereinigung & Neustart**：Stündlich werden die Drops auf dem Boden automatisch entfernt; alle 72 Stunden erfolgt ein geplanter Neustart。
- **Schlafmechanik**：Wenn 30 % der Spieler im Bett liegen, startet die Nachtbeschleunigung. Durch das eigene Plugin [NoPhantomSleep](https://GitHub.com/Rain-Serenity/NoPhantomSleep) gilt ein Rechtsklick auf ein Bett in der Nacht als Überstehen der gesamten Nacht, und es spawnen keine Phantoms。
- **Inventar beim Tod nicht behalten**：Der Server hat „Inventar beim Tod behalten“ nicht aktiviert。

## Kern-Gameplay: Slimefun und Industrie

Die Kernmechanik des Servers: Du startest bei rohen Erzen und schaltest nach und nach Maschinen und Ausrüstung frei。

### 1. Slimefun-Grundlagen (Slimefun)
- **Insgesamt 38 Forschungsstufen** – sie sind der Fortschrittsmaßstab der ganzen Industrielinie und werden über Rezepte und Aufgaben Schritt für Schritt freigeschaltet (sie kosten kein Geld)。Beim ersten Betreten erhältst du den Einsteigerguide, der auch die Originalrezepte enthält。
- **Phasen der Forschungsstufen**：
    - Einstieg: 小鸡, 牛牛君, 蜘蛛, 村民, 开拓者
    - Schüler: 童生, 实习生, 不合格生, 学生
    - Lehrling: 笨拙学徒, 学徒, 熟练学徒, 法师学徒, 杰出法师
    - Magier: 年轻魔术师, 笨拙魔术师, 普通魔术师, 魔术师, 熟练魔术师, 特技魔术师, 惯用魔术师, 杰出魔术师
    - Zauberer: 笨拙巫师, 巫师, 普通巫师, 特技巫师, 杰出巫师, 卓越巫师
    - Meister: 年轻大师, 笨拙大师, 实习大师, 合格大师, 大师, 特技大师, 杰出大师, 卓越大师, 精通大师, 天选之子
- **Survival-Mechaniken**：Strahlungsmechanik aktiv (in Zonen mit hoher Strahlung sammelt sich dauerhaft Strahlung an, die ersten 15 Sekunden sind eine Schonfrist; zu hohe Strahlung verursacht Schaden und kann dich sogar in Brand setzen); Rüstungseffekt aktiv (das Tragen von Slimefun-Rüstung erneuert den Effekt dauerhaft, etwa alle 10 Sekunden)。
- **Logistik und Lagerung**：Item-Netzwerke (networks) fassen maximal 200 Items und bieten eine visuelle Oberfläche; Rucksäcke lassen sich auch öffnen, wenn der Besitzer offline ist。

### 2. Werkzeug- und Rüstungswerkstatt (SlimeTinker)
Werkzeuge und Rüstungen werden in der Werkstatt verarbeitet, nicht einfach direkt hergestellt。Enthaltene Arbeitsplätze: Werkbank (Zusammensetzen), Werkzeugtisch (Attribute ändern), Rüstungstisch (Herstellen), Reparaturbank (Reparieren/Verzaubern), Umbautisch (Weiterentwicklung), Tauschstation。Die Rezeptwerte richten sich nach dem Rezeptbuch im Spiel。

### 3. Alchemie, Injektionen und Evolutionen (AlchimiaVitae)
Eine zweite Wachstumslinie neben der klassischen Industrie。
- **9 Injektionen**：Vernichtungskritisch, Phantomkritisch, Zielerfassung, Stärke, Flüchtigkeit, Heilung, automatisches Nachpflanzen, Totembatterie, Rückstoß。
- **5 Evolutionen**：Veredeln Basismaterialien zu verstärktem Legierungsbarren, gehärtetem Metall, Stahlbarren, Damaststahlbarren und komprimierter Kohle。
- **Brauung „Barmherzigkeit“**：Gewährt fünf Arten von Boni – Resistenz, Eile, Regeneration, Geschwindigkeit, Sprungkraft – und hält 300 Sekunden。

### 4. ClayTech und Weltraumerkundung (ClayTech)
- **Alle vier Himmelskörper sind offen**：Overworld, Mond, Mars, Asteroidengürtel。Weltraumreisen brauchen keine Berechtigung; jeder Himmelskörper hat Werte wie Entfernung, Treibstoff und Bewohnbarkeit。
- **Rakete**：In der Hand halten und starten, mit 10 Sekunden Countdown (ein Wechsel des Items in der Hand bricht ab); sie braucht ausreichend Treibstoff und stapelt sich nicht。
- **Raumanzug**：Braucht Treibstoff, Sauerstoff und Schutzstufe und wirkt nur, wenn du ihn vollständig trägst; bei zu wenig Sauerstoff gibt es eine Warnung und du kannst dich nicht einmal bewegen。Zum Nachfüllen dient der Sauerstoffverteiler (der Verteiler selbst braucht 4 Sauerstoff)。
- **Weltraum-Limits**：Auf Planeten kannst du eine Basis setzen (nur deine eigene kannst du abbauen); im Weltraum ist jede Teleportation verboten (auch dorthin)。

### 5. Vielfältige Industrie-Erweiterungen
| Plugin                                   | Inhalt                                                            |
|:-----------------------------------------|:------------------------------------------------------------------|
| InfinityExpansion (Endlose Erweiterung)  | Mehr Industrie-Items und spätere Materialien                      |
| CompressionCraft (Kompression)           | Verdichtete Verarbeitung von Erzen und Materialien                |
| EcoPower (Ökologische Energie)           | Rezepte rund um erneuerbare Energien                              |
| SimpleStorage (Einfache Lagerung)        | Zusätzliche Lagerblöcke und Container                             |
| PrivateStorage (Private Lagerung)        | Private Tresorfächer (standardmäßig kann nur der Besitzer öffnen) |
| ColoredEnderChests (Farbige Endertruhen) | Endertruhen nach Farbe sortiert                                   |
| MiniBlocks (Mini-Blöcke)                 | Dekorative Blöcke in Miniatur                                     |
| HardcoreSlimefun (Hardcore-Slimefun)     | Schwierigere Industrieprozesse                                    |
| TranscEndence (End-Saga)                 | Mehr End-Inhalte                                                  |
| HotbarPets (Hotbar-Haustiere)            | Haustiere für die Hotbar                                          |
| SlimefunTimeit (Slime-Timer)             | Mechaniken rund um die Zeit                                       |
| SmallSpace (Kleinraum)                   | Stellt eine eigene „Kleinraum“-Welt bereit                        |

## Welt- und Survival-Systeme

### 1. RPG-Skills (mcMMO)
19 trainierbare Skills, Levelmaximum **1000** (Retro-Modus, der benötigte Aufwand ist das Zehnfache des Standardmodus)。Enthalten sind: Acrobatics, Alchemy, Archery, Axe, Digging, Fishing, Herbalism, Mining, Repair, Disassembling, Smelting, Sword, Taming, Unarmed, Woodcutting, Crossbow, Trident, Mace, Spear。
- **Gruppenmechanik**：Die Gruppengröße ist unbegrenzt, der Teilungsradius beträgt 75 Blöcke。Gruppenchat (Stufe 1), Teleport (Stufe 2), Bündnisse (Stufe 5), Item-Teilen (Stufe 8) und Erfahrungsteilung (Stufe 10) werden mit dem Level freigeschaltet。
- **Keine Strafe beim Tod**：Beim Tod verlierst du kein Skill-Level, es gibt auch keine Lifeleech-Strafe。
- **Skill-Auslösung**：Level-Ups werden im Chat angekündigt (alle 100 Level ein Meilenstein); manche aktiven Fähigkeiten haben einheitlich 240 Sekunden Abklingzeit (Sprengstoffabbau: 60 Sekunden), das Auslösen verbraucht zusätzlich 1 Haltbarkeit。
- **Besondere Fähigkeit**：Normale Blöcke wie Stein kannst du nicht mit leeren Händen abbauen – mit dem Skill Unarmed klappt das ab einem gewissen Level。

### 2. Grundstücke
| Punkt                                | Wert                |
|:-------------------------------------|:--------------------|
| Maximale Anzahl Grundstücke          | 8                   |
| Maximale Größe je Grundstück         | 512 × 512 × 256     |
| Höhenbereich                         | -64 ~ 320           |
| Abstand zwischen Grundstücken        | Mindestens 8 Blöcke |
| Auswahlwerkzeug / Werkzeug für Infos | Holzhacke / Schnur  |
| Preis pro Block                      | 0,05 Spielmünzen    |

- **Rechte und Sicherheit**：In Grundstücken ist PvP standardmäßig verboten, **Explosionen sind aber standardmäßig erlaubt**. Der Eigentümer kann die Rechte einzeln umschalten。
- **Vertrauensmechanik**：`/res padd` gibt anderen die Rechte Bauen, Zerstören, Container und Interaktion, **aber kein** PvP und keine Zündel-Rechte. Für vollständiges Vertrauen brauchst du `/res pset &lt;ID&gt; admin true`。
- **Deaktivierte Funktionen**：Flug, Sprunghöhe, Erfahrung/Items behalten, Backups, Zeit & Wetter, Heilung, Grundstücks-Chat (selbst mit Grundstücks-Admin-Rechten nicht aktivierbar)。
- **Handelsregeln**：Miete und Verkauf von Grundstücken sind deaktiviert, beim Löschen eines Grundstücks wird kein Gold erstattet。

### 3. Teleportation und Zuhause
- **Befehle**：`/back`(letzte Position), `/dback`(Todesort), `/home`, `/homes`, `/sethome`, `/removehome`, `/spawn`, `/tpa`, `/tpahere`, `/rtp`。
- **Zahlen und Limits**：Du kannst bis zu 8 Zuhause setzen; eine `/tpa`-Anfrage ist 60 Sekunden lang gültig; `/rtp` hat 10 Minuten Abklingzeit, der Zielpunkt liegt in der Overworld zwischen 3200 ~ 32000 Blöcken。
- **Unverwundbarkeit**：Nach dem Teleport bist du 5 Sekunden unverwundbar, das endet aber vorzeitig, sobald du Blöcke zerstörst oder mit Blöcken interagierst。

### 4. Wirtschaftssystem
- **Währung**：Symbol `￥`, neue Spieler starten mit 100, kein Limit, Dezimalwerte sind möglich。
- **Handel und Gebühren**：`/pay`-Überweisungen kosten 3 % Gebühren (vom Zahlenden zusätzlich getragen)。
- **Globaler Markt**：Mit `/gmp market gui` öffnest du den globalen Markt (weitere Befehle siehe „Befehlsliste“), darin liegt die Steuer bei 5 %。
- **Systemankauf**：Mit `/sell gui` öffnest du das Menü; leg die vom System-Shop ankaufbaren Items hinein und schließe das Menü, dann wird automatisch verkauft; Reparaturen sind kostenlos; beim Recycling verschrotteter Maschinen wird ein Teil der Materialien zurückgegeben。
- **Vom System-Shop ankaufbare Items:**

| Item           | Preis | Item                      | Preis    |
|:---------------|:------|:--------------------------|:---------|
| Rohkupfer      | 0,60  | Smaragderz                | 25,00    |
| Roheisen       | 1,20  | Herz des Meeres           | 50,00    |
| Rohgold        | 1,60  | Netheritbarren            | 90,00    |
| Kohleerz       | 2,80  | Diamantblock              | 108,00   |
| Rohkupferblock | 5,40  | Verzauberter Goldapfel    | 200,00   |
| Roheisenblock  | 10,80 | Tiefenschieferkohleerz    | 360,00   |
| Diamant        | 12,00 | Tiefenschiefer-Smaragderz | 680,00   |
| Rohgoldblock   | 14,40 | Schwerer Kern             | 3.200,00 |

::: tip Hinweis
Die Verkaufspreise werden noch angepasst – Feedback ist willkommen。
:::

### 5. Chatsystem
- **Grundlimits**：Ein Chat-Kanal, 2 Sekunden Sprechkühlzeit, maximal 100 Zeichen pro Nachricht。
- **Schnellanzeige**：Mit `[inv]`, `[ender]` und `[item]` im Chat zeigst du direkt dein Inventar, deine Endertruhe oder das Item in deiner Hand。
- **Mute-Einschränkung**：Während eines Mutes sind Befehle wie `/me`, `/tell` und `/msg` wirkungslos。

## Kern-Plugins

- **Kernbasis**：Slimefun
- **Slimefun-Erweiterungen**：SlimeTinker, AlchimiaVitae, ClayTech, InfinityExpansion, CompressionCraft, EcoPower, SimpleStorage, PrivateStorage, ColoredEnderChests, MiniBlocks, HardcoreSlimefun, TranscEndence, HotbarPets, SlimefunTimeit, SmallSpace, SFCalc, GuizhanLibPlugin, SlimeGlue。