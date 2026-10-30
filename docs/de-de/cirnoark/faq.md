---
author: Chosen_1st
---
# Häufig gestellte Fragen
::: tip Hinweis
Der CirnoArk-Server wird von Chosen_1st betrieben.
:::
::: tip Hinweis
Weitere Fragen sind jederzeit willkommen, melde sie uns gerne!
:::

## I. Anmeldung & Beitritt
### F1: Brauche ich einen Premium-Account?
A: Nein. Auf dem Server ist **keine Premium-Verifizierung aktiviert**, Offline-Accounts können also direkt beitreten.

### F2: Wie komme ich auf den Server?
A: Füge den Server unter „Mehrspieler → Server hinzufügen" mit der Adresse `CirnoArk.RSerene.com` hinzu; alternativ wählst du in der Serverliste des RSerene-Masters „**CirnoArk**" aus (im Master steht der englische Name `CirnoArk`).

### F3: Welche Spielversionen werden unterstützt?
A: Der Server selbst läuft auf **26.3** hinter einem Velocity-Proxy und ist dank der Cross-Version-Plugins zusammen mit dem Proxy mit Clients von **1.7.2 ~ 26.3** kompatibel. Zu alte Clients werden abgewiesen – bitte upgrade auf eine nutzbare Version.

### F4: Kostet das Geld?
A: Nein, das Spielen ist komplett kostenlos (Spenden sind völlig freiwillig, nie verpflichtend).

### F5: Was mache ich bei meinem ersten Betreten?
A: Beim Betreten erhältst du automatisch einen **Slimefun-Einsteigerguide**, der die Originalrezepte und die Industrieprozesse enthält; du kannst ihn jederzeit mit `Esc` aufrufen. Als Neuling solltest du zuerst deine Forschungsstufen nach dem Guide abarbeiten und dann die Industrie Schritt für Schritt aufbauen.

### F6: Ist so ein Industrial-Server am Anfang sehr grindig?
A: Am Anfang ist es langsam, aber der Server bietet zwei Beschleuniger: Erstens **kosten Forschungsstufen nichts**, du gehst sie Schritt für Schritt über die Rezepte durch; zweitens gibt es den eingebauten **Rezeptrechner** `/sfcalc calc` &lt;gegenstand&gt; – rechne vor einer Fertigungslinie einmal die Materialien durch und spare dir das ewige Nachschlagen und Zählen.

## II. Gameplay & Mechaniken
### F1: Wie markiere ich mein Grundstück?
A: Markiere mit der **Holzhacke** zwei gegenüberliegende Eckblöcke und tippe dann `/res create` &lt;grundstuecksname&gt;. Standard sind **8 Grundstücke** pro Spieler, während Events sind es 12; ein Grundstück ist maximal **512 × 512 × 256** groß (Y von -64 ~ 320); jedes Grundstück lässt sich in 2 Bereiche teilen, Teilbereiche sind maximal 3 Ebenen tief verschachtelt.

### F2: Können sich meine Grundstücke berühren?
A: Nein. **Zwischen allen Grundstücken müssen mindestens 8 Blöcke Abstand bleiben** (zwischen den eigenen Grundstücken desselben Spielers gilt das nicht), damit nicht alles zu einem einzigen großen Block verschmilzt.

### F3: Kann man in meinem Grundstück kämpfen? Wird es gesprengt?
A: Die Grundeinstellungen sind hier gegen das intuitive Gefühl – bitte beachten: **In Grundstücken ist PvP standardmäßig verboten, Explosionen sind aber standardmäßig erlaubt**. Der Eigentümer schaltet Bauen, Zerstören, Container, Interaktion, PvP, Explosion, TNT usw. einzeln über die Flags um.

### F4: Kann mein Freund in meinem Grundstück kämpfen, wenn ich ihm Rechte gebe?
A: Nein. **Vertrauen (`/res padd`) gibt nur Rechte wie Bauen, Zerstören, Container und Interaktion, aber keine PvP-, Explosions- oder TNT-Rechte**. Wenn dein Freund mitbauen soll, gib ihm einfach „Vertrauen" und schalte kein PvP frei.

