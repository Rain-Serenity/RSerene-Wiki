---
author: Chosen_1st
---
# 명령어 목록
::: tip 팁
CirnoArk 서버는 Chosen_1st가 운영합니다.
:::

## 일반 플레이어가 사용할 수 있는 명령어

아래 명령어는 모든 플레이어에게 열려 있어 바로 쓸 수 있습니다.

### 텔레포트와 위치
| 명령어 | 설명 |
|---|---|
| `/back` | 마지막으로 떠난 위치로 돌아가기 |
| `/dback` | 마지막으로 죽은 위치로 돌아가기 |
| `/home` | 자기 집으로 텔레포트 |
| `/homes` | 자신의 모든 집 목록 보기 |
| `/sethome <이름>` | 현재 위치에 집을 하나 설정(기본 이름은 Home) |
| `/removehome <이름>` | 집 하나 삭제 |
| `/spawn` | 주도시 / 스폰 지점으로 돌아가기 |
| `/tpa <플레이어>` | 상대를 텔레포트해 달라고 요청(요청은 60초 안에 유효, 3초 카운트다운) |
| `/tpahere <플레이어>` | 상대에게 나로 텔레포트해 달라고 요청 |
| `/tpaccept` | 텔레포트 요청 수락 |
| `/tpdeny` | 텔레포트 요청 거절 |
| `/rtp` | 무작위 텔레포트(쿨타임 10분, 주세계 3200 ~ 32000블록 범위) |

### 화폐와 상점
| 명령어 | 설명 |
|---|---|
| `/balance` | 내 잔액 보기 |
| `/money` | 내 잔액 보기 |
| `/pay <플레이어> <금액>` | 다른 플레이어에게 송금(수수료 3%) |
| `/baltop` | 부자 순위 보기 |
| `/sell` | 가방의 아이템 판매(가격표로 환산) |
| `/worth` | 손에 든 아이템의 가치 조회 |
| `/worthlist` | 전체 아이템 가격표 열기 |

### 채팅과 정보
| 명령어 | 설명 |
|---|---|
| `/msg <플레이어> <내용>` | 다른 플레이어에게 개인 메시지 |
| `/ping` | 내 지연 시간 보기 |
| `/playtime` | 내 접속 시간 보기 |
| `/playtimetop` | 접속 시간 순위 보기 |
| `/shout <내용>` | 외치기, 서버 전체에 표시(쿨타임 3초) |

**채팅 팁**:
- `@플레이어명` —— 특정 플레이어를 멘션(쿨타임 30초).
- `@all` —— 전체 멤버 부르기(쿨타임 5분, 추가 권한 필요).
- `[inv]` —— 채팅에서 자기 가방을 보여주기.
- `[ender]` —— 채팅에서 자기 에더 상자를 보여주기.
- `[item]` —— 채팅에서 손에 든 물건을 보여주기.

### 슬라임 기술과 플레이
| 명령어 | 설명 |
|---|---|
| `/sf` | 슬라임 기술 메인 명령어. 가이드, 레시피 조회, 연구 진행도 등의 하위 명령어를 포함 |
| `/sf guide` | 초보 가이드 열기(첫 입장 시 자동으로 한 부가 지급됩니다) |
| `/sfcalc calc <아이템> [수량]` | 레시피 계산기: 어떤 아이템(또는 N개)을 만드는 데 필요한 재료 계산 |
| `/sfcalc calc <아이템> [수량]` | 약칭 `/sfc calc <아이템> [수량]`으로도 사용 가능 |

::: tip 팁
`/sfcalc`는 레시피만 조회하고 재료를 소모하지 않으니, 산업 라인을 준비할 때 가장 편한 방법입니다.
:::

## 추가 권한이 필요한 명령어

