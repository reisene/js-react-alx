---
title: 'Zadanie 67_1'
date: 2026-06-25
published: true
version: 2.0.0
---

# Zadanie 67_1

## Co było zrobione

Na lekcji (25.06) zrobiliśmy etap, gdzie dane z formularza po wciśnięciu przycisku "Wyślij" pojawiały się w części podsumowania(`<td class='podsumowanie'>`).

## Zadanie domowe

W formularzu dla wybranych pól jest dodane pole `<span class="error" id="error_{element}">`. Są to pola, które są wymagane do wypełnienia formularza.

Dla każdego z tych pól trzeba sprawić, by w `span` pojawił się napis `Błąd`, jeśli pola wymagane są puste.

## Wyjaśnienia

### [2.0] - Refaktoryzacja architektury na strukturę Map

W wersji 2.0 nastąpiła gruntowna zmiana sposobu zarządzania danymi w aplikacji, co pozwoliło na ujednolicenie walidacji i wyświetlania podsumowania.

1. **Struktura danych:** Zrezygnowałam z luźnych zmiennych na rzecz kolekcji `Map` (`let dane = new Map()`).
    1. Przed każdym odczytem czyszczę mapę (`dane.clear()`), a następnie wstrzykuję do niej aktualne wartości z formularza.
    2. Pola `checkbox` (technologie) i `radio` (stanowisko) są inicjalizowane domyślnie jako pusta tablica `[]` oraz pusty string `''`, co zabezpiecza przed błędami, gdy użytkownik nic nie zaznaczy.
2. **Logika walidacji (`validate()`):**
    1. Zastosowałam jedną, uniwersalną pętlę `for...of` iterującą bezpośrednio po kluczach mapy (`dane.keys()`).
    2. Dla pola `uwagi` dodałam instrukcję `continue`, która pomija to pole w procesie sprawdzania (jest nieobowiązkowe).
    3. Walidacja technologii sprawdza długość tablicy (`.length === 0`), a pozostałych pól – czy wartość jest pusta lub `undefined`.
    4. W przypadku błędu, odpowiedni klucz trafia do tablicy `noValid`, a po pętli do spanów (np. `error_technologia`) wstawiane jest słowo "Błąd".
    5. Funkcja zwraca `return false` w przypadku znalezienia błędów, co skutecznie blokuje wpisanie niepełnych danych do tabeli podsumowania.
3. **Optymalizacja renderowania:**
    1. Zamiast manualnie wpisywać dane do każdego pola w tabeli, używam pętli `for...of` iterującej po kluczach mapy.
    2. Pętla automatycznie wykrywa klucz `technologie` i formatuje tablicę do czytelnego ciągu znaków przy użyciu metody `.join(', ')`.
    3. Usunięto błąd "podwójnego wywołania", dzięki czemu komunikaty o błędach są stabilne i nie znikają natychmiast po wyświetleniu.

### [1.0]

1. Wcześniej wszystkie zmienne deklarowałam w pierwszej funkcji (`document.querySelector("input[type='button']").onclick = function ()`).
    1. Wpierw, dla czytelności i możliwości korzystania ze zmiennych w całym dokumencie, wyprowadziłam je z funkcji i dałam na początek kodu.
    2. Przypisywanie wartości do nich zostawiłam po kliknięciu przycisku - przypisywanie ich poza tym zostawia pusty string dla wartości `imię`, `nazwisko` oraz `miasto`.
2. Stworzyłam funkcję `validate` dla sprawdzania danych.
    1. Sposoby użyte do walidacji:
        1. Dla imienia i nazwiska użyłam funkcji `{element}.trim()`. Opcja `.trim()` powoduje usunięcie 'białych' znaków - spacji, tabulacji, etc. To powoduje, że jak użytkownik wprowadzi ciąg spacji, JS wyrzuci mu błąd - żeby poprawić dane pole.
        2. Dla miasta użyłam podobnego schematu, ale bez `.trim()` - jest to pole `select`, i pierwsza opcja jest oznaczona jako `value = ""`.
        3. Dla znajomości technologii użyłam opcji `.length`. Jest to input typu `checkbox`, które w zmiennej dodaję do tablicy, więc jeśli tablica jest pusta - użytkownik nie wybrał żadnej podanej opcji, co zwraca błąd.
        4. Dla stanowiska dałam opcję:

            ```js
            if (stanowisko === '' || stanowisko === undefined)
            ```

            Z tego względu, że `input type=radio` w przypadku, gdy nie jest wybrana żadna opcja, domyślnie wyrzuca `undefined`.

        5. Dla pola uwag nie dodawałam walidacji - jest to pole nieobowiązkowe.
    2. Jak sprawdzałam, czy są jakieś błędy:
        1. W funkcji użyłam zmiennej `dane`, którą stworzyłam jako tablicę.
        2. Dodałam zmienną flagową (`let ok = true`).
        3. Gdy funkcja sprawdziła za pomocą `if`, że zmienna jest pusta, zmieniała flagę na `false` i dodawała string do tablicy `dane`.
        4. Po tym funkcja sprawdza, czy flaga jest ustawiona na `false`:
            1. Jeśli tak, pętla `for...of` bierze wartości z tablicy `dane` i dodaje do spanów wg schematu `span#error_${x}` (gdzie `x` to wartość z tablicy) z pomocą `.innerHTML` słowo "Błąd" i zwraca `false`.
            2. Jeśli nie, funkcja zwraca `true`.
3. Funkcję `validate()` wywołuję po opcjach, które wyciągają dane z inputów `checkbox` i `radio`, a przed wpisywaniem danych z formularza do sekcji `podsumowanie`.
4. Uwarunkowałam wpisy do w/w sekcji tym, jeśli funkcja `validate` zwróci `true`.

## Zmiany

[CHANGELOG](./CHANGELOG.md)
