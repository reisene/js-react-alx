---
title: "Zadanie 67_1"
date: 2026-06-25
published: true
version: 1.0
---

# Zadanie 67_1

## Co było zrobione

Na lekcji (25.06) zrobiliśmy etap, gdzie dane z formularza po wciśnięciu przycisku "Wyślij" pojawiały się w części podsumowania(`<td class='podsumowanie'>`).

## Zadanie domowe

W formularzu dla wybranych pól jest dodane pole `<span class="error" id="error_{element}">`. Są to pola, które są wymagane do wypełnienia formularza. 

Dla każdego z tyh pól trzeba sprawić, by w `span` pojawił się napis `Błąd`, jeśli pola wymagane są puste.

## Wyjaśnienia

1. Wcześniej wszystkie zmienne deklarowałam w pierwszej funkcji (`document.querySelector("input[type='button']").onclick = function ()`). 
   1. Wpierw, dla czytelności i możliwości korzystania ze zmiennych w całym dokumencie, wyprowadziłam je z funkcji i dałam na początek kodu. 
   2. Przypisywanie wartości do nich zostawiłam po kliknięciu przycisku - przypisywanie ich poza tym zostawia pusty string dla wartości `imię`, `nazwisko` oraz `miasto`.
2. Stworzyłam funkcję `validate` dla sprawdzania danych.
   1. Sposoby użyte do walidacji
      1. Dla imienia i nazwiska użyłam funkcji `{element}.trim()`. Opcja `.trim()` powoduje usunięcie 'białych' znaków - spacji, tabulacji, etc. To powoduje, że jak użytkownik wprowadzi ciąg spacji, JS wyrzuci mu błąd - żeby poprawić dane pole.
      2. Dla miasta użyłam podobnego schematu, ale bez `.trim()` - jest to pole `select`, i pierwsza opcja jest oznaczona jako `value = ""`.
      3. Dla znajomości technologii użyłam opcji `.length`. Jest to input typu `checkbox`, które w zmiennej dodaję do tablicy, więc jeśli tablica jest pusta - użytkownik nie wybrał żadnej podanej opcji, co zwraca błąd.
      4. Dla stanowiska dałam opcję:
        ```js
        if (stanowisko === '' || stanowisko === undefined)
        ```
        Z tego względu, że `input type=radio` w przypadku, gdy nie jest wybrana żadna opcja, domyślnie wyrzuca `undefined`.
      5. Dla pola uwag nie dodawałam walidacji - jest to pole nieobowiązkowe
   2. Jak sprawdzałam, czy są jakieś błędy.
      1. W funkcji użyłam zmiennej `dane`, którą stworzyłam jako tablicę.
      2. Dodałam zmienną flagową (`let ok = true`).
      3. Gdy funkcja sprawdziła za pomocą `if`, że zmienna jest pusta, zmieniała flagę na `false` i dodawała string do tablicy `dane`,
      4. Po tym funkcja sprawdza, czy flaga jest ustawiona na `false`
         1. jeśli tak, pętla `for...of` bierze wartości z tablicy `dane` i dodaje do spanów wg schematu `span#error_${x}` (gdzie `x` to wartość z tablicy) z pomocą `.innerHTML` słowo "Błąd" i zwraca `false`.
         2. jeśli nie, funkcja zwraca `true`.
3. Funkcję `validate()` wywołuję po opcjach, które wyciągają dane z inputów `checkbox` i `radio`, a przed wpisywaniem danych z formularza do sekcji `podsumowanie`.
4. Uwarunkowałam wpisy do w/w sekcji tym, jeśli funkcja `validate` zwróci `true`.

## Zmiany

[CHANGELOG](./CHANGELOG.md)
