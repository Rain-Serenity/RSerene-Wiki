---
author: Chosen_1st
---
# Befehlsliste
::: tip Hinweis
Der CirnoArk-Server wird von Chosen_1st betrieben.
:::

## Für alle Spieler freigegebene Befehle

Die folgenden Befehle stehen allen Spielern offen und können direkt genutzt werden.

### Teleportation und Position
| Befehl | Funktion |
|---|---|
| `/back` | Zum zuletzt verlassenen Ort zurückkehren |
| `/dback` | Zum Ort deines letzten Todes zurückkehren |
| `/home` | Teleportiere zu deinem Zuhause |
| `/homes` | Liste aller deiner Zuhause anzeigen |
| `/sethome` &lt;name&gt; | Setzt an deiner aktuellen Position ein Zuhause (Standardname Home) |
| `/removehome` &lt;name&gt; | Ein Zuhause löschen |
| `/spawn` | Zur Hauptstadt / zum Spawnpunkt zurückkehren |
| `/tpa` &lt;spieler&gt; | Teleportation zum anderen anfragen (Anfrage 60 Sekunden gültig, 3 Sekunden Countdown) |
| `/tpahere` &lt;spieler&gt; | Anfragen, dass der andere zu dir teleportiert wird |
| `/tpaccept` | Teleport-Anfrage annehmen |
| `/tpdeny` | Teleport-Anfrage ablehnen |
| `/rtp` | Zufällige Teleportation (Abklingzeit 10 Minuten, Zielpunkt in der Overworld zwischen 3200 ~ 32000 Blöcken) |

### Währung und Shop
| Befehl | Funktion |
|---|---|
| `/balance` | Deinen Kontostand anzeigen |
| `/money` | Deinen Kontostand anzeigen |
| `/pay` &lt;spieler&gt; &lt;betrag&gt; | Geld an einen anderen Spieler überweisen (Gebühr 3 %) |
| `/baltop` | Bestenliste der Kontostände anzeigen |
| `/sell` | Items in deinem Inventar verkaufen (Umrechnung nach der Preistabelle) |
| `/worth` | Verkaufswert des Items in deiner Hand abfragen |
| `/worthlist` | Vollständige Itempreistabelle öffnen |

### Chat und Informationen
| Befehl | Funktion |
|---|---|
| `/msg` &lt;spieler&gt; &lt;inhalt&gt; | Privatnachricht an einen anderen Spieler |
| `/ping` | Deine Latenz anzeigen |
| `/playtime` | Deine Online-Zeit anzeigen |
| `/playtimetop` | Bestenliste der Online-Zeiten anzeigen |
| `/shout` &lt;inhalt&gt; | Rufen, serverweit sichtbar (Abklingzeit 3 Sekunden) |

**Chat-Tipps**:
- `@Spielername` — einen Spieler erwähnen (Abklingzeit 30 Sekunden).
- `@all` — alle Mitglieder ansprechen (Abklingzeit 5 Minuten, benötigt zusätzliche Berechtigung).
- `[inv]` — dein Inventar im Chat anzeigen.
- `[ender]` — deine Endertruhe im Chat anzeigen.
- `[item]` — das Item in deiner Hand im Chat anzeigen.

### Slimefun und Gameplay
| Befehl | Funktion |
|---|---|
| `/sf` | Hauptbefehl von Slimefun, mit Unterbefehlen für Guide, Rezeptsuche, Forschungsfortschritt usw. |
| `/sf guide` | Einsteigerguide öffnen (du bekommst beim ersten Betreten automatisch einen) |
| `/sfcalc calc` &lt;gegenstand&gt; [&lt;anzahl&gt;] | Rezeptrechner: berechnet, welche Materialien du für ein Item (oder N Stück) brauchst |
| `/sfc calc` &lt;gegenstand&gt; [&lt;anzahl&gt;] | Kurzform von `/sfcalc calc` |

::: tip Hinweis
`/sfcalc` fragt nur Rezepte ab und verbraucht keine Materialien – der einfachste Weg, eine Industrie-Fertigungslinie vorzubereiten.
:::

## Befehle mit zusätzlicher Berechtigung

