# Changelog

Wszystkie istotne zmiany w tym projekcie są dokumentowane w tym pliku.

Format oparty na [Keep a Changelog](https://keepachangelog.com/pl/1.1.0/).

---

## [Unreleased]

### Added
- Szablony issues (`.github/ISSUE_TEMPLATE`) — [#3](https://github.com/reisene/js-react-alx/pull/3)
- Plik `51_2/style.css` — style przeniesione z bloku inline w `index.html`
- Pliki `readme.md` w folderach: `59_2`, `59_2a`, `26_5a`, `27`, `51_2`, `67_1`

### Fixed
- Poprawiono literówkę: `safari` → `Safari` w sekcjach Desktop i Smartphone szablonu `bug_report.md` [`ee4185c`](https://github.com/reisene/js-react-alx/commit/ee4185c6a9d9fb3ff1e25dc2d417552ca069b615)
- Ustawiono domyślne etykiety: `bug` w `bug_report.md`, `enhancement` w `feature_request.md` [`ee4185c`](https://github.com/reisene/js-react-alx/commit/ee4185c6a9d9fb3ff1e25dc2d417552ca069b615)
- `59_2/script.js`, `59_2a/script.js` — wyniki quizu wyświetlane na stronie zamiast tylko w konsoli; quiz uruchamiany przyciskiem (nie przy załadowaniu strony)
- `26_5a/script.js` — poprawiono wielkość liter w komunikatach `alert` po `Błąd!`
- `27/script.js` — poprawiono literówkę `poprwnych` → `poprawnych`
- `51_2/index.html` — usunięto style inline z `<head>`, dodano `<link>` do zewnętrznego `style.css`
- `67_1/index.html` — dodano brakujący atrybut `lang="pl"` do `<html>`
- `67_1/readme.md` — naprawiono rozjeżdżający się widok listy po bloku kodu w sekcji [1.0] pkt 2.1.4

### Changed
- Zaktualizowano opisy zadań w głównym `README.md` (zadania: `59_2`, `59_2a`, `26_5a`, `27`, `51_2`, `67_1`)
- Zaktualizowano `readme.md` w folderach `59_2`, `59_2a`, `26_5a`, `27`, `51_2` — poprawki treści i dodanie opisu zmian funkcjonalnych

---

## [0.3.0] — 2026-06-26

### Added
- Zadanie `./27` [`4307a31`](https://github.com/reisene/js-react-alx/commit/4307a3156183b4eaa6c691462f9266a2b0e5ce68)
- Zadanie `./22` [`ab8091d`](https://github.com/reisene/js-react-alx/commit/ab8091d25afed74b6af6c970b17c6cd1a0c6f84f)
- Kolejne zadania (commit zbiorczy) [`a940063`](https://github.com/reisene/js-react-alx/commit/a94006312a09c31c701ad51fb61cd30496306ec0)
- Zadanie `19_3` [`2f5fb3a`](https://github.com/reisene/js-react-alx/commit/2f5fb3a6ad7755770f0ae8ece99eac4d21e365ee)
- Zadanie `./15_2` [`0bc7397`](https://github.com/reisene/js-react-alx/commit/0bc7397998ae43313985a0ef9bcd0f4a0881a53c)

### Fixed
- Poprawiono niektóre zadania (x3) [`fdfa953`](https://github.com/reisene/js-react-alx/commit/fdfa953f5af341a9ec9b868ce4a0cb1b94767ec4) [`f63f036`](https://github.com/reisene/js-react-alx/commit/f63f036005496bed73cab7e1d1326e96ecb59152) [`cf2da14`](https://github.com/reisene/js-react-alx/commit/cf2da144ed60e5c38ea7336d8f653ca81702c196)
- Poprawiono niezgodności w zadaniu `19_3` [`8bbeedc`](https://github.com/reisene/js-react-alx/commit/8bbeedce40e621644c0d3ec51004ead4b44a2634)

---

## [0.2.0] — 2026-06-26

### Added
- Header z przyciskiem powrotu na stronę główną we wszystkich plikach `index.html` [`2693feb`](https://github.com/reisene/js-react-alx/commit/2693febb04f0a5c2bfba5390fbd1087401fa9370)
  - Dodanie stylowania headera
  - Naprawa pliku `.editorconfig`
- Zadanie `51_2` (`./51_2/`) [`10d13fd`](https://github.com/reisene/js-react-alx/commit/10d13fd96a22e99113e4bcf78deb7c939da4bb72)
  - Zmiana nazwy `./67_1/67_1.html` → `./67_1/index.html` (poprawne wyświetlanie w GitHub Pages)
  - Dodanie `.editorconfig`
  - Dodanie `.vscode/extensions.json` z rekomendowanymi rozszerzeniami
  - Aktualizacja `README.md`

Scalony przez PR [#1](https://github.com/reisene/js-react-alx/pull/1) i PR [#2](https://github.com/reisene/js-react-alx/pull/2).

---

## [0.1.0] — 2026-06-25

### Added
- Initial commit — inicjalizacja repozytorium [`a18834d`](https://github.com/reisene/js-react-alx/commit/a18834d29fd23ac7de7b2fab574275e74e836f18)

### Refactored
- Formularz: migracja na przechowywanie danych oparte na `Map`, optymalizacja walidacji [`353b49b`](https://github.com/reisene/js-react-alx/commit/353b49be3075bd5cbb3c598a29a249415c1874fc)
  - Zastąpienie zmiennych globalnych centralnym obiektem `Map`
  - Refaktoryzacja logiki walidacji z dynamiczną iteracją po kluczach
  - Dynamiczne renderowanie podsumowania formularza
  - Naprawa walidacji checkbox/radio i usunięcie bugu z podwójnym wywołaniem
  - Wsparcie dla opcjonalnego pola `remarks`

---

*Wygenerowano na podstawie historii commitów — [reisene/js-react-alx](https://github.com/reisene/js-react-alx)*
