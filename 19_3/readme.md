# Zadanie 19_3

## Treść

Zaprojektuj skrypt w którym użytkownik podaje dowolną ilość dowolnych liczb całkowitych.

- Podanie liczby 0 kończy proces pobierania liczb od użytkownika.
- Jednocześnie 0 nie jest wliczane do statystyk.
- Program powinien wyświetlić:
    - Sumę podanych liczb
    - Ile podano liczb
    - Średnią z podanych liczb
    - Ile podano liczb parzystych
    - Ile podano liczb nieparzystych
    - Liczba najmniejsza
    - Liczba największa

## Logika

- Stworzyłam tablicę `tab`, do której są wpisywane liczby podawane przez użytkownika.
- w pętli `do...while` dałam funkcję, która wywołuje prompt do podania liczby i przypisuje do zmiennej `input` i wpisuje ją do tablicy jeśli nie jest 0 i nie jest `NaN` (Not a Number). Prompt pojawia się dopóty, dopóki użytkownik nie wpisze $0$.
- Dałam warunek `if`, gdzie jeśli tablica jest zapełniona (`tab.length > 0`) wykonuje działania:
  - Dla każdej liczby z tablicy (`for (let x of tab)`) dodaje ją do zmiennej `sum` (`sum += x`), jeśli jest parzysta zwiększa zmienną `even` o jeden, jeśli nie - zmienną `odd`.
  - do zmiennej `avg` przypisuję średnią liczb: `sum / tab.length`,
  - za pomocą funkcji `Math.min` i `Math.max` przeszukuję tablicę i przypisuję liczby do zmiennych `min` i `max`
  - wypisuję w konsoli zawartość tablicy
- na koniec przypisuję zmienne do odpowiednich elementów `span` (po `id`)
