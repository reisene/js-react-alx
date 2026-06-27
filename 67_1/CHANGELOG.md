# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Naprawione
- Dodano brakujący atrybut `lang="pl"` do elementu `<html>` w `index.html` — poprawa dostępności i walidacji HTML.
- Naprawiono rozjeżdżający się widok listy w `readme.md` po bloku kodu w sekcji [1.0] pkt 2.1.4 — dodano puste linie wokół bloku ` ```js ` zgodnie z wymaganiami Markdown.

## [2.0.0] - 2026-06-26

### Dodane
- Nowy system inicjalizacji danych formularza oparty na domyślnych wartościach (pusta tablica dla checkboxów, pusty string dla radio), wstrzykiwanych bezpośrednio do mapy przed walidacją.
- Mechanizm bezpiecznego omijania nieobowiązkowych pól (instrukcja `continue` dla `uwagi`) w głównej pętli walidującej, zabezpieczający skrypt przed przerwaniem działania na pustych wartościach.

### Zmienione
- **[BREAKING CHANGE]** Całkowita zmiana architektury przechowywania danych. Usunięto rozproszone zmienne globalne na rzecz scentralizowanej struktury **`Map` (kolekcja klucz-wartość)** (`dane = new Map()`). Zmienia to całkowicie sposób dostępu do danych w całej aplikacji.
- Przebudowano mechanizm zbierania informacji z list wielokrotnego i jednokrotnego wyboru. Zamiast operować na zewnętrznych tablicach, wartości są wstrzykiwane bezpośrednio do struktury nowej mapy danych (`dane.get('technologie').push()`).
- Całkowity refaktor logiki walidacji (`validate()`). Zastąpiono kaskadę sztywnych warunków dla każdej zmiennej dynamiczną pętlą sprawdzającą klucze w locie (`dane.get(x)`), co pozwala na automatyczne i bezkbłędne skalowanie formularza o nowe pola w przyszłości.
- Zoptymalizowano sekcję renderowania podsumowania (HTML): kaskada zapytań `document.querySelector` została zastąpiona jedną zwięzłą pętlą `for...of` iterującą po kluczach Mapy (`dane.keys()`), z automatycznym formatowaniem tablic do tekstu przy użyciu `.join(', ')`.

### Naprawione
- Naprawiono błąd luki logicznej, przez który walidacja całkowicie ignorowała puste stany dla pól typu radio (`stanowisko`) i checkbox (`technologie`) – komunikaty błędów poprawnie się wyświetlają.
- Przywrócono brakującą instrukcję `return false;` na końcu głównej pętli walidującej, co ostatecznie zablokowało niepożądane wysyłanie niekompletnych danych z formularza do tabeli.

## [1.1.0] - 2026-06-26

### Naprawione
- Usunięto błąd zduplikowanego (podwójnego) wywoływania funkcji `validate()` wewnątrz zdarzenia `onclick`, który powodował natychmiastowe czyszczenie i znikanie komunikatów o błędach ze strony.

## [1.0.0] - 2026-06-25

### Dodane
- Wprowadzono funkcję walidacji `validate()` uruchamianą po kliknięciu przycisku "Wyślij", sprawdzającą poprawność wypełnienia wymaganych pól formularza.
- Dodano mechanizm wyświetlania komunikatu "Błąd" wewnątrz dedykowanych elementów `<span>` o identyfikatorach `error_{element}` w przypadku niewypłnienia wymaganych danych.
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