### F5: Wie komme ich zum Mond oder zum Mars?
A: Über das Raketensystem von **ClayTech**. Der Ablauf: Rakete herstellen → Rakete in der Hand halten und starten (10 Sekunden Countdown; solange der Countdown läuft, bricht ein Item-Wechsel in der Hand ab) → Zielplanet erreichen. **Zieh den Raumanzug vollständig an**, um auf dem Planeten aktiv zu sein; er hat drei Anzeigen – Treibstoff, Sauerstoff und Schutzstufe – und bei zu wenig Sauerstoff kannst du dich nicht einmal bewegen. Weltraumreisen brauchen **keinerlei Berechtigung**, das kann jeder Spieler.

### F6: Kann ich auf jedem Planeten eine Basis bauen?
A: Ja. Nach dem Setzen einer Basis auf einem Planeten bekommst du einen eigenen **Planetenbasis-Marker**; abbauen kannst du nur deine eigene Basis. Im Weltraum **funktioniert kein Teleport**, und dorthin teleportiert werden kannst du ebenfalls nicht.

### F7: Wie finde ich heraus, wie etwas gebaut wird?
A: Drei Wege – im Spiel mit `/sf guide` in den Guide; über den Hauptbefehl `/sf` für Rezepte und Forschungsfortschritt; und mit `/sfcalc calc` &lt;gegenstand&gt; [&lt;anzahl&gt;] direkt die Materialien berechnen (auch gekürzt `/sfc calc` &lt;gegenstand&gt;).

### F8: Wie steige ich in den Forschungsstufen auf?
A: Slimefun kennt **38 Forschungsstufen**, von 小鸡、牛牛君、蜘蛛、村民、开拓者 über 童生、学生、学徒、魔术师、巫师 bis hin zu 大师 und 天选之子. Forschung **kostet nichts**, nach dem Freischalten eines Rezepts geht es weiter.

### F9: Wie trainiere ich Skills und wie hoch ist das Limit?
A: Auf dem Server läuft mcMMO mit insgesamt **19 Skills** (Acrobatics, Alchemy, Archery, Axe, Digging, Fishing, Herbalism, Mining, Repair, Disassembling, Smelting, Sword, Taming, Unarmed, Woodcutting, Crossbow, Trident, Mace, Spear), das Levelmaximum liegt bei **1000 Level**. Skill-Level-Ups werden im Chat angekündigt.

### F10: Verliere ich im Tod Skill-Level?
A: **Nein.** Der Hardcore-Modus mit Levelverlust und Lifeleech-Strafe ist abgeschaltet – du kannst also gefahrlos und mutig Abenteuer erleben.

### F11: Kann man sich in einer Gruppe zusammen leveln?
A: Ja. Die Gruppengröße ist **nicht begrenzt**, Erfahrung wird im Umkreis von **75 Blöcken** geteilt; die Gruppenfunktionen werden nach Level freigeschaltet: Chat 1, Teleport 2, Bündnis 5, Item-Teilen 8, Erfahrungsteilung 10.

### F12: Wie verdiene ich Geld? Wie verkaufe ich Items?
A: Verkaufe Items aus deinem Inventar mit `/sell` (Umrechnung nach der Preistabelle); `/worth` zeigt den Wert des Items in deiner Hand, `/worthlist` die komplette Preistabelle. Zwischen Spielern überweist du Geld mit `/pay` &lt;spieler&gt; &lt;betrag&gt;, **Gebühr 3 %**, die der Zahlende zusätzlich trägt. Neue Spieler starten mit **￥100**.

### F13: Wie praktisch ist AFK?
A: Wer **10 Minuten** nichts bewegt, wird automatisch AFK (Berechtigung `cmi.command.afk.auto`). Sobald aber **mehr als 35 Spieler** online sind, wirst du nach **5 Minuten** AFK wieder vom Server gekickt – so bleibt der Server aktiv.

### F14: Startet der Server neu? Geht dabei etwas verloren?
A: Der Server **startet alle 72 Stunden planmäßig neu** (vorher läuft im Spiel ein Countdown), **stündlich werden die Drops auf dem Boden automatisch entfernt**. Grundstücke und Items werden von CoreProtect protokolliert und lassen sich zurückrollen.

