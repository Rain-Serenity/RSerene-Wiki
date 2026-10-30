# Grundeinstellungen

## Server-Basisinformationen
- **Serveradresse**：`Play.RSerene.com`(du kannst auch von einem anderen RSerene-Server den Befehl `/server Survival` ausführen)。
- **Server-Core**：[Lophine](https://GitHub.com/LophineLabs/Lophine)。
- **Client-Kompatibilität**：Kompatibel mit Clients von 1.8 ~ 26.3。
- **Empfohlene Client-Version**：26.3
- **Spielerzahl und Schwierigkeit**：Maximal 40 Spieler online, Schwierigkeitsgrad: Schwer。
- **Sichtweite**：Sichtweite 16, Simulationsdistanz 12。
- **Schlafmechanik**：Wenn 30 % der Spieler im Bett liegen, startet die Nachtbeschleunigung. Durch das eigene Plugin [NoPhantomSleep](https://GitHub.com/Rain-Serenity/NoPhantomSleep) gilt ein Rechtsklick auf ein Bett in der Nacht als Überstehen der gesamten Nacht, und es spawnen keine Phantoms。
- **Inventar beim Tod behalten**：Der Server hat „Inventar beim Tod behalten“ aktiviert。

## Welt- und Survival-Systeme

### 1. Teleportation und Zuhause
- **Befehle**：`/back`(letzte Position), `/dback`(Todesort), `/home`, `/homes`, `/sethome`, `/removehome`, `/spawn`, `/tpa`, `/tpahere`, `/rtp`。
- **Zahlen und Limits**：Du kannst bis zu 8 Zuhause setzen; eine `/tpa`-Anfrage ist 60 Sekunden lang gültig; `/rtp` hat 10 Minuten Abklingzeit, der Zielpunkt liegt in der Overworld zwischen 3200 ~ 32000 Blöcken。
- **Unverwundbarkeit**：Nach dem Teleport bist du 5 Sekunden unverwundbar, das endet aber vorzeitig, sobald du Blöcke zerstörst oder mit Blöcken interagierst。

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

### 3. Wirtschaftssystem
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

### 4. Chatsystem
- **Grundlimits**：Ein Chat-Kanal, 2 Sekunden Sprechkühlzeit, maximal 100 Zeichen pro Nachricht。
- **Schnellanzeige**：Mit `[inv]`, `[ender]` und `[item]` im Chat zeigst du direkt dein Inventar, deine Endertruhe oder das Item in deiner Hand。
- **Mute-Einschränkung**：Während eines Mutes sind Befehle wie `/me`, `/tell` und `/msg` wirkungslos。

## Drosselungs-Einstellungen

### 1. Tick-Verarbeitungen pro Tick (limit)
- **Bedeutung**：Wie oft diese Entity pro Tick innerhalb einer einzelnen Folia-Region maximal verarbeitet wird。
- **Auslöser**：Die Drosselung startet, wenn die Zahl der Entities in der Region den Wert limit übersteigt。
- **Wirkung**：Pro Tick werden nur so viele Entities verarbeitet, wie limit erlaubt; die Ticks der übrigen Entities werden übersprungen。
- **Beispiel**：limit = 100 bei tatsächlich 300 Entities in der Region → pro Tick werden nur 100 verarbeitet, jede Entity wird also durchschnittlich nur alle 3 Ticks verarbeitet。

### 2. Maximale Existenzzahl (removal)
- **Bedeutung**：Die harte Obergrenze, wie viele dieser Entity in einer einzelnen Folia-Region existieren dürfen。
- **Auslöser**：Die Entfernung startet, wenn die Zahl der Entities in der Region removal übersteigt。
- **Wirkung**：Der Kern entfernt Entities beginnend mit den am frühesten gespawnten, bis die Zahl unter removal sinkt。
- **Zweck**：Verhindert, dass sich Entities unbegrenzt ansammeln, und vermeidet, dass Speicher oder Rechenlast einer Region explodieren。

### 3. Konkrete Einstellungen
| Entity                      | Tick-Verarbeitungen pro Tick (limit) | Maximale Existenzzahl (removal) |
|-----------------------------|--------------------------------------|---------------------------------|
| Zombifizierter Piglin       | 100                                  | 400                             |
| Blaze                       | 80                                   | 320                             |
| Magmawürfel                 | 80                                   | 320                             |
| Schleim                     | 100                                  | 400                             |
| Ghast                       | 20                                   | 80                              |
| Hexe                        | 60                                   | 240                             |
| Witherskelett               | 80                                   | 320                             |
| Enderman                    | 60                                   | 240                             |
| Ertrunkener                 | 80                                   | 320                             |
| Guardian                    | 80                                   | 320                             |
| Zombie                      | 120                                  | 480                             |
| Skelett                     | 120                                  | 480                             |
| Creeper                     | 100                                  | 400                             |
| Spinne                      | 100                                  | 400                             |
| Endermite                   | 20                                   | 80                              |
| Schwein                     | 120                                  | 480                             |
| Kuh                         | 120                                  | 480                             |
| Schaf                       | 120                                  | 480                             |
| Huhn                        | 150                                  | 600                             |
| Hase                        | 80                                   | 320                             |
| Pferd                       | 30                                   | 120                             |
| Wolf                        | 30                                   | 120                             |
| Katze                       | 30                                   | 120                             |
| Ozelot                      | 10                                   | 40                              |
| Papagei                     | 10                                   | 40                              |
| Dorfbewohner                | 100                                  | 200                             |
| Eisengolem                  | 60                                   | 240                             |
| Fallengelassener Gegenstand | 300                                  | 1.200                           |
| Erfahrungskugel             | 300                                  | 1.200                           |
| Rüstungsständer             | 120                                  | 480                             |
| Rahmen                      | 120                                  | 480                             |
| Leuchtender Rahmen          | 120                                  | 480                             |
| Boot                        | 60                                   | 240                             |
| Lore                        | 60                                   | 240                             |
| TNT                         | 60                                   | 240                             |
| Pfeil                       | 120                                  | 480                             |
| Schneeball                  | 120                                  | 480                             |
| Feuerwerksrakete            | 60                                   | 240                             |
| Enderperle                  | 20                                   | 80                              |
| Fallender Block             | 60                                   | 240                             |