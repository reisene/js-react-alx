# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased] - yyyy-mm-dd

Here we write upgrading notes for brands. It's a team effort to make them as straightforward as possible.

### Added

### Changed

### Fixed

- Naprawić walidację pól typu radio (`stanowisko`) i checkbox (`technologie`) w funkcji `validate()`, aby prawidłowo sprawdzały stan wewnątrz obiektu `Map` i wyświetlały komunikaty o błędach.

## [1.1.0] - 2026-06-26

### Dodane

- Wprowadzono domyślne inicjalizowanie kluczy `'technologie'` (jako pusta tablica `[]`) oraz `'stanowisko'` (jako pusty ciąg `''`) w mapie danych, przygotowując strukturę pod poprawną walidację.

### Zmienione

- Zastąpiono tradycyjne zmienne globalne strukturą **`Map` (kolekcja klucz-wartość)** w celu centralizacji przechowywania danych z formularza (`dane = new Map()`).
- Zrefaktoryzowano pętle pobierające dane z checkboxów – wybrane języki są teraz dynamicznie dodawane bezpośrednio do tablicy osadzonej wewnątrz struktury `Map` za pomocą metody `dane.get('technologie').push()`.
- Zoptymalizowano sekcję wypisywania danych do podsumowania HTML: zastąpiono powtarzalne instrukcje `document.querySelector` jedną pętlą `for...of` iterującą po kluczach Mapy (`dane.keys()`).
- Wprowadzono instrukcję warunkową wewnątrz pętli wypisującej, która automatycznie wykrywa klucz `'technologie'` i formatuje tablicę do tekstu przy użyciu `.join(', ')`.
- Zmodyfikowano funkcję `validate()` tak, aby jej główna pętla sprawdzała klucze i wartości bezpośrednio z obiektu `Map` (`dane.get(x)`).

### Naprawione

- Usunięto błąd zduplikowanego (podwójnego) wywoływania funkcji `validate()` wewnątrz zdarzenia `onclick`, który powodował natychmiastowe czyszczenie i znikanie komunikatów o błędach ze strony.

## [1.0.0] - 2026-06-25

### Dodane

- Wprowadzono funkcję walidacji `validate()` uruchamianą po kliknięciu przycisku "Wyślij", sprawdzającą poprawność wypełnienia wymaganych pól formularza.
- Dodano mechanizm wyświetlania komunikatu "Błąd" wewnątrz dedykowanych elementów `<span>` o identyfikatorach `error_{element}` w przypadku niewypełnienia wymaganych danych.
- Dodano zmienną flagową (`let ok = true`) oraz tablicę `dane` wewnątrz funkcji walidującej, służące do zbierania błędów i warunkowego blokowania zapisu danych.
- Wprowadzono pętlę `for...of` iterującą po tablicy `dane`, która dynamicznie wstrzykuje tekst błędu do odpowiednich selektorów za pomocą `.innerHTML`.
- Dodano warunek sprawdzający wynik funkcji `validate()` przed wpisaniem danych z formularza do sekcji podsumowania (`<td class='podsumowanie'>`) – dane pojawiają się tam tylko wtedy, gdy funkcja zwróci `true`.

### Zmienione

- Przeniesiono (zrefaktoryzowano) deklaracje zmiennych wyciągających elementy formularza poza główną funkcję obsługi zdarzenia `onclick` (na początek dokumentu), aby uzyskać zasięg globalny i poprawić czytelność kodu.
- Pozostawiono przypisywanie wartości do zmiennych (`imię`, `nazwisko`, `miasto`) wewnątrz zdarzenia kliknięcia, zapobiegając problemowi pobierania pustych stringów przy starcie aplikacji.
- Zaimplementowano reguły walidacji dla poszczególnych komponentów:
    - **Imię i nazwisko:** użycie metody `.trim()` w celu eliminacji samych białych znaków (spacji, tabulacji).
    - **Miasto (select):** sprawdzenie wartości pod kątem pustego ciągu znaków (`value = ""`), pomijając metodę `.trim()`.
    - **Znajomość technologii (checkbox):** weryfikacja długości tablicy (`.length`), sprawdzająca czy użytkownik wybrał przynajmniej jedną opcję.
    - **Stanowisko (radio):** sprawdzenie warunku na pusty string oraz `undefined`, co eliminuje domyślne zachowanie przeglądarki w przypadku braku zaznaczenia.

### Naprawiono