| Befehl | Funktion | Berechtigungsknoten |
|---|---|---|
| `/res` | Grundstücke verwalten (Erstellen, Einstellen, Löschen) | `residence.create` usw. |
| `/res padd` &lt;spieler&gt; &lt;flag&gt; | Dem Spieler Grundstücksrechte geben | Grundstückseigentümer |
| `/rc` | Grundstücks-Chat | Derzeit deaktiviert |
| `/cmi` | Zentraler CMI-Verwaltungsbefehl | `cmi.command` |
| `/cmi money give/take/set` &lt;spieler&gt; &lt;betrag&gt; | Kontostand eines Spielers anpassen | `cmi.command.money` (Admin) |
| `/cmi setworth` &lt;gegenstand&gt; &lt;preis&gt; | Itempreis ändern | `cmi.command.setworth` |
| `/cmi tp` &lt;spieler&gt; &lt;koordinaten&gt; | Direkt teleportieren | `cmi.command.tp` |
| `/cmi afk auto` | AFK gehen | `cmi.command.afk.auto` |
| `/lp` | Berechtigungsgruppen verwalten | `luckperms.*` (Admin) |
| `/co` / `/core` / `/coreprotect` | Chunk-Rückroll und -Abfrage | `coreprotect.*` (Admin) |
| `/grim` | Anticheat-Protokolle und Ausnahmen | `grim.*` (Admin) |
| `/ban` `/tempban` `/ipban` | Sperren | `litebans.ban` / `litebans.tempban` / `litebans.ipban` |
| `/mute` `/tempmute` | Stummschalten | `litebans.mute` / `litebans.tempmute` |
| `/warn` `/unwarn` | Verwarnen | `litebans.warn` / `litebans.unwarn` |
| `/kick` | Spieler kicken | `litebans.kick` |
| `/unban` `/unmute` | Sperre bzw. Stummschaltung aufheben | `litebans.unban` / `litebans.unmute` |
| `/mctop` | Skill-Rangliste | `mcmmo.commands.mctop` |
| `/mcrank` &lt;spieler&gt; | Skill-Rang eines Spielers abfragen | `mcmmo.commands.mcrank` |
| `/mmoinfo` | Skill-Erklärung | `mcmmo.commands.mmoinfo` |
| `/xprate` | Erfahrungsrate ansehen oder anpassen | `mcmmo.commands.xprate` |
| `/claytech` | ClayTech-Befehle | `claytech.basic` |
| `/ie` / `/ix` / `/infinityexpansion` | InfinityExpansion-Befehle | `infinityexpansion.*` |
| `/cc` / `/compressioncraft` | CompressionCraft-Befehle | — |
| `/te` / `/transcendence` | TranscEndence-Befehle | `te.command.*` |
| `/SmallSpace` | SmallSpace-Befehle | `SmallSpace.admin` |
| `/nps add` &lt;spieler&gt; | Spieler zur NoPhantomSleep-Liste hinzufügen | Admin |
| `/nps remove` &lt;spieler&gt; | Spieler wieder aus der Liste entfernen | Admin |

## Derzeit nicht freigegebene Befehle

Die folgenden Befehle gibt es auf dem Server, **sind für Spieler aber nicht freigegeben** – wenn du sie jemanden nutzen siehst, wunder dich nicht:

| Befehl | Funktion |
|---|---|
| `/tp` | Direkte Teleportation, für Spieler nicht freigegeben (bitte `/tpa` verwenden) |
| `/warp` / `/setwarp` | Teleportpunkt-System, derzeit gibt es keinen Teleportpunkt und es ist nicht freigegeben |
| `/kit` | Kit-System, derzeit ist kein Kit konfiguriert |
| `/heal` / `/feed` | Heilung und Sättigung, nicht freigegeben |
| `/fly` / `/effect` / `/enchant` / `/give` / `/gamerule` | Kreativ- und Cheat-Befehle, nicht freigegeben |
| `/nick` | Nickname ändern, nicht freigegeben |
| `/rankup` | Rangsystem, derzeit deaktiviert |
| `/tpaccept` / `/tpdeny` | Berechtigung ist erteilt, die Aliase sind aber weiterhin deaktiviert; nimm zum Annehmen oder Ablehnen direkt die Buttons von `/tpa` |

## Berechtigungen

- Die Berechtigungen werden zentral über **LuckPerms** verwaltet; derzeit gibt es auf dem Server nur die Gruppe `default` mit 30 `cmi.command.*`-Befehlsberechtigungen sowie Chunk-Abfrage (`coreprotect.inspect`) und Serverstatus-Abfrage.
- **`/residence.group.Default` und `/residence.group.Event` stehen für zwei verschiedene Grundstückskontingente**: Standardgruppe 8, Event-Gruppe 12.
- Die Flags im Grundstück (Bauen, Zerstören, Container öffnen, PvP, Explosionen usw.) werden **vom Grundstückseigentümer selbst gesetzt** – das ist ein von den Befehlsberechtigungen unabhängiges System.
- Bei einer Sperre oder Stummschaltung sind die Verwaltungsbefehle nicht verfügbar.

## Schnellcheck der häufigsten Fragen
- **Der Befehl reagiert nicht?** Prüfe zuerst die Schreibweise; bei `/tpa` muss die andere Person online sein, und die Anfrage ist 60 Sekunden lang gültig.
- **Du kommst an ein certain Item nicht ran?** Manche Bereiche sind durch Grundstücks-Flags geschützt (Container, Zerstören, Interaktion) – der Eigentümer muss dir die Rechte geben.
- **Du willst wissen, wie ein Item gebaut wird?** Nutze `/sfcalc calc` &lt;gegenstand&gt; – das ist deutlich schneller, als Rezepte einzeln durchzugehen.
