# Changelog

Wszystkie istotne zmiany w tym projekcie są dokumentowane w tym pliku.

Format oparty na [Keep a Changelog](https://keepachangelog.com/pl/1.1.0/), projekt stosuje [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Naprawione
- Dodano brakujący atrybut `lang="pl"` do elementu `<html>` w `index.html` — poprawa dostępności i walidacji HTML.
- Naprawiono rozjeżdżający się widok listy w `readme.md` po bloku kodu w sekcji [1.0] pkt 2.1.4 — dodano puste linie wokół bloku ` ```js ` zgodnie z wymaganiami Markdown.

## [2.0.0] - 2026-06-26

### Dodane
- Nowy system inicjalizacji danych formularza oparty na domyślnych wartościach (pusta tablica dla checkboxów, pusty string dla radio), wstrzykiwanych bezpośrednio do mapy przed walidacją.
- Mechanizm bezpiecznego omijania nieobowiązkowych pól (instrukcja `continue` dla `uwagi`) w głównej pętli walidującej, zabezpieczający skrypt przed przerwaniem działania na pustych wartościach.

### Zmienione
- **[ZMIANA ŁAMIĄCA KOMPATYBILNOŚĆ]** Całkowita zmiana architektury przechowywania danych. Usunięto rozproszone zmienne globalne na rzecz scentralizowanej struktury **`Map` (kolekcja klucz-wartość)** (`dane = new Map()`). Zmienia to całkowicie sposób dostępu do danych w całej aplikacji.
- Przebudowano mechanizm zbierania informacji z list wielokrotnego i jednokrotnego wyboru. Zamiast operować na zewnętrznych tablicach, wartości są wstrzykiwane bezpośrednio do struktury nowej mapy danych (`dane.get('technologie').push()`).
- Całkowity refaktor logiki walidacji (`validate()`). Zastąpiono kaskadę sztywnych warunków dla każdej zmiennej dynamiczną pętlą sprawdzającą klucze w locie (`dane.get(x)`), co pozwala na automatyczne i bezbłędne skalowanie formularza o nowe pola w przyszłości.
- Zoptymalizowano sekcję renderowania podsumowania (HTML): kaskada zapytań `document.querySelector` została zastąpiona jedną zwięzłą pętlą `for...of` iterującą po kluczach Mapy (`dane.keys()`), z automatycznym formatowaniem tablic do tekstu przy użyciu `.join(', ')`.

### Naprawione
- Naprawiono błąd luki logicznej, przez który walidacja całkowicie ignorowała puste stany dla pól typu radio (`stanowisko`) i checkbox (`technologie`) – komunikaty błędów poprawnie się wyświetlają.
- Przywrócono brakującą instrukcję `return false;` na końcu głównej pętli walidującej, co ostatecznie zablokowało niepożądane wysyłanie niekompletnych danych z formularza do tabeli.

## [1.1.0] - 2026-06-26

### Naprawione
- Usunięto błąd zduplikowanego (podwójnego) wywoływania funkcji `validate()` wewnątrz zdarzenia `onclick`, który powodował natychmiastowe czyszczenie i znikanie komunikatów o błędach ze strony.

## [1.0.0] - 2026-06-25

### Dodane
- Wprowadzono funkcję walidacji `validate()` uruchamianą po kliknięciu przycisku „Wyślij”, sprawdzającą poprawność wypełnienia wymaganych pól formularza.
- Dodano mechanizm wyświetlania komunikatu „Błąd” wewnątrz dedykowanych elementów `<span>` o identyfikatorach `error_{element}` w przypadku niewypłnienia wymaganych danych.
- Dodano zmienną flagową (`let ok = true`) oraz tablicę `dane` wewnątrz funkcji walidującej, służące do zbierania błędów i warunkowego blokowania zapisu danych.
- Wprowadzono pętlę `for...of` iterującą po tablicy `dane`, która dynamicznie wstrzykuje tekst błędu do odpowiednich selektorów za pomocą schematu `span#error_${x}`.
- Dodano warunek blokujący wyświetlanie danych podsumowania w przypadku nieprześcia walidacji (`if (validate() === true)`).