| 명령어 | 설명 | 권한 노드 |
|---|---|---|
| `/res` | 영토 관리(생성, 설정, 삭제) | `residence.create` 등 |
| `/res padd <플레이어> <플래그>` | 플레이어에게 영토 권한 부여 | 영토 주인 |
| `/rc` | 영토 채널 | 현재 꺼져 있음 |
| `/cmi` | CMI 관리 총 명령어 | `cmi.command` |
| `/cmi money give/take/set <플레이어> <금액>` | 플레이어 잔액 조정 | `cmi.command.money`(관리자) |
| `/cmi setworth <아이템> <가격>` | 아이템 판매 가격 수정 | `cmi.command.setworth` |
| `/cmi tp <플레이어> <좌표>` | 즉시 텔레포트 | `cmi.command.tp` |
| `/cmi afk auto` | 자리비움 | `cmi.command.afk.auto` |
| `/lp` | 권한 그룹 관리 | `luckperms.*`(관리자) |
| `/co` / `/core` / `/coreprotect` | 청크 롤백과 조회 | `coreprotect.*`(관리자) |
| `/grim` | 안티치트 기록과 예외 처리 | `grim.*`(관리자) |
| `/ban` `/tempban` `/ipban` | 밴 | `litebans.ban` / `litebans.tempban` / `litebans.ipban` |
| `/mute` `/tempmute` | 채팅 금지 | `litebans.mute` / `litebans.tempmute` |
| `/warn` `/unwarn` | 경고 | `litebans.warn` / `litebans.unwarn` |
| `/kick` | 플레이어 추방 | `litebans.kick` |
| `/unban` `/unmute` | 밴 해제 / 채팅 금지 해제 | `litebans.unban` / `litebans.unmute` |
| `/mctop` | 스킬 순위 | `mcmmo.commands.mctop` |
| `/mcrank <플레이어>` | 플레이어 스킬 순위 조회 | `mcmmo.commands.mcrank` |
| `/mmoinfo` | 스킬 설명 | `mcmmo.commands.mmoinfo` |
| `/xprate` | 경험치 배율 조회 또는 조정 | `mcmmo.commands.xprate` |
| `/claytech` | ClayTech 명령어 | `claytech.basic` |
| `/ie` / `/ix` / `/infinityexpansion` | 무한 확장 명령어 | `infinityexpansion.*` |
| `/cc` / `/compressioncraft` | 압축 명령어 | — |
| `/te` / `/transcendence` | 엔드 전설 명령어 | `te.command.*` |
| `/SmallSpace` | 작은 공간 명령어 | `SmallSpace.admin` |
| `/nps add <플레이어>` | 플레이어를 "幻夜不扰梦"(NoPhantomSleep) 명단에 추가 | 관리자 |
| `/nps remove <플레이어>` | 플레이어를 명단에서 제거 | 관리자 |

## 현재 열려 있지 않은 명령어

아래 명령어는 서버에 **존재하지만 플레이어는 쓸 수 없습니다.** 다른 사람이 쓰는 걸 봐도 이상하게 생각하지 마세요:

| 명령어 | 설명 |
|---|---|
| `/tp` | 즉시 텔레포트, 플레이어에게는 열려 있지 않음(`/tpa`를 사용하세요) |
| `/warp`, `/setwarp` | 워프 시스템, 현재 워프가 하나도 없고 열려 있지 않음 |
| `/kit` | 키트 시스템, 현재 설정된 키트가 없음 |
| `/heal`, `/feed` | 회복과 포만감, 열려 있지 않음 |
| `/fly`, `/effect`, `/enchant`, `/give`, `/gamerule` | 창작·치트 계열 명령어, 열려 있지 않음 |
| `/nick` | 닉네임 변경, 열려 있지 않음 |
| `/rankup` | 랭크 시스템, 현재 꺼져 있음 |
| `/tpaccept`, `/tpdeny` | 권한은 부여되어 있지만 별칭은 아직 꺼진 상태. `/tpa`의 버튼으로 직접 수락하거나 거절하세요 |

## 권한 설명

- 권한은 **LuckPerms**에서 일괄 관리하며, 현재 서버에는 `default` 그룹 하나만 있고 그 안에 `cmi.command.*` 명령어 권한 30개와 청크 조회(`coreprotect.inspect`), 서버 상태 조회가 들어 있습니다.
- **`/residence.group.Default`와 `/residence.group.Event`는 서로 다른 두 가지 영토 할당량에 대응합니다**: 기본 그룹 8개, 이벤트 그룹 12개.
- 영토 안의 플래그(건설, 파괴, 상자 개봉, PVP, 폭발 가능 여부 등)는 **영토 주인이 직접 설정**하며, 명령어 권한과는 별개의 독립적인 시스템입니다.
- 밴되었거나 채팅이 금지된 상태에서는 관리 계열 명령어를 쓸 수 없습니다.

## 자주 묻는 질문 요약
- **명령어가 먹통인데?** 먼저 철자를 확인하세요. `/tpa`는 상대가 온라인이어야 하고, 요청은 60초 안에 유효합니다.
- **어떤 아이템을 받지 못하거나 쓸 수 없는데?** 일부 아이템은 영토 플래그로 보호됩니다(컨테이너, 파괴, 상호작용). 영토 주인이 권한을 줘야 합니다.
- **어떤 물건을 어떻게 만드는지 보고 싶다면?** `/sfcalc calc <아이템>`을 쓰세요. 레시피를 하나씩 뒤지는 것보다 훨씬 빠릅니다.