### F15: Mein Grundstück wurde versehentlich gesprengt oder bestohlen – was nun?
A: Mit CoreProtect kannst du zurückrollen; der Server speichert **7 Tage** lang Block- und Container-Protokolle (auch das Nehmen und Platzieren in Kisten, Öfen usw.). Melde dir bei Auffälligkeiten so schnell wie möglich bei einem Admin – **nach 7 Tagen ist kein Zurückrollen mehr möglich**.

### F16: Gibt es auf dem Server einen Anticheat?
A: Ja. Auf dem Server läuft GrimAC als Anticheat mit Checks für Bewegungssimulation, Knockback, Reach, AutoClick, NoFall, Baritone und mehr; bei Verstößen wirst du direkt gekickt. **Benutze keine Mods, Hacks oder Flug-Hacks**, auch nicht Speed-, Auto-Attack- oder Auto-Fishing-Skripte.

### F17: Wie hoch lassen sich Verzauberungen stacken?
A: Der Server begrenzt die Verzauberungsstufen. Üblich sind: Effizienz 5, Schaden 5, Schutz 4, Silent Mining 1, Glück 3, Mending 1, Unendlich 1, Feuer 2, Schärfe 5, Geisterkiller 5, Spinnenkiller 5. Verzauberungen über dem Limit lassen sich nicht herstellen.

### F18: Kann man die Endertruhen der anderen Spieler sehen?
A: Endertruhen sind privat. Mit `[inv]`, `[ender]` und `[item]` im Chat kannst du dein Inventar, deine Endertruhe oder das Item in deiner Hand **freiwillig zeigen**.

## III. Regeln & Verwaltung
### F1: Welche Regeln gelten auf dem Server?
A: Spieler müssen die folgenden 14 Punkte beachten:

1. Keine Zerstörung fremder Bauten (No Griefing)
2. Kein Spam (No Spamming)
3. Keine Werbung (No Advertising)
4. Keine Beleidigungen, kein anhaltendes Fluchen (No Cursing)
5. Kein Trollen, keine Belästigung von Spielern (No Trolling / Flaming)
6. Keine gesperrten Items benutzen (No Banned Items)
7. Nicht nach OP, Rängen oder Items fragen (No Asking for OP, Ranks, or Items)
8. Alle Spieler respektieren (Respect all Players)
9. Dem Personal gehorchen (Obey Staff)
10. Keine rassistischen oder sexistischen Äußerungen
11. Keine Mods und keine Hacks (No Mods / Hacks)
12. Keine Nachrichten komplett in Großbuchstaben (No Full Caps Messages)
13. Keine Bauten nahe am Spawnpunkt (No Builds Near Spawn)
14. Keine 1×1-Mobfarmen (No 1x1 Towers)

Die vollständigen Bestimmungen stehen in den [Serverregeln](/de-de/about/rules.html). Bei Regelverstößen drohen Verwarnung, Mute, temporärer oder permanenter Bann.

### F2: Was passiert, wenn ich gebannt oder gemutet werde?
A: Bans und Mutes setzt LiteBans um, und das Ganze unterstützt **verknüpfte Alts** – wird ein neuer Account registriert, der mit einem gebannten Account zusammenhängt, wird dieser ebenfalls gebannt. Auf der Ban-Seite steht ein Hinweis, in der QQ-Gruppe einen Admin zu kontaktieren.

### F3: Kann ich im Mute noch per Befehl kommunizieren?
A: Nein. Während eines Mutes sind Chatbefehle wie `/me`, `/tell`, `/msg` und `/reply` wirkungslos.

### F4: Gibt es Einschränkungen im Chat?
A: **2 Sekunden Sprechkühlzeit**, eine Nachricht darf **höchstens 100 Zeichen** lang sein. `/shout` hat 3 Sekunden Abklingzeit; `@jemand` 30 Sekunden; `@all` 5 Minuten und benötigt zusätzliche Berechtigung.

## IV. Urheberrecht & Community
### F1: Darf ich die Plugins des Servers eigenmächtig verbreiten oder verkaufen?
A: Nein. Dieser Server erhebt von Spielern keinerlei Gebühren und verbreitet keine Plugins oder Modpacks gegen Entgelt; die Inhalte dienen nur dem normalen Spiel der Spieler dieses Servers.

### F2: Wo melde ich Probleme?
A: Frage einen online Admin im Spiel oder tritt der offiziellen QQ-Gruppe **902620497** bei und schreibe dort @Chosen_1st. Website: www.RSerene.com.
