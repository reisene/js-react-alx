# Zadanie 59_2

## Treść

Zaprojektuj program, który będzie losował liczby (1-10) i pytał użytkownika jaki jest wynik
mnożenia np.:

<pre>
Ile to jest: 2 * 2 ?
Ile to jest: 9 * 4 ?
Ile to jest: 3 * 9 ?

...
</pre>

- Pytań powinno być 5.
- Program informuje o poprawnej lub błędnej odpowiedzi.

## Logika

Zastosowałam pętlę `for` dla 5 powtórzeń. Za każdym powtórzeniem program przypisuje do zmiennych `x` i `y` dwie randomowe liczby całkowite w zakresie 1-10 (`Math.floor(Math.rand() * 10 + 1)`) i oblicza ich iloraz (`sum = x*y`). Następnie pyta użytkownika o wynik działania (`ask = Number(prompt(...))`), po czym jest sprawdzanie wyniku i w konsoli wyświetla się odpowiedni komunikat o tym, czy użytkownik podał poprawny czy błędny wynik.
