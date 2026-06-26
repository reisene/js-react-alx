# Zadanie 59_2

## Treść

Zaprojektuj program, który będzie losował liczby (1-10) wraz z działaniem (dodawanie, odejmowanie i mnożenie) i pytał użytkownika jaki jest to wynik np.:

<pre>
Ile to jest: 2 * 2 ?
Ile to jest: 9 – 4 ?
Ile to jest: 3 * 9 ?

...
</pre>

- Takich pytań powinno być 10.
- Program po 10 pytaniach prezentuje statystyki odpowiedzi to znaczy na ile pytań odpowiedziano poprawnie, a na ile błędnie.

## Logika

Zastosowałam pętlę `for` dla 10 powtórzeń. Za każdym powtórzeniem program przypisuje do zmiennych `x` i `y` dwie randomowe liczby całkowite w zakresie 1-10 (`Math.floor(Math.rand() * 10 + 1)`), tak samo do zmiennej `op` przypisuje losowo znak z tablicy `operatory` (`operatory[Math.floor(Math.random() * operatory.length)]`). Gdy to jest wylosowane, warunek sprawdza wylosowany operator i wg tego wykonuje działanie przypisywane do zmiennej `sum`.

Później pojawia się pytanie: `Ile to jest ${x} ${op} ${y}`. Program zapisuje odpowiedź do zmiennej `ask` i porównuje podany wynik z wynikiem działania, pokazując też komunikat w konsoli o poprawności lub błędzie przy pytaniach - dlatego, że przy okazji za pomocą zmiennych `pos` i `err` zliczamy ilość poprawnych i błędnych odpowiedzi.

Po 10 pytaniach użytkownik na stronie uzyskuje informację o ilości poprawnych i błędnych odpowiedzi (`document.querySelector`).
